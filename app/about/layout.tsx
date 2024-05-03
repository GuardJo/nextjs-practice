import React from "react"

export default ({ children }: Props) => {
    return (
        <div>
            {children}
            <footer>
                copyright Guardjo
            </footer>
        </div>
    )
}

interface Props {
    children: React.ReactNode,
};