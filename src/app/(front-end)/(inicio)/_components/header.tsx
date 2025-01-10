'use client'

import { Button } from '@/components/ui/button';
import logo from '../../../../assets/images/logo-max.svg';

export function Header() {
    return (
        <div className="flex items-center justify-between h-14 bg-neutral-950 text-white w-full px-4 fixed top-0 bg-opacity-95 z-10">
            <div className="flex items-center">
                <img
                    src={logo.src}
                    alt="Logo"
                    className="h-8"
                />
            </div>
            <div className="flex items-center gap-2">
                <Button
                    className="text-white font-semibold"
                    variant={'link'}
                >
                    ENTRAR
                </Button>
                <Button
                    variant={'secondary'}
                    className='text-white bg-blue-800 hover:bg-blue-900 font-semibold'
                >
                    ASSINE AGORA
                </Button>
            </div>
        </div>
    )
}