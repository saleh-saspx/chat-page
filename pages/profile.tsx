import Avatar from "@/components/Avatar";
import TextContainer from "@/components/TextContainer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Scores from "@/components/Scores";
import {TbEdit} from "react-icons/tb";
import InputContainer from "@/components/InputContainer";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import PictureModal from "@/components/profile/PictureModal";
import CalendarModal from "@/components/profile/CalendarModal";
import Swal from "sweetalert2";

const Profile = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);

    useEffect(() => {
        _getProfile()
    }, [])
    const _getProfile = async () => {
        try {
            let token = localStorage.getItem('user_token')
            const response = await fetch("https://hoshbato.com/app/api/user", {
                method: "GET", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            const result = await response.json();
            console.log("res:", response);
            if (response.status === 200) {
                setName(result.name)
                setPhone(result.phone)
                console.log("Success:", result);
            } else {
                console.log("Success:", result);
                // await Swal.fire({
                //     icon: 'error',
                //     title: 'خطایی رخ داده است',
                //     text: result.message,
                // })
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


    const [showModal, setShowModal] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [year, setYear] = useState("1366");
    const [month, setMonth] = useState("4");
    const [day, setDay] = useState("1");
    const [date, setDate] = useState("1366/4/1");
    const handleShowModal = useCallback(() => {
        setShowModal(true);
    }, []);
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);
    const handleSaveDate = () => {
        setDate(`${year}/${month}/${day}`);
        setShowDatePicker(false);
    };
    return (
        <>
            <Head>
                <title>پروفایل کاربری</title>
                <meta name="description" content="پنل پروفایل کاربری"/>
            </Head>
            <div className="pt-5 h-auto bg-background dark:bg-background-dark">
                <Navbar/>
                <div
                    className="h-full flex py-[205px] items-center justify-center max-md:p-10 bg-background dark:bg-background-dark">
                    <div
                        className="bg-white space-y-10 py-8 px-40 rounded-xl mx-auto w-1/2 max-md:w-full max-md:px-10 dark:bg-primary-dark">
                        <div className="relative ">
                            <Avatar src="/botttt.jpg" className="mx-auto scale-150"/>
                            <div
                                onClick={handleShowModal}
                                className="absolute cursor-pointer left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center bg-neutral-300 w-8 h-8"
                            >
                                <TbEdit/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                            <div
                                dir="rtl"
                                className="w-full border cursor-not-allowed border-neutral-400 rounded-full py-2 flex  items-center bg-background text-black justify-center dark:bg-icon max-md:flex-col"
                            >
                                {phone}
                            </div>
                            <InputContainer
                                type="text"
                                defaultValue={'n'}
                                value={name}
                                placeholder="نام و نام خانوادگی"
                            />
                            <InputContainer
                                type="text"
                                defaultValue="hesampoomni@gmail.com"
                                placeholder="ایمیل"
                            />
                            <TextContainer>
                                <div
                                    onClick={() => {
                                        setShowDatePicker(true);
                                    }}
                                    className="cursor-pointer w-full text-center"
                                >
                                    {date}
                                </div>
                            </TextContainer>
                            <InputContainer
                                type="text"
                                defaultValue="تهران"
                                placeholder="مکان"
                            />
                            <InputContainer
                                type="text"
                                defaultValue="خانم"
                                placeholder="جنسیت"
                            />
                        </div>
                        <Scores score={2000} experience={1809} referral={12}/>
                    </div>
                </div>
                <PictureModal isOpen={showModal} onClose={handleCloseModal}/>
                <CalendarModal
                    onSubmit={handleSaveDate}
                    handleDayChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setDay(event.currentTarget.value)
                    }
                    handleMonthChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setMonth(event.currentTarget.value);
                    }}
                    handleYearChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setYear(event.currentTarget.value);
                    }}
                    isOpen={showDatePicker}
                    day={day}
                    month={month}
                    year={year}
                    onClose={() => setShowDatePicker(false)}
                />
            </div>
        </>
    );
};
export default Profile;
