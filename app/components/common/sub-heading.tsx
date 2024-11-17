
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string; // If you want to pass additional styles
}

const SubHeading: React.FC<Props> = ({ children, className }) => {
    return (
        <>
            <h1 className={`lg:text-lg relative text-xs font-cinzel font-[500] lg:text-start text-center  text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]   ${className}`}>
                {children}
            </h1>
        </>
    );
};

export default SubHeading;