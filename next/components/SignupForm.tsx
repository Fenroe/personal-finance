"use client";
import React, { useState } from "react";
import Image from "next/image";

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex-1 flex justify-center p-project-200 md:px-project-500 md:py-project-400">
      <form
        action=""
        className="bg-white w-full max-w-[560px] px-project-250 py-project-300 flex flex-col gap-project-400 rounded-lg"
      >
        <h1 className="text-preset-1">Sign Up</h1>
        <div className="flex flex-col gap-project-200">
          <div className="flex flex-col gap-project-50">
            <label htmlFor="" className="text-grey-500 text-preset-5-b">
              Name
            </label>
            <input
              type="text"
              className="p-project-200 border-beige-500 border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-project-50">
            <label htmlFor="" className="text-grey-500 text-preset-5-b">
              Email
            </label>
            <input
              type="email"
              className="p-project-200 border-beige-500 border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-project-50">
            <label htmlFor="password" className="text-grey-500 text-preset-5-b">
              Create Password
            </label>
            <div className="relative">
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                className="p-project-200 border-beige-500 border-2 rounded-lg w-full pr-[64px]"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="h-full absolute top-1/2 -translate-y-1/2 right-0 px-project-200"
              >
                {showPassword ? (
                  <Image
                    src="/assets/images/icon-hide-password.svg"
                    alt="Hide password"
                    width={0}
                    height={0}
                    className="w-auto h-auto"
                  />
                ) : (
                  <Image
                    src="/assets/images/icon-show-password.svg"
                    alt="Show password"
                    width={0}
                    height={0}
                    className="w-auto h-auto"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <button className="py-project-200 bg-grey-900 text-white rounded-lg text-preset-4-b">
          Create Account
        </button>
        <span className="text-center text-preset-4-r">
          Already have an account?{" "}
          <a href="/login" className="text-preset-4-b underline">
            Login
          </a>
        </span>
      </form>
    </div>
  );
};
