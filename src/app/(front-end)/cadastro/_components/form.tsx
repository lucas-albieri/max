'use client'

import { FormControl } from "@/components/form/form-control"
import { TextField } from "@/components/form/text-field"
import { Button } from "@/components/ui/button"
import { z } from "zod"

export function SignUpForm() {

    const onSubmit = async (data: Record<string | number, string>) => {
        console.log(data, 'data')
    }

    return (
        <FormControl
            options={{ defaultValues: { name: '', email: '', password: '', passwordConfirmation: '' } }}
            schema={
                z.object({
                    name: z.string().min(3, 'Nome muito curto').max(255, 'Nome muito longo'),
                })
            }
            onSubmit={onSubmit}
        >
            <div
                className="flex flex-col px-40 py-40 items-center"
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
                    className="flex flex-col gap-8 mt-8 py-10 px-8 rounded-lg w-96 items-center justify-center"
                    style={{
                        background: "hsla(0, 0%, 87%, .06)",
                    }}
                >
                    <TextField
                        name="name"
                        label="Nome"
                        className=" w-full py-6 text-3xl"
                    />

                    <Button
                        className="bg-gray-200 hover:bg-white text-slate-900 font-bold text-lg "
                        size={'lg'}
                    >
                        Cadastrar
                    </Button>

                </div>


            </div>
        </FormControl>

    )
}