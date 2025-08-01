import type { ReactNode } from "react";
type FullBleedProps = {
  children: ReactNode;
  className?: string;
};

export default function FullBleed({
  children,
  className = "",
}: FullBleedProps) {
  return (
    <div
      className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${className}`}
    >
      {children}
    </div>
  );

}

