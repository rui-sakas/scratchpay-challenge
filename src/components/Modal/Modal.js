import React from 'react';
import {
    Button,
    Modal as ModalRS,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

const Modal = ({ onConfirm, onDismiss, labels, isVisible }) => {
    return (
        <>
            <ModalRS isOpen={isVisible} toggle={() => onDismiss()}>
                <ModalHeader>{labels.header}</ModalHeader>
                <ModalBody>{labels.body}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => onDismiss()}>
                        {labels.cancelButton}
                    </Button>
                    <Button color="danger" onClick={() => onConfirm()}>
                        {labels.confirmButton}
                    </Button>
                </ModalFooter>
            </ModalRS>
        </>
    );
};

export default Modal;
