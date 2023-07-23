import React, { HTMLAttributes } from 'react'

interface BackdropProps extends HTMLAttributes<HTMLElement> {}

export function Backdrop({ className = '', ...props }: BackdropProps) {
  return (
    <div
      className={`absolute z-40 pointer-events-auto inset-0 bg-backdrop-2/50 ${className}`}
      {...props}
    ></div>
  )
}
