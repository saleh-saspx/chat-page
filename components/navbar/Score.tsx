import { useRouter } from "next/router"


const Score = ()=>{
    const router = useRouter()
    if (router.route === '/login'){
        return null
    }
    return <div className=" gap-10 h-[20px] w-[250px] max-md:w-[150px] rounded-xl bg-icon flex justify-end items-center ml-8 max-md:absolute max-md:left-1/2 max-md:top-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2">
        <div className="bg-primary flex gap-5 text-sm text-white px-3 rounded-full ">
            <p>29750</p>
            <p>امتیاز</p>
        </div>
    </div>
}
export default Score