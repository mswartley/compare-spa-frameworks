import { useState } from "react";
import NavButton from "../NavButton";
import SuccessDialog from "../SuccessDialog";

const Dialogs = () => {
    const [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <nav>
                <NavButton onClick={() => setShowDialog(!showDialog)}>{showDialog ? 'Hide' : 'Show'} Dialog</NavButton>
            </nav>
            <SuccessDialog open={showDialog} onClose={() => setShowDialog(false)}/>
        </>
    )
};

export default Dialogs;
