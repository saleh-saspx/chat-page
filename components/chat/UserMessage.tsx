import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BsTrashFill, BsFillClipboard2Fill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

interface UserMessageProps {
  avatarSrc: string;
  message: string;
  isBot: boolean;
}

const UserMessage: React.FC<UserMessageProps> = ({
  avatarSrc,
  message,
  isBot,
}) => {
  const [isLiked, setIsLiked] = useState<boolean | undefined>(undefined);
  const [isDisliked, setIsDisliked] = useState<boolean | undefined>(undefined);
  const handleLike = useCallback(() => {
    if (isLiked) {
      setIsLiked(undefined);
      return;
    }
    setIsDisliked(false);
    setIsLiked(true);
  }, [isLiked]);
  const handleDislike = useCallback(() => {
    if (isDisliked) {
      setIsDisliked(undefined);
      return;
    }
    setIsLiked(false);
    setIsDisliked(true);
  }, [isDisliked]);
  return (
    <div className="flex gap-6">
      <div
        dir="rtl"
        className={`px-4 py-3 max-md:px-6 max-md:py-8 relative w-full rounded-xl flex whitespace-pre-line items-center ${
          isBot
            ? "bg-white dark:bg-primary-dark dark:text-white"
            : "bg-secondary"
        }`}
      >
        {message}
        {isBot && (
          <div className="flex justify-center md:hidden absolute left-4 top-2">
            <div dir="ltr" className=" flex text-black dark:text-white">
              <button
                aria-label="like message"
                onClick={handleLike}
                className="block"
              >
                {isLiked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
              <button aria-label="dislike message" onClick={handleDislike}>
                {isDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
              </button>
            </div>
          </div>
        )}
        {isBot && (
          <div className=" absolute left-4 bottom-4 flex items-center gap-5">
            <AiOutlineDown className=" cursor-pointer text-icon" />
            <AiOutlineUp className=" cursor-pointer text-icon" />
            <BsFillClipboard2Fill className=" cursor-pointer text-icon" />
            <BiEdit className=" cursor-pointer text-icon" />
            <BsTrashFill className=" cursor-pointer text-icon" />
          </div>
        )}
      </div>
      <div className="space-y-2 max-md:hidden">
        <Avatar src={avatarSrc} />
        {isBot && (
          <div className="flex justify-center">
            <div className="space-y-2 text-black dark:text-white">
              <button
                aria-label="like message"
                onClick={handleLike}
                className="block"
              >
                {isLiked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
              <button aria-label="dislike message" onClick={handleDislike}>
                {isDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserMessage;
