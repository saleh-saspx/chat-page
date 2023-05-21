import Image from "next/image"
import React from "react"
import { IconType } from "react-icons/lib/esm/iconBase"

interface TabItemProps{
    icon:IconType,
    selected:boolean,
    onClick:()=>void
}
const TabItem:React.FC<TabItemProps> = ({icon:Icon, onClick, selected})=>{
    return <div onClick={onClick} className={`w-[48px] h-[48px] rounded-full cursor-pointer flex items-center justify-center  ${selected ? 'bg-primary text-white': 'text-icon'}`}>
        <Icon size={24} />
    </div>
}
export default TabItem