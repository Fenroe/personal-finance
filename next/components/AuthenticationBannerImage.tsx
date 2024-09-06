import React from "react";
import Image from "next/image";

export const AuthenticationBannerImage = () => {
  return (
    <div className="p-project-250 hidden xl:flex w-[600px] h-full">
      <div className="w-full p-project-500 login-signup-desktop-container flex flex-col h-full justify-between">
        <Image
          src="/assets/images/logo-large.svg"
          alt="Finance"
          width={122}
          height={0}
          className="h-auto"
        />
        <div className="flex flex-col gap-project-300">
          <h1 className="text-preset-1 text-white">
            Keep track of your money <br />
            and save for your future.
          </h1>
          <h2 className="text-preset-4-r text-white">
            Personal finance app puts you in control of your spending. Track{" "}
            <br />
            transactions, set budgets, and add to savings pots easily.
          </h2>
        </div>
      </div>
    </div>
  );
};
