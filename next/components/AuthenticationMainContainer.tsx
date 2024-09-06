import React from "react";

export const AuthenticationMainContainer = ({
  children,
}: {
  children: React.ReactNode[];
}) => {
  return (
    <main className="bg-beige-100 w-full h-project-main flex justify-center items-center xl:justify-between xl:h-screen">
      {children}
    </main>
  );
};
