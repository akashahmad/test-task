import { iInputProps } from "../types"
const Input: React.FC<iInputProps> = ({ placeholder, type, required, minLength, maxLength, disabled, inputRef }) => (
    <input className={`bg-gray-100 h-12 w-12 md:h-24 md:w-24 shadow-sm rounded outline-none p-2 text-center text-lg appearance-none ${disabled && "cursor-not-allowed"}`}
        type={type} placeholder={placeholder}
        required={required || false} minLength={minLength || 2} maxLength={maxLength || 200}
        disabled={disabled}
        ref={inputRef}
    />
);
export default Input;