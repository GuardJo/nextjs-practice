"use client";

import React, { useState } from "react"

export default ({ children }: Props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{children}</button>
            <h3>{count}</h3>
        </div>
    );
}

interface Props {
    children: React.ReactNode,
};