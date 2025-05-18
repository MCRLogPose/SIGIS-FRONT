import React from 'react'
import clsx from 'clsx'

const GenericButton = ({
  children,
  icon: Icon, // <- El icono se pasa como un componente
  onClick,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors flex items-center gap-2'
  const variants = {
    default: 'bg-black text-white hover:bg-gray-400 cursor-pointer',
    secondary: 'bg-green-800 text-white hover:bg-green-700 cursor-pointer',
    destructive: 'bg-red-800 text-white hover:bg-red-700 cursor-pointer',
  }

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />} {/* Icono opcional */}
      {children}
    </button>
  )
}

export default GenericButton