type FooterProps = {
  className: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div className="m-auto flex items-center justify-evenly gap-10 p-3 text-slate-300">
        WafflesAreBetter Incorporated © (Not Really)
      </div>
    </footer>
  );
}
