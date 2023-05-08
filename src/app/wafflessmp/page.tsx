import React from "react";
import Link from "next/link";

export default function SMP() {
  return (
    <>
      <ul className="flex w-full items-center justify-center gap-5">
        <Listicle url="map">Map</Listicle>
        <Listicle url="countries">Countries</Listicle>
      </ul>
      <div>SMP stuff</div>
    </>
  );
}

function Listicle({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link as={`/wafflessmp/${url}`} href="/" className="py-4 hover:underline">
        {children}
      </Link>
    </li>
  );
}
