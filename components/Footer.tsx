import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <Link href="/">
          <a className="text-cyan-600 hover:text-cyan-700"> Startseite</a>
        </Link>
        <Link href="/impressum">
          <a className="text-cyan-600 hover:text-cyan-700"> Impressum</a>
        </Link>
        <Link href="/datenschutz">
          <a className="text-indio-600 hover:text-indio-700"> Datenschutz </a>
        </Link>
      </div>
    </footer>
  );
}
