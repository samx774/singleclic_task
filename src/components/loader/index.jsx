
import React from "react";

export default function Loader() {
    return (
        <div className="flex justify-center items-center h-[80vh] transition-opacity duration-300 opacity-100">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>

    );
}
