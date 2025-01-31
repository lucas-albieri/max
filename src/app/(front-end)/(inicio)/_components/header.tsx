'use client'

import { Button } from '@/components/ui/button';
import logo from '../../../../assets/images/logo-max.svg';
import Link from 'next/link';

export function Header() {
    return (
        <div className="flex items-center justify-between h-14 bg-neutral-950 text-white w-full px-4 fixed top-0 bg-opacity-95 z-10">
            <div className="flex items-center">
                <img
                    src={logo.src}
                    alt="Logo"
                    className="lg:h-8 h-6"
                />
            </div>
            <div className="flex items-center gap-2">

                <Button
                    className="text-white font-semibold  text-xs lg:text-sm hover:bg-white/15 hover:no-underline"
                    variant={'link'}
                >
                    ENTRAR
                </Button>
                <Link
                    href="/cadastro"
                >
                    <Button
                        variant={'secondary'}
                        className='text-white bg-primary hover:bg-primary-hover font-extrabold px-6  text-xs lg:text-sm'
                    >
                        ASSINE AGORA
                    </Button>
                </Link>

            </div>
        </div>
    )
}