
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string; // If you want to pass additional styles
}

const Heading: React.FC<Props> = ({ children, className }) => {
    return (
        <>
            <h1 className={`lg:text-[48px] relative text-3xl font-avon font-[400] lg:text-start text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]   ${className}`}>
                {children}
            </h1>
        </>
    );
};

export default Heading;