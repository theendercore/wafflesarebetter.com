import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="m-auto flex items-center justify-evenly gap-40 h-fit">
      <Link as="/" href="/" className="">
        <img src="/favicon.ico" alt="WafflesAreBetter Logo" />
      </Link>
      <ul className="flex gap-20">
        <HeaderItem url="/">Home</HeaderItem>
        <HeaderItem url="/about">About Us</HeaderItem>
        <HeaderItem url="/wafflessmp">WafflesSMP</HeaderItem>
        <HeaderItem url="/tutorials">Tutorials</HeaderItem>
      </ul>
    </div>
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
      <Link as={url} href="/" className="py-8 hover:underline">
        {children}
      </Link>
    </li>
  );
}
