import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("inline-flex rounded-lg items-center justify-center text-sm font-semibold cursor-pointer transition-all hover:translate-y-[-3px] active:translate-y-0 active:shadow-none", {
    variants: {
        variant: {
            primary: "bg-primary hover:shadow-[0_3px_0_#7FB329]",
            outline: "bg-background border border-border hover:shadow-[0_3px_0_#E5E7EB]",
        },
        size: {
            base: "h-[38px] px-4",
            lg: "h-[48px] px-6",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "base",
    },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button
            className={buttonVariants({ variant, size, className })}
            {...props}
        />
    );
}
