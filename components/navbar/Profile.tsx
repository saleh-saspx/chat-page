import Avatar from "../Avatar";
import ProfileItem from "./ProfileItem";
import { HiBell } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { BsBrightnessHighFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

const icons = [
  { icon: HiBell, alt: "notifications" },
  { icon: IoMdSettings, alt: "settings" },
  { icon: BsBrightnessHighFill, alt: "brightness" },
];

const Profile = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const router = useRouter();
  useEffect(()=>{
    handleDarkMode()
  },[])
  const handleDarkMode = useCallback(() => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
    if(html?.classList.contains('dark')){
      setIsDark(true)
    }
    else{
      setIsDark(false)
    }
  }, [isDark]);
  return (
    <div className="flex items-center gap-5 last:max-md:block">
      {router.route !== "/login" && <Avatar className="cursor-pointer" onClick={()=>router.push('/profile')} src="/botttt.jpg" />}
      {icons.map((item) => {
        if (router.route !== '/login' || item.alt === 'brightness'){return (

          <ProfileItem
            onClick={item.alt === "brightness" ? handleDarkMode : undefined}
            key={item.alt}
            icon={isDark && item.alt === "brightness" ? FaMoon : item.icon}
            className={
              item.alt == "brightness"
                ? "max-md:block text-primary dark:text-secondary"
                : "max-md:hidden"
            }
          />
        );
      }})}
    </div>
  );
};
export default Profile;
