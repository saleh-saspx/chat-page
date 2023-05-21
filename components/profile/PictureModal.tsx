import Modal from "../Modal";
import TextContainer from "../TextContainer";
import { BsCamera } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";

interface PictureModalProps {
  onClose: () => void;
  isOpen: boolean;
}
const PictureModal: React.FC<PictureModalProps> = ({ onClose, isOpen }) => {
  let bodyContent = (
    <div className="grid grid-cols-2 gap-4 ">
      <div className="text-center cursor-pointer p-5 border space-y-3 rounded-xl">
        <BsCamera className="mx-auto" size={24} />
        <p>دوربین</p>
      </div>
      <div className="text-center cursor-pointer space-y-3 p-5 border rounded-xl">
        <GrGallery className="mx-auto" size={24} />
        <p>گالری</p>
      </div>
    </div>
  );
  if (isOpen) {
    return <Modal bodyContent={bodyContent} onClose={onClose}></Modal>;
  }
  return null;
};
export default PictureModal;
