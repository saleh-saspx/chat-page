import Modal from "../Modal";
import TextContainer from "../TextContainer";
import { BsCamera } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import RouterModal from "@/components/RouterModal";

interface PictureModalProps {
    onClose: () => void;
    isOpen: boolean;
}
const PictureModal: React.FC<PictureModalProps> = ({ onClose, isOpen }) => {
    let bodyContent = (
        <h4>
            برای استفاده از هوش بات ابتدا باید ابتدا وارد ربات شوید
        </h4>
        // <div className="grid grid-cols-2 gap-4 ">
        //     <div className="text-center cursor-pointer p-5 border space-y-3 rounded-xl">
        //         <BsCamera className="mx-auto" size={24} />
        //         <p>دوربین</p>
        //     </div>
        //     <div className="text-center cursor-pointer space-y-3 p-5 border rounded-xl">
        //         <GrGallery className="mx-auto" size={24} />
        //         <p>گالری</p>
        //     </div>
        // </div>
    );
    if (isOpen) {
        return <RouterModal bodyContent={bodyContent} onClose={onClose}></RouterModal>;
    }
    return null;
};
export default PictureModal;
