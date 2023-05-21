// import {useState} from "react";
// import Image from "next/image";
// import Button from "../Button";
// import Input from "../Input";
// import {useRouter} from "next/router";
// import {RiH1} from "react-icons/ri";
//
// enum STEPS {
//     PHONE,
//     VERIFY,
// }
//
// const LoginBody = () => {
//     const [step, setStep] = useState(0);
//     const [phone, setPhone] = useState();
//     const router = useRouter();
//
//     const _sendOTP = async () => {
//         const data = {phone: "09306077333", password: "Sas"};
//         try {
//             const response = await fetch("http://127.0.0.1:8000/api/login", {
//                 method: "POST", // or 'PUT'
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });
//
//             const result = await response.json();
//             console.log("Success:", result);
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }
//     console.log(phone)
//     return (
//         <div className={`flex items-center justify-center w-full pt-64`}>
//             <div className="space-y-8 w-[500px] px-10">
//                 {step == STEPS.PHONE ? (
//                     <h1 className="text-center text-2xl text-primary dark:text-white">
//                         شماره همراه را وارد کنید
//                     </h1>
//                 ) : (
//                     <h1 className="text-center text-2xl text-primary dark:text-white">
//                         کد ارسال شده را وارد کنید
//                     </h1>
//                 )}
//                 {step === STEPS.PHONE ? (
//                     <Input value={phone} onChange={() => setPhone(phone)} type="text" placeholder="شماره همراه"/>
//                 ) : (
//                     <div className="flex justify-center items-center gap-4">
//                         <Input type="text" maxLength={1}/>
//                         <Input type="text" maxLength={1}/>
//                         <Input type="text" maxLength={1}/>
//                         <Input type="text" maxLength={1}/>
//                         <Input type="text" maxLength={1}/>
//                     </div>
//                 )}
//                 <Button
//                     onClick={
//                         step === STEPS.PHONE
//                             ? () => setStep('VERIFY')
//                             : () => setStep('LOGIN')
//                     }
//                     label={step === STEPS.PHONE ? "ارسال کد" : "ورود به برنامه"}
//                     active
//                 />
//                 {step === STEPS.VERIFY && (
//                     <div className="flex items-center text-primary justify-between dark:text-white">
//                         <p>00:00</p>
//                         <p>ارسال مجدد کد</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default LoginBody;

import React, {useState} from "react";
import Image from "next/image";
import Button from "../Button";
import Input from "../Input";
import {useRouter} from "next/router";
import Swal from 'sweetalert2'

const LoginBody = () => {
    const [step, setStep] = useState("LOGIN");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameJoin, setUsernameJoin] = useState('');
    const [passwordJoin, setPasswordJoin] = useState('');
    const [name, setName] = useState('');

    const router = useRouter();
    const _sendOTP = async () => {
        const data = {phone: username, password};
        try {
            const response = await fetch("https://hoshbato.com/app/api/login", {
                method: "POST", // or 'PUT'
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log("res:", response);
            if (response.status === 200) {
                sessionStorage.setItem('user_token', result.token);
                localStorage.setItem('user_token', result.token);
                router.push('/')
                console.log("Success:", result);
            } else {
                console.log("Success:", result);
                await Swal.fire({
                    icon: 'error',
                    title: 'خطایی رخ داده است',
                    text: result.message,
                })
            }
        } catch (error) {
            console.log("Error:", error);
            await Swal.fire({
                icon: 'error',
                title: 'خطایی رخ داده است',
                text: 'اتصال اینترنت خود را بررسی کنید',
            })
        }
    }
    const _join = async () => {
        const data = {phone: usernameJoin, password: passwordJoin, name};
        try {
            const response = await fetch("https://hoshbato.com/app/api/join", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log("res:", response);
            if (response.status === 200) {
                sessionStorage.setItem('user_token', result.token);
                localStorage.setItem('user_token', result.token);
                router.push('/')
                console.log("Success:", result);
            } else {
                console.log("Success:", result);
                await Swal.fire({
                    icon: 'error',
                    title: 'خطایی رخ داده است',
                    text: result.message,
                })
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    console.log(step)
    return (
        <div className={`flex items-center justify-center w-full ${step == "LOGIN" ? 'pt-48' : 'pt-24'}`}>
            <div className="space-y-6 w-[500px] px-10">
                {step == "LOGIN"}
                <h1 className="text-center text-2xl text-primary dark:text-white">
                    {step === "LOGIN" ? 'تلفن همراه و رمز عبور را وارد کنید' : 'لطفا مشخصات خود را تکمیل نمایید'}
                </h1>
                {step == "LOGIN" ?
                    <>

                        <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text"
                               placeholder="تلفن همراه"/>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                               placeholder="رمز عبور"/>
                    </>
                    :
                    <>
                        <Input value={name} onChange={(e) => setName(e.target.value)} type="text"
                               placeholder="نام مستعار"/>
                        <Input value={usernameJoin} onChange={(e) => setUsernameJoin(e.target.value)} type="text"
                               placeholder="تلفن همراه"/>
                        <Input value={passwordJoin} onChange={(e) => setPasswordJoin(e.target.value)} type="password"
                               placeholder="رمز عبور"/>

                    </>
                }
                <button onClick={() => {
                    if (step === "LOGIN") {
                        setStep('JOIN')
                    } else {
                        setStep('LOGIN')
                    }
                }}>
                    <h6 className="text-center text-primary dark:text-white">
                        {step == "LOGIN" ? 'حساب کاربری ندارید؟ الان ثبت نام کنید' : 'حساب کاربری دارید؟هم اکنون وارد شوید'}
                    </h6>
                </button>

                <Button
                    onClick={step == "LOGIN" ? _sendOTP : _join}
                    label={step == "LOGIN" ? "ورود به برنامه" : "ثبت نام"}
                    active
                />
            </div>
        </div>
    );
};
export default LoginBody;

