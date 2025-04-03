'use client'

import logo from '../../../../assets/images/logo-max.svg';
import Link from 'next/link';
import { BookmarkIcon, MenuIcon, SearchIcon, XIcon } from 'lucide-react';
import avatarIcon from "../../../../assets/images/picapau.png";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        {
            title: 'Inicio',
            href: '/'
        },
        {
            title: 'Séries',
            href: '/series'
        },
        {
            title: 'Filmes',
            href: '/movies'
        },
        {
            title: 'HBO',
            href: '/hbo'
        },
        {
            title: 'TNT SPORTS',
            href: '/tnt-sports'
        },
        {
            title: 'Crianças & Família',
            href: '/kids'
        }
    ]

    const pathname = usePathname();

    useEffect(() => {
        const container = document.getElementById("scrollable-container");

        const handleScroll = () => {
            setScrolled((container?.scrollTop ?? 0) > 50);
        };

        container?.addEventListener("scroll", handleScroll);
        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full h-20 z-50 flex items-center px-6 md:px-20 justify-between text-white
                        transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md" : "bg-black/10 backdrop-blur-sm"} `
            }
        >
            <div className="relative flex items-center z-10">
                <Image src={logo.src} alt="Logo" width={100} height={100} className="h-8" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 relative z-10">
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <p
                            className="hover:text-gray-300 text-md font-bold"
                            style={{
                                textDecoration: pathname === link.href ? "underline" : "none",
                                textUnderlineOffset: "12px",
                                textDecorationThickness: "3px",
                            }}
                        >
                            {link.title}
                        </p>
                    </Link>
                ))}
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center gap-6 relative z-10">
                <SearchIcon className="h-6 w-6 cursor-pointer" />
                <BookmarkIcon className="h-6 w-6 cursor-pointer" />
                <UserIcon />
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden relative z-10">
                {menuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} onClick={() => setMenuOpen(false)}>
                            <p
                                className="hover:text-gray-300 text-md font-bold"
                                style={{
                                    textDecoration: pathname === link.href ? "underline" : "none",
                                    textUnderlineOffset: "12px",
                                    textDecorationThickness: "3px",
                                }}
                            >
                                {link.title}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

const UserIcon = () => {
    return (
        <div className="flex items-center gap-2 cursor-pointer ">
            <Image
                src={avatarIcon.src}
                alt="User"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full hover:border hover:border-white "
            />
        </div>
    )
}