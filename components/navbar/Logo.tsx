import Image from "next/image";
import { Orbitron } from "next/font/google";
import { useRouter } from "next/router";

const orbitron = Orbitron({ subsets: ["latin"] });

const Logo = () => {
  const router = useRouter()
  return (
    <h1 className={`text-3xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-primary dark:text-white mx-auto  ${orbitron.className} ${router.route !== '/login' && 'max-md:hidden'}`}>HOSHBATO</h1>
  );
};
export default Logo;
