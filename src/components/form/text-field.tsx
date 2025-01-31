import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { ComponentProps } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { cn } from "@/lib/utils";

type Props = {
    name: string
    label?: string
    placeHolder?: string
} & ComponentProps<typeof Input>

export function TextField({ name, label, className, ...rest }: Props) {

    const { control } = useFormContext()

    return (
        <FormField
            control={control}
            defaultValue={""}
            name={name}
            render={({ field }) => (
                <FormItem
                    className="w-full"
                >
                    <FormLabel
                        className="text-white text-lg font-bold"
                    >
                        {label}
                    </FormLabel>
                    <FormControl
                    >
                        <Input
                            className={cn("text-white bg-[#00000033] ", className)}
                            {...field}
                            {...rest}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}