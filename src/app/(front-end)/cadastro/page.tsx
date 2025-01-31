import Image from "next/image";
import logo from "@/assets/images/logo-max.svg";
import { SignUpForm } from "./_components/form";

export default function SignUp() {
    return (
        <div className="relative h-screen overflow-y-scroll"
            style={{
                background: " linear-gradient(180deg, rgba(4,16,101,1) 0%, rgba(1,6,25,1) 48%)",
            }}
        >
            <div
                className="flex w-full px-10 py-6 "
                style={{
                    background: " linear-gradient(180deg, rgba(1,6,41,1) 0%, rgba(8,20,73,1) 100%)",
                }}
            >
                <Image
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={100}
                />
            </div>

            <SignUpForm />
        </div>
    );
}