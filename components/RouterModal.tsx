import React from "react";
import Button from "./Button";

interface ModalProps {

    onClose: () => void;
    bodyContent: React.ReactNode;
}

const RouterModal: React.FC<ModalProps> = ({ onClose, bodyContent }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white space-y-4 p-10 z-50 rounded-xl text-center">
                {bodyContent}
                <Button label="ورود/ثبت نام" onClick={onClose} active />
            </div>
        </div>
    );
};
export default RouterModal;
