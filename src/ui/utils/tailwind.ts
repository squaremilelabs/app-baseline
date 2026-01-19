import { extendTailwindMerge } from "tailwind-merge"
import { createTV, ClassValue } from "tailwind-variants"

const twMergeConfig: Parameters<typeof extendTailwindMerge>[0] = {}

export const cn = (...inputs: ClassValue[]) => extendTailwindMerge(twMergeConfig)(inputs)
export const tv = createTV({ twMergeConfig })
export type { ClassValue }
