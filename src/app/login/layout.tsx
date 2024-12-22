import { PropsWithChildren } from "react";

import { Footer } from "@/_components/common/Footer";

export default function LoginLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      {children}

      <Footer />
    </div>
  );
}
