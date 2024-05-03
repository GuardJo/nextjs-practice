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
                <li>
                    <Link href={'/test'}>Test</Link>{currentPath === '/test' ? '😊' : ''}
                </li>
            </ul>
        </nav>
    );
}