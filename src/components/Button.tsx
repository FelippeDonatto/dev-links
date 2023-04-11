import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'px-6 py-4 border border-white border-opacity-50 rounded-md mb-4 w-full transition-all backdrop-blur-sm bg-white/10 text-white hover:border-opacity-100 hover:bg-white/70 hover:text-[#000000] font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
