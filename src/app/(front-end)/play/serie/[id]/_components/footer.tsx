'use client'

import Link from "next/link"
import dayjs from "dayjs"

export const Footer = () => {

    return (
        <footer className=" text-white py-8 lg:px-12 px-4">
            <div className="container   flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">&copy; {dayjs().format("YYYY")} WarnerMedia Direct, LLC. Todos os direitos reservados.</div>
                <div className="flex space-x-4">
                    <Link href="https://facebook.com" aria-label="Facebook" className="text-white/70 hover:text-white transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </Link>
                    <Link href="https://twitter.com" aria-label="Twitter" className="text-white/70 hover:text-white transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://instagram.com"
                        aria-label="Instagram"
                        className="text-white/70 hover:text-white transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </Link>
                    <Link href="https://tiktok.com" aria-label="TikTok" className="text-white/70 hover:text-white transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 22V12C9 8.7 11.7 6 15 6V10C13.9 10 13 10.9 13 12V22H9Z" />
                            <path d="M15 10V2H19V10" />
                            <path d="M13 12C13 10.9 13.9 10 15 10C16.1 10 17 10.9 17 12C17 13.1 16.1 14 15 14C13.9 14 13 13.1 13 12Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}