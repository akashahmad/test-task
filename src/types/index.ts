type tButtonType = "button" | "submit" | "reset"

export interface iButtonProps {
    buttonText: string
    buttonType?: tButtonType
    className?: string
}
export interface iInputProps {
    placeholder?: string
    type: string
    required?: boolean
    minLength?: number
    maxLength?: number
    disabled?: boolean
    value?: string | number
}