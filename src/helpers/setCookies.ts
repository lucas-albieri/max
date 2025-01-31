'use server'

import { cookies } from 'next/headers'

export async function setCookie(name: string, value: string) {
    ; (await cookies()).set(name, value, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
    })
}