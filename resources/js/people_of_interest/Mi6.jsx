import React, { useState } from "react";
import Homepage from "./components/Homepage";

export default function Mi6() {

    const [content, setContent] = useState('');

    return (
        <>
            <Homepage content={content} setContent={setContent}/>
        </>
    );
}
