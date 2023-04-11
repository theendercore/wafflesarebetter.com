import { type } from "os";
import React from "react";

type SButtonProps = {
  children: React.ReactNode;
};

export default function SButton({ children }: SButtonProps) {
  return (
    <div className="rounded-md bg-slate-400 px-2 py-1 text-lg text-gray-600 drop-shadow hover:bg-slate-500 hover:text-gray-100 hover:underline">
      {children}
    </div>
  );
}