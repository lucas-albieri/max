'use client'

import { FormControl } from "@/components/form/form-control"
import { TextField } from "@/components/form/text-field"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { googleSignIn, signUp } from "../_core/sign-up"
import { toast } from "sonner"
import googleIcon from "@/assets/images/social-media/google.png"
import Image from "next/image"

export function SignUpForm() {

    const onSubmit = async (data: Record<string | number, string>) => {
        await signUp(data)
        toast.success('Cadastro realizado com sucesso')
    }

    return (
        <FormControl
            options={{ defaultValues: {} }}
            schema={
                z.object({
                    displayName: z.string(),
                    email: z.string().email('Email inválido'),
                    password: z.string().min(6, 'Senha muito curta'),
                })
            }
            onSubmit={onSubmit}
        >
            <div
                className="flex flex-col px-6 lg:px-40 py-20 lg:py-40 items-center"
            >
                <h1
                    className="text-white text-4xl font-bold"
                >
                    Faça seu Cadastro
                </h1>
                <p
                    className="text-gray-400 text-lg text-center mt-2"
                >
                    Assista sucessos de bilheteria, produções originais inéditas e favoritos da família.
                </p>

                <div
                    className="flex flex-col gap-4 mt-8 py-8 lg:py-16 px-8 lg:px-16 rounded-lg w-full lg:w-[35rem] items-center justify-center"
                    style={{
                        background: "hsla(2, 0%, 90%, .09)",
                    }}
                >
                    <TextField
                        name="displayName"
                        label="Nome"
                        className=" w-full py-6 text-3xl"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        className=" w-full py-6 text-3xl"
                    />
                    <TextField
                        name="password"
                        label="Senha"
                        type="password"
                        className=" w-full py-6 text-3xl"
                    />
                    <div
                        className="flex flex-col gap-4 w-full mt-6"
                    >
                        <Button
                            className="bg-transparent border hover:bg-white/10 text-white font-bold text-lg w-full py-7"
                            size={'lg'}
                            type="submit"
                        >
                            Criar Conta
                        </Button>
                        <Button
                            className="bg-gray-200 hover:bg-white text-slate-900 font-bold text-lg w-full py-7"
                            size={'lg'}
                            type="button"
                            onClick={googleSignIn}
                        >
                            <Image
                                src={googleIcon}
                                alt="Google"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            Entrar com o Google
                        </Button>
                    </div>

                </div>


            </div>
        </FormControl>

    )
}