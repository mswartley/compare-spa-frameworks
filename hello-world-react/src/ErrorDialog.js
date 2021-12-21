import {Dialog} from "@headlessui/react";
import {ExclamationIcon} from "@heroicons/react/outline";
import Button from "./Button";

const ErrorDialog = ({open, onClose, error}) => {
    if (error === null) {
        return null;
    }
    const {code, message} = error;
    return <Dialog
        open={open}
        onClose={onClose}
        className="fixed z-10 inset-0 overflow-y-auto"
    >
        <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75"/>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="relative border border-gray-400 bg-white rounded-lg max-w-sm mx-auto px-4 pt-5 pb-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-semibold text-gray-900">
                        Dang, That's an Error
                    </Dialog.Title>
                    <p className="mt-2 text-sm text-gray-600">{code} - {message}</p>
                </div>
                <div className="mt-4 text-center">
                    <Button onClick={onClose}>Go Back and Try Again</Button>
                </div>
            </div>
        </div>
    </Dialog>;
};

export default ErrorDialog;
