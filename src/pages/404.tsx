import Link from "next/link";
import Layout from "~/components/layout/Layout";
import SButton from "../components/SButton";

export default function FourOhFour() {
  return (
    <Layout title="404 Waf Not Found">
      <div className="flex min-h-[86vh] flex-col items-center justify-center gap-4">
        <h2 className="text-4xl">404 - Page Not Found</h2>
        <SButton>
          <Link as="/" href="/">
            Go back home
          </Link>
        </SButton>
      </div>
    </Layout>
  );
}
