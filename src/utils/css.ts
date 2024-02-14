import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

/**
 * Tailwind CSS classnames
 *
 * @param inputs Classnames
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}