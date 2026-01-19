import { ReactNode } from "react"
import { ClassValue } from "tailwind-variants"

export type ChildrenOrFunction<T> = ReactNode | ((renderProps: T) => ReactNode)
export type ClassNameOrFunction<T> = ClassValue | ((renderProps: T) => ClassValue)

export function renderChildren<T>(children: ChildrenOrFunction<T>, renderProps: T) {
  if (typeof children === "function") return children(renderProps)
  return children
}

export function renderClassName<T>(className: ClassNameOrFunction<T>, renderProps: T) {
  if (typeof className === "function") return className(renderProps)
  return className
}
