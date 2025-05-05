import React from "react";
import { useNavigate } from "react-router-dom";

export const withNavigation = (WrappedComponent) => {
    return(props) => {
        const navigate = useNavigate();
        return <WrappedComponent {...props} navigate={navigate} />;
    };
};