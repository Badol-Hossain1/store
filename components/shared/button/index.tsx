import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'



const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
    {
        variants: {
            variant: {
                common: ' border-none  text-white hover:bg-black  hover:text-white dark:bg-black dark:text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
                default:
                    'bg-transparent border border-[#222222] text-[#222222] hover:bg-black  hover:text-white dark:bg-black dark:text-black',
                destructive:
                    'bg-white text-black hover:bg-black hover:text-white dark:hover:bg-red-600',
                outline:
                    'bg-white border  hover:bg-black text-black hover:text-white dark:border-slate-700 dark:text-black',
                subtle:
                    ' border-black text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
                ghost:
                    'bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
                login: 'bg-transparent border border-black hover:bg-slate-100 dark:border-slate-700 text-black hover:bg-black dark:bg-slate-50 dark:text-slate-900 hover:text-white'
            },
            size: {
                default: 'h-10 py-2 px-4 rounded-full',
                sm: 'py-2 px-8  rounded-full',
                lg: 'h-11 px-8 rounded-md',
                full: 'w-full  px-6 rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, href, variant, size, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }))}
                >
                    {children}
                </Link>
            )
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }