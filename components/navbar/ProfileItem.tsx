import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface ProfileItemProps {
  icon:IconType,
  className?:string | null | undefined,
  onClick?:()=>void | undefined,
}
const ProfileItem: React.FC<ProfileItemProps> = ({ icon:Icon, className, onClick }) => {
  
  return <Icon onClick={onClick} size={24} className={`text-icon cursor-pointer ${className}`} />;
};
export default ProfileItem;
