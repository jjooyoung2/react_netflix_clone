import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
    const Listener = (event) => {
        if(!ref.current || ref.current.contains(event.target)){
            return;
        }
        handler();
    };

        document.addEventListener("mousedown", Listener);
        document.addEventListener("touchstart", Listener);
        return () => {
            document.addEventListener("mousedown", Listener)
            document.addEventListener("touchstart", Listener)
        };
    });
};

export default useOnClickOutside;