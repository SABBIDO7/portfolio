interface CustomButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  href?: string | undefined
  type?: 'button' | 'submit' | 'reset'
  download?: boolean
}

export function CustomButton({
  children,
  onClick,
  className,
  href,
  download,
}: CustomButtonProps) {
  return (
    <a
      href={href}
      className={`flex items-center justify-center text-xl text-text-primary  hover:bg-bg-primary hover:border-bg-secondary hover:border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 gap-3 p-3 rounded-xl 
             group ${className}`}
      onClick={onClick}
      download={download && href}
    >
      {children}
    </a>
  )
}
