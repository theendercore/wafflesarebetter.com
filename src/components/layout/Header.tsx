import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  className: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={`flex items-center justify-between gap-10 bg-header text-xl font-semibold text-white drop-shadow-md md:px-20 lg:text-3xl ${className}`}
    >
      <Link as="/" href="/" className="flex items-center gap-5 py-3">
        <Image
          src="/waf.png"
          width={70}
          height={70}
          alt="WafflesAreBetter Logo"
          className="pixel-img drop-shadow-xl hover:brightness-90"
        />
        <span className="hover:underline">WafflesAreBetter</span>
      </Link>
      <ul className="flex gap-10">
        <HeaderItem url="/about">ABOUT US</HeaderItem>
        <HeaderItem url="/wafflessmp">WAFFLES SMP</HeaderItem>
        {/* <HeaderItem url="/tutorials">TUTORIALS</HeaderItem> */}
      </ul>
    </header>
  );
}

type HeaderItemProps = { url: string; children?: React.ReactNode };
function HeaderItem({ url, children }: HeaderItemProps) {
  return (
    <li>
      <Link as={url} href="/" className="hover:underline">
        {children}
      </Link>
    </li>
  );
}
