'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({href, title, className=""}: {href: string, title: string, className?: string}) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} group`}>
            {title}
            <div className={
                `
                h-[2px] bg-black group-hover:w-full transition-[width] ease duration-500
                ${pathname === href ? "w-full" : "w-0"}
                `
            }></div>
        </Link>
    )
}

const menus = [
    { name: 'LIPANDA', href: "/" }, { name: 'PROGRAMMATION', href: "/lineup" }, { name: 'TICKETS', href: "/tickets" },
]

export default function Navbar() {
    return (
        <header className="w-full px-32 py-8 font-medium flex justify-center bg-light">
            <nav className="flex gap-12">
                {
                    menus.map((l, i) => (
                        <CustomLink href={l.href} title={l.name} />
                    ))
                }
            </nav>
        </header>
    )
}