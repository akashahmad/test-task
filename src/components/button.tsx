import { iButtonProps } from "../types"
const Button = ({ buttonText, buttonType, className }: iButtonProps) => {
    return (
        <button className={`bg-black text-sm md:text-lg text-white py-2 px-6 rounded-full ${className}`} type={buttonType || "button"}>
            {buttonText}
        </button>
    );
}
export default Button;