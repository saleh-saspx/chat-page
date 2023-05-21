import Image from "next/image";
import React from "react";
interface AvatarProps {
  src: string;
  className?: string;
  onClick?: () => void;
}
const Avatar: React.FC<AvatarProps> = ({ src, className, onClick }) => {
  return (
    <Image
      onClick={onClick}
      priority={true}
      src={src}
      alt="avatar"
      width={60}
      height={60}
      className={`rounded-full ${className}`}
    />
  );
};
export default Avatar;
