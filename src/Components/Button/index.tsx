import { tv, VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

const button = tv({
    base: [
        'rounded-xl h-12 w-full px-4 py-2 text-sm font-semibold text-black outline-none shadow-sm',
        'focus-visible::ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-950 transition',
        'active:opacity-80'
    ],
    variants: {
        variant: {
            ghost:
                'rounded-md px-2 hover:bg-zinc-50 shadow-none hover:brightness-90',
            primary:
                'bg-emerald-600 text-white hover:bg-emerald-500',
            outline:
                'border-2 text-green-950 border border-green-950 hover:brightness-90 bg-green-100'
        }
    },
    defaultVariants: {
        variant: 'primary',
    }
})

export interface ButtonProps extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
    const Component = asChild ? Slot : 'button'

    return <Component {...props} className={button({ variant, className })} />
}