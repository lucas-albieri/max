'use client'

import { FormProvider, useForm } from "react-hook-form";
import { type ZodSchema, type z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { HTTPError } from 'ky'

type Props<
    T extends ZodSchema,
    F extends (data: z.output<T>) => Promise<unknown> | unknown,
> = {
    schema: T
    options?: {
        defaultValues?: (Partial<z.input<T>> & Record<string, unknown>) | unknown
    }
    children: React.ReactNode
    onSubmit?: F
    onSuccess?: (data: Awaited<ReturnType<F>>) => void
}

export function FormControl<
    T extends ZodSchema,
    F extends (data: z.output<T>) => Promise<unknown> | unknown,
>({ schema, options, children, onSubmit, onSuccess, ...rest }: Props<ZodSchema, (data: z.output<T>) => Promise<unknown> | unknown>) {

    const methods = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            // @ts-ignore
            ...options.defaultValues,
        },
    })

    const { handleSubmit, formState, reset } = methods

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(async (data) => {
                    try {
                        const response = await onSubmit?.(data)
                        if ('errors' in Object(response)) {
                            const { errors } = Object(response)
                            const message =
                                typeof errors === 'string'
                                    ? errors
                                    : Object.values(errors).join(', ')

                            throw new Error(message)
                        }
                        onSuccess?.(response as Awaited<ReturnType<F>>)
                        reset()
                    } catch (error) {
                        if (error instanceof HTTPError) {
                            const data = (await error.response.json()) as { message: string }
                            toast.error(data.message)
                            return
                        }
                        if (error instanceof Error) {
                            toast.error(error.message)
                        }
                    }
                })}
                {...rest}
            >
                {children}
            </form>
        </FormProvider>
    )

}