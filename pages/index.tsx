import ChatMenu from "@/components/chat-menu/ChatMenu";
import Chat from "@/components/chat/Chat";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import {useCallback, useState, useEffect} from "react";
// @ts-ignore
import {router} from "next/router";
import LoginModal from "@/components/login/LoginModal";

// export async function getServerSideProps() {
//     return {
//         props: {},
//     };
// }

const Home = () => {
    const [token, setToken] = useState()
    useEffect(() => {
        // Perform localStorage action
        let tokenn = localStorage.getItem('user_token')
        // @ts-ignore
        setToken(tokenn)
    }, [])
    console.log(token)
    return (
        <>
            <Head>
                <title>چت</title>
                <meta name="description" content="با هوش مصنوعی چت کنید"/>
            </Head>
            <div className="bg-background pt-5  dark:bg-background-dark">
                <Navbar/>
                {token === undefined || token === null || token === "null" ?
                    <div className="flex gap-5 max-md:flex-col-reverse">
                        <LoginModal isOpen={true} onClose={() => router.push('/login')}/>
                    </div>
                    :
                    <div className="flex gap-5 max-md:flex-col-reverse">
                        <Chat/>
                        <ChatMenu/>
                    </div>
                }

            </div>
        </>
    );
};
export default Home;
