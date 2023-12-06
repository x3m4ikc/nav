import { createContext, useContext, useState } from "react";

const SubmenuContext = createContext();

export const SubmenuProvider = ({ children }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    }

    return (
        <SubmenuContext.Provider value={{ isSubMenuOpen, toggleSubMenu}}>
            { children }
        </SubmenuContext.Provider>
    )
}

export const useSubmenu = () => {
    return useContext(SubmenuContext);
};
