import { iInputProps } from "../types"
const Input = ({ placeholder, type, required, minLength, maxLength, value, disabled }: iInputProps) => {
    return (
        <input className="bg-gray-100 h-12 w-12 md:h-24 md:w-24 shadow-sm rounded outline-none p-2 text-center text-lg appearance-none"
            type={type} placeholder={placeholder}
            required={required || false} minLength={minLength || 2} maxLength={maxLength || 200} value={value}
            disabled={disabled}
        />
    );
}
export default Input;