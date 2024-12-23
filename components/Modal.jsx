'use client';

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Link,
} from "@nextui-org/react";

export const PhoneIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M6.6 10.2c1.6 3 4.2 5.6 7.2 7.2l2.4-2.4c.4-.4 1-.4 1.4-.2 1 .4 2 .6 3.2.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C15 21 3 9 3 1c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1 .2 2 .6 3.2.2.4.2 1 0 1.4L6.6 10.2z"
                fill="currentColor"
            />
        </svg>
    );
};

function ModalApp() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className=" min-h-screen flex items-center justify-center">
            <Button color="none" className="border border-solid text-white" onPress={onOpen}>
                Aloqa
            </Button>
            <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <div className="bg-black text-white p-4 rounded-lg">
                            <ModalHeader className="text-center font-bold text-lg text-white">
                                So'rov qoldiring va menejerimiz siz bilan bog'lanadi
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    placeholder="Ismingiz?"
                                    variant="bordered"
                                    className="outline-none text-white bg-black border-gray-700"
                                />
                                <Input
                                    placeholder="Telefon raqamingiz"
                                    startContent={
                                        <PhoneIcon className="text-2xl text-gray-400 flex-shrink-0" />
                                    }
                                    variant="bordered"
                                    className="outline-none text-white bg-black border-gray-700"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" className="w-full bg-pink-500 text-white">
                                    Jo'natish
                                </Button>
                            </ModalFooter>
                            <div className="text-center mt-4">
                                <Link
                                    color="primary"
                                    href="https:/t.me/wgsm3"
                                    target="_blank"
                                    className="flex items-center justify-center text-sm text-pink-500"
                                >
                                    <PhoneIcon className="mr-2" /> Yoki biz bilan bog'laning
                                </Link>
                            </div>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default ModalApp;
