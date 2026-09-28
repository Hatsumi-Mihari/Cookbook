import { createContext, useState } from "react";
import{ ModalWindowBase} from '@/widgets';
import { type IModalWindowContent } from '@/widgets/Modalwondow/'
import { debugUI } from "@/utils/debug";

interface IModalWindowBaseCtx {
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void,
            /**
        * @param children - React.ReactNode
        * @param label - string
        * @param class - custom class css.
        */
    builder: (content: IModalWindowContent) => void,
    content: IModalWindowContent
}

export const ModalWindowBaseCtx = createContext<IModalWindowBaseCtx | undefined>(undefined);

export const ModalWindowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpenModal, setIsOpen] = useState(false);
    const [contentModal, setContentModal] = useState<React.ReactNode>(<></>);
    const [contentModalLable, setContentLable] = useState<React.ReactNode>(<>.</>);
    const [customClass, setClass] = useState<string>("")

    const openM = () => setIsOpen(true);
    const closeM = () => {
        setContentModal(<></>);
        setContentLable(<></>);
        setClass("");
        setIsOpen(false);
    }
    const builderM = (content: IModalWindowContent) => {
        debugUI("ModalWindowProvider", `builder -> lable: ${content.label}, classCSS: ${content.class ?? ""}`);
        setContentModal(content.children);
        setContentLable(content.label);
        setClass(content.class ?? "")
        setIsOpen(true);
    }

    const value = {
        isOpen: isOpenModal,
        openModal: () => openM(),
        closeModal: () => closeM(),
        builder: (content: IModalWindowContent) => builderM(content),
        content: {
            children: contentModal,
            label: contentModalLable,
            class: customClass,
        }
    }

    return (
        <ModalWindowBaseCtx.Provider value={value}>
            {isOpenModal === true ? <ModalWindowBase /> : <></>}
            {children}
        </ModalWindowBaseCtx.Provider>
    );
}