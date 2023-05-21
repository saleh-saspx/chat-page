import {useCallback, useState} from "react";
import ChatInput from "./ChatInput";
import UserMessage from "./UserMessage";
import cuid from "cuid";
import axios from "axios";

const demoMessages = [
    {
        id: cuid(),
        isBot: true,
        message: "سلام...به هوش بات خوش آمدید :) چطور میتوانم کمکتان کنم؟",
    },
];

const Chat = () => {
    const [messages, setMassages] = useState<Array<object>>(demoMessages);

    const addMessage = useCallback(
        async (message: any) => {
            if (message.message === "") {
                return;
            }
            setMassages((prevMessages) => [...prevMessages, message]);

            try {
                let token = localStorage.getItem('user_token')
                // const response = await axios.post(
                //   "https://hoshbato.com/app/api/chat/",
                //   { message: message.message },
                //   {
                //       headers: {
                //           "Content-Type": "application/json",
                //           "Authorization": `Bearer ${token}`
                //       },
                //   }
                // );
                let data = {message: message.message}
                const response = await fetch("https://hoshbato.com/app/api/chat", {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(data),
                });
                const result = await response.json();
                setMassages((prevMessages) => [
                    ...prevMessages,
                    {id: cuid(), isBot: true, message: result[0].content},
                ]);
                console.log(result);
            } catch (error) {
                console.error(error);
                setMassages((prevMessages) => [
                    ...prevMessages,
                    {id: cuid(), isBot: true, message: "ارتباط با api بر قرار نشد"},
                ]);
            }
        },
        [messages]
    );
    return (
        <div
            className=" w-4/5 relative max-md:w-full pl-12 max-md:px-5 max-md:pt-0 bg-background dark:bg-background-dark ">
            <div
                dir="rtl"
                className="chat-box h-[700px] overflow-y-auto py-10 max-md:pt-0 "
            >
                <div dir="ltr" className="space-y-6 pl-40 pb-24 max-md:pl-0">
                    {messages.map((message: any) => (
                        <UserMessage
                            key={message.id}
                            isBot={message.isBot}
                            message={message.message}
                            avatarSrc={message.isBot ? "/bot.jpg" : "/uss.png"}
                        />
                    ))}
                </div>
            </div>
            <ChatInput onSubmit={addMessage}/>
        </div>
    );
};
export default Chat;
