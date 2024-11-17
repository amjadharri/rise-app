import React from "react";

interface CustomInputProps {
  label: string;
  value?: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  showMax?: boolean;
  onMaxClick?: () => void;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "0",
  showMax = true,
  disabled = false,
  onMaxClick,
  labelClassName,
  inputClassName,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  const containerShadowStyle = {
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))",
  };

  return (
    <div className="w-full my-2">
      <div
        className={`text-gradient font-semibold text-sm mb-1.5 uppercase ${labelClassName}`}
        style={containerShadowStyle}
      >
        {label}
      </div>

      <div className="relative w-full h-11 border-[1.5px] border-[#230203] bg-gradient-to-b from-[#230203] via-[#430109] to-[#230203]">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full h-full bg-transparent px-3 text-gradient font-semibold focus:outline-none
            text-md relative z-10 ${inputClassName}`}
          style={{
            caretColor: "#ffffff",
          }}
        />

        {showMax && onMaxClick && (
          <button
            onClick={onMaxClick}
            className="absolute right-2 top-1/2 -translate-y-1/2
              text-gradient transition-colors
              text-sm font-medium uppercase  z-20"
          >
            MAX
          </button>
        )}
        {/* 
        <div
          className="absolute inset-0 rounded pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)",
          }}
        /> */}
      </div>
    </div>
  );
};

export default CustomInput;
