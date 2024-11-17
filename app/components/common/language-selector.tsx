import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

interface Language {
  code: string;
  name: string;
  countryCode: string;
}

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (code: string) => void;
  className?: string;
}

const LANGUAGES: Language[] = [
  { code: "ENG", name: "English", countryCode: "US" },
  { code: "ESP", name: "Español", countryCode: "ES" },
  { code: "FRA", name: "Français", countryCode: "FR" },
  { code: "DEU", name: "Deutsch", countryCode: "DE" },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onLanguageChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === currentLang) || LANGUAGES[0];

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <div className="flex items-center gap-2">
          <ReactCountryFlag
            countryCode={currentLanguage.countryCode}
            svg
            style={{
              width: "1em",
              height: "1em",
              borderRadius: "50%", // Full rounded
              // borderTop: "0.5px solid #AE896C",
              borderBottom: "0.5px solid #AE896C",
              // boxShadow: "0 0 0 2px , 0 0 0 3px # , 0 0 0 4px #",
            }}
            title={currentLanguage.name}
          />

          <span className="text-gradient font-semibold text-xs">
            {currentLanguage.code}
          </span>
        </div>

        <svg
          className={`w-4 h-4 text-[#E4D9BD] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-1 z-50 min-w-[150px] py-1 bg-[#130e08] rounded shadow-lg">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  onLanguageChange(language.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${
                  currentLang === language.code
                    ? "bg-[#130e08] text-white"
                    : "text-gray-300"
                } transition-colors`}
              >
                <ReactCountryFlag
                  countryCode={language.countryCode}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                  title={language.name}
                />
                <span className="font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
