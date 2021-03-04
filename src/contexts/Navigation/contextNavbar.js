import React, { createContext, useState } from 'react'

const ContextoNavbar = createContext();

const ProviderNavbar = ({ children }) => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [breakWidth, setBreakWidth] = useState(1300);
    const [toggleStateA, setToggleStateA] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const navStyle = {
        // paddingLeft:
        //     windowWidth > breakWidth ? "210px" : "16px"
    };

    const specialCaseNavbarStyles = {
        WebkitBoxOrient: "horizontal",
        flexDirection: "row"
    };

    const handleToggleClickA = () => {
        setToggleStateA(!toggleStateA);
    };

    return (
        <ContextoNavbar.Provider
            value={
                {
                    windowWidth,
                    breakWidth,
                    specialCaseNavbarStyles,
                    navStyle,
                    toggleStateA,
                    handleToggleClickA,
                    handleResize
                }
            }
        >
            {children}
        </ContextoNavbar.Provider>
    )
}

export { ProviderNavbar, ContextoNavbar }
