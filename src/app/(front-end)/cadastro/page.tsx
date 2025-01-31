import Image from "next/image";
import logo from "@/assets/images/logo-max.svg";
import { SignUpForm } from "./_components/form";

export default function SignUp() {
    return (
        <div className="relative h-screen w-full overflow-y-scroll"
            style={{
                background: " linear-gradient(180deg, rgba(4,16,101,1) 0%, rgba(1,6,25,1) 48%)",
            }}
        >
            <div
                className="flex w-full px-10 fixed top-0 h-20"
                style={{
                    // background: " linear-gradient(180deg, rgba(1,6,41,.5) 0%, rgba(8,20,73,.5) 100%)",
                    background: "rgba(26,26,26,.5)",
                }}
            >
                <Image
                    src={logo}
                    alt="Logo"
                    width={80}
                    height={80}
                />
            </div>

            <SignUpForm />
        </div>
    );
}