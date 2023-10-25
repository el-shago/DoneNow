import { useState, useCallback } from "react";

export function AccountMenu() {
  const [variant, setVariant] = useState("login");
  const login = () => {};
  const register = () => {};
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="justify-center font-Lexend relative h-screen flex items-center bg-gradient-to-b from-green-400 to-black">
      
        <div className="">
          <h2 className="text-white text-4xl mb-8 font-semibold text-center">
            {variant === "login"
              ? "Log into your account"
              : "Create an account"}
          </h2>
          <div className="flex flex-col gap-4 ">
            {variant === "register" && (
              <input
                id="name"
                type="name"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                className="rounded-2xl text-white text-xl py-2 px-3 w-full placeholder-white placeholder-opacity-80"
                placeholder="Username"
              />
            )}
            <input
              id="email"
              type="email"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="rounded-2xl text-white text-xl py-2 px-3 w-full placeholder-white placeholder-opacity-80"
              placeholder="Email"
            />
            <input
              id="password"
              type="password"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="rounded-2xl text-white text-xl py-2 px-3 w-full placeholder-white placeholder-opacity-80"
              placeholder="Password"
            />

            <p className="text-[#FFFFFF] text-opacity-50 mt-12">
              {variant === "login"
                ? "First time using DoneNow?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Log In"}
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={variant == "login" ? login : register}
              className="bg-transparent border border-[#1ED947] py-3 px-10 text-[#1ED947] rounded-md mt-10 hover:bg-[#1ED947] hover:text-white transition-all duration-300"
            >
              Go
            </button>
          </div>
        </div>
      </div>
  );
}

export default AccountMenu;
