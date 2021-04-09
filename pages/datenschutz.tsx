import Head from "next/head";
import Logo from "../components/logo";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Datenschutz | Impf2!</title>
        <meta name="description" content="Datenschutz" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        Datenschutz
      </main>
    </div>
  );
}
