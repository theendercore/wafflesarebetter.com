type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={
        "flex items-center justify-evenly bg-footer py-1 text-stone-700 " +
        className
      }
    >
      WafflesAreBetter Incorporated © (Not Really)
    </footer>
  );
}
