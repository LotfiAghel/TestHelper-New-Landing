export type LoginStep = 1 | 2 | 3;

export interface ModalStepProps {
    onNext: () => void;
    onPrev: () => void;
    setPhoneNumber: (phone: string) => void;
    phoneNumber: string;
}

export interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}
