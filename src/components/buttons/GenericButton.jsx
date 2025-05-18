import React from 'react'
import clsx from 'clsx' // Opcional: para combinar clases

const GenericButton = ({ children, onClick, variant = 'default', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors'
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default GenericButton