"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export default () => {
    const currentPath = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>{currentPath === '/' ? '😊' : ''}
                </li>
                <li>
                    <Link href={'/about'}>About</Link>{currentPath === '/about' ? '😊' : ''}
                </li>
            </ul>
        </nav>
    );
}