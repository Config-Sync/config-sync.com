"use client";

import {ReactNode} from "react";
import {NavBarProvider} from "@/context/NavBarContext";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <NavBarProvider>
            {children}
        </NavBarProvider>
    );
}