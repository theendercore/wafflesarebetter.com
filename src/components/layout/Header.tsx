import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <ul className="m-auto flex items-center justify-evenly gap-20">
      <HeaderItem url="/" className="self-end">
        <img src="/favicon.ico" alt="WafflesAreBetter Logo" />
      </HeaderItem>

      <HeaderItem url="/">Home</HeaderItem>
      <HeaderItem url="/about">About Me</HeaderItem>
      <HeaderItem url="/wafflessmp">WafflesSMP</HeaderItem>
      <HeaderItem url="/tutorials">Tutorials</HeaderItem>
    </ul>
  );
}

function HeaderItem({
  url,
  children,
  className,
}: {
  url: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={className}>
      <Link as={url} href="/" className="p-3">
        {children}
      </Link>
    </li>
  );
}
