'use client'

import logo from '../../../../assets/images/logo-max.svg';
import Link from 'next/link';
import { BookmarkIcon, SearchIcon } from 'lucide-react';
import avatarIcon from "../../../../assets/images/picapau.png";
import { usePathname } from 'next/navigation';

export function Header() {

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

    return (
        <div className="flex items-center justify-between h-20  text-white w-full px-20 fixed top-0 z-10" >
            <div
                className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-black/10 -z-10"
            />
            <div className="flex items-center" >
                <img
                    src={logo.src}
                    alt="Logo"
                    className="lg:h-8 h-6"
                />
            </div>
            <div className="flex items-center gap-8" >

                {
                    links.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}
                            >
                                <p
                                    className="hover:text-gray-300 text-md font-bold"
                                    style={{
                                        textDecoration: pathname === link.href ? 'underline' : 'none',
                                        textUnderlineOffset: '12px',
                                        textDecorationThickness: '3px'
                                    }}
                                >
                                    {link.title}
                                </p>
                            </Link>
                        )
                    })
                }

            </div>

            <div
                className="flex items-center gap-8"
            >
                <SearchIcon className="h-6 w-6 cursor-pointer" />
                <BookmarkIcon className="h-6 w-6 cursor-pointer" />
                <UserIcon />
            </div>
        </div>
    )
}

const UserIcon = () => {
    return (
        <div className="flex items-center gap-2 cursor-pointer ">
            <img
                src={avatarIcon.src}
                alt="User"
                className="h-8 w-8 rounded-full hover:border hover:border-white "
            />
        </div>
    )
}