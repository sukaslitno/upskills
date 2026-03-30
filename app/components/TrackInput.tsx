"use client";

import { useState, useRef } from "react";

type InputState = "default" | "hover" | "focused" | "filled" | "error";

export default function TrackInput() {
  const [value, setValue] = useState("");
  const [inputState, setInputState] = useState<InputState>("default");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const trackNumberRegex = /^[A-Z]{2}\d{9}[A-Z]{2}$/i;

  const getBorderColor = () => {
    switch (inputState) {
      case "error":
        return "border-2 border-red-500";
      case "focused":
        return "border-2 border-[#64d3ff]";
      case "hover":
        return "border-2 border-[#64d3ff]/50";
      case "filled":
        return "border-2 border-[#161616]/20";
      default:
        return "border-2 border-transparent";
    }
  };

  const handleTrack = () => {
    if (loading) return;

    if (!value.trim()) {
      setInputState("error");
      setErrorMessage("Введите номер отправления");
      return;
    }

    if (!trackNumberRegex.test(value.trim())) {
      setInputState("error");
      setErrorMessage("Неверный формат номера");
      return;
    }

    setErrorMessage("");
    setInputState("filled");
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleFocus = () => {
    setInputState("focused");
    setErrorMessage("");
  };

  const handleBlur = () => {
    setInputState(value ? "filled" : "default");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (errorMessage) {
      setErrorMessage("");
      setInputState("focused");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 w-full">
        <div
          className={`bg-white flex items-center h-[50px] px-6 py-2.5 rounded-2xl w-full transition-all ${getBorderColor()}`}
          onMouseEnter={() => {
            if (inputState === "default") setInputState("hover");
          }}
          onMouseLeave={() => {
            if (inputState === "hover") setInputState("default");
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Введите трек-номер"
            className="w-full bg-transparent outline-none text-base font-semibold text-[#161616] placeholder:text-[#161616]/25"
          />
        </div>
        {errorMessage ? (
          <p className="text-red-500 text-xs font-medium px-6">{errorMessage}</p>
        ) : (
          <div className="flex items-center justify-center px-6">
            <p className="text-[10px] font-medium text-[#161616]/65">
              Например: RA123456789CN, LX987654321US
            </p>
          </div>
        )}
      </div>
      <button
        onClick={handleTrack}
        className="bg-[#d8ff74] flex gap-4 h-[50px] items-center justify-center px-6 py-1 rounded-2xl w-full hover:bg-[#c8ef64] active:bg-[#b8df54] transition-colors cursor-pointer"
      >
        {loading ? (
          <div className="spinner" />
        ) : (
          <span className="font-semibold text-base text-[#161616]">
            Отследить
          </span>
        )}
      </button>
    </div>
  );
}
