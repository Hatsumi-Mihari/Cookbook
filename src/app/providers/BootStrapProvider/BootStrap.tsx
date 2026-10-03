import React, {useState, useEffect} from "react";
import {Loader} from '@/views'
import { debugProvider } from "@/utils/debug";

export const BootStrapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loaded, setStateLoad] = useState<boolean>(false)
    debugProvider("BootStrapProvider", "Init app");

    useEffect(() => {
        setStateLoad(true);
    }, []);

    return (
        <>{loaded === true ? <>{children}</> : <Loader/>}</>
    );
}