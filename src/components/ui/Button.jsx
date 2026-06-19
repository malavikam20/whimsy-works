const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2'

  const variants = {
    primary: 'bg-brass text-teak hover:bg-brass-light shadow-md hover:shadow-lg',
    secondary: 'bg-maroon text-ivory hover:bg-maroon/80 shadow-md',
    outline: 'border-2 border-brass text-brass hover:bg-brass hover:text-teak',
    ghost: 'text-brass hover:text-brass-light underline-offset-4 hover:underline',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (as === 'a') {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button