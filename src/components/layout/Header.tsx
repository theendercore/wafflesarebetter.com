import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <div className="m-auto flex h-fit items-center justify-evenly gap-40 bg-gray-700 font-semibold text-slate-300">
        <Link as="/" href="/" className="p-2">
          <Image
            src="/favicon.ico"
            width={50}
            height={50}
            alt="WafflesAreBetter Logo"
            className="drop-shadow-xl"
          />
        </Link>
        <ul className="flex gap-20">
          <HeaderItem url="/">Home</HeaderItem>
          <HeaderItem url="/about">About Us</HeaderItem>
          <HeaderItem url="/wafflessmp">WafflesSMP</HeaderItem>
          <HeaderItem url="/tutorials">Tutorials</HeaderItem>
        </ul>
      </div>
    </header>
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
