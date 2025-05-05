import React from "react";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="button-footer" onClick={scrollToTop}>
            Наверх &uarr;
        </button>
    );
};

export default ScrollToTopButton;
