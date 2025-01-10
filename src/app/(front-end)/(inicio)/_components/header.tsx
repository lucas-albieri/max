'use client'

import { Button } from '@/components/ui/button';
import logo from '../../../../assets/images/logo-max.svg';

export function Header() {
    return (
        <div className="flex items-center justify-between h-14 bg-neutral-900 text-white w-full px-4">
            <div className="flex items-center">
                <img
                    src={logo.src}
                    alt="Logo"
                    className="h-8"
                />
            </div>
            <div className="flex items-center gap-1">
                <Button className="mr-4">
                    Entrar
                </Button>
                <Button
                    variant={'secondary'}
                    color='blue'
                    className='text-white bg-blue-800'
                >
                    ASSINE AGORA
                </Button>
            </div>
        </div>
    )
}