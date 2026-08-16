import React, { createContext, useContext, useState, ReactNode, useRef } from "react";
import ModalWindowsBase from "./ModalWindowBase";

interface IModalWindowBaseCtx {
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void,
    builder: (content: IModalWindowContent) => void,
    content: IModalWindowContent
}

interface IModalWindowContent {
    children: React.ReactNode,
    label: React.ReactNode,
    class?: string,
}


const ModalWindowBaseCtx = createContext<IModalWindowBaseCtx | undefined>(undefined);

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
            {isOpenModal === true ? <ModalWindowsBase /> : <></>}
            {children}
        </ModalWindowBaseCtx.Provider>
    );
}

export const useModalWindowCtx = () => {
    const ctx = useContext(ModalWindowBaseCtx);
    if (!ctx) {
        throw new Error('useModalWindowCtx only use inside in ModalWindowProvider');
    }
    return ctx;
}