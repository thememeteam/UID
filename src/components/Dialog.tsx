import { useEffect, useRef } from "react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({isOpen, onClose, className, children}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(isOpen)
            dialogRef.current?.showModal();
        else
            dialogRef.current?.close();
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} className={className} onClose={() => onClose?.()}>
            {children}
        </dialog>
    )
}

export default Dialog;