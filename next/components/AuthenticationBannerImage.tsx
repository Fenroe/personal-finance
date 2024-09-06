import React from "react";
import { LogoLink } from "./LogoLink";

export const AuthenticationBannerImage = () => {
  return (
    <div className="p-project-250 hidden xl:flex flex-1 justify-center h-full">
      <div className="p-project-500 login-signup-desktop-container flex flex-col w-[600px] h-full justify-between">
        <LogoLink />
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
