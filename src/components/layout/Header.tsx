import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <ul className="m-auto flex items-center justify-evenly gap-10 p-5">
      <HeaderItem
        children={<img src="/favicon.ico" alt="WafflesAreBetter Logo" />}
        url="/"
        className="self-end"
      />

      <HeaderItem children="Home" url="/" />
      <HeaderItem children="About Me" url="/about" />
      <HeaderItem children="WafflesSMP" url="/wafflessmp" />
      <HeaderItem children="Tutorials" url="/tutorials" />
    </ul>
  );
}

function HeaderItem({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={className}>
      <Link as={url} href="/">
        {children}
      </Link>
    </li>
  );
}
