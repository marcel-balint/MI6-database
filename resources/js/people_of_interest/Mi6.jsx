import React from "react";
import Homepage from "./components/Homepage";
import { useState } from "react";

export default function Mi6() {
    const [content, setContent] = useState('');

    return (
        <>
            <Homepage content={content} setContent={setContent}/>
        </>
    );
}
