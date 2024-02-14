"use client"

import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface NavBarContextType {
    isNavBarOpen: boolean;
    setNavBarOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export function NavBarProvider({children}: { children: ReactNode }) {
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);

    return (
        <NavBarContext.Provider
            value={{isNavBarOpen, setNavBarOpen}}
        >
            <div
                {...(isNavBarOpen) && {
                    style: {
                        height: "100vh",
                        overflowY: "hidden",
                    }
                }}
            >
                {children}
            </div>
        </NavBarContext.Provider>
    );
}

export function useNavBar(): NavBarContextType {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error("useNavBar must be used within a NavBarProvider");
    }

    return context;
}

export default NavBarContext;
