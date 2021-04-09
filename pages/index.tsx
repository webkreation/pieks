import Head from "next/head";
import Link from "next/link";

import Logo from "../components/logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Impf2! - Ein Impfstoff für Menschen ohne Impfstoff</title>
        <meta name="description" content="Impf2! - Ein Impfstoff für Menschen ohne Impfstoff" />
      </Head>

      <>
        <Logo />
        <h1 className="text-6xl font-bold">Impf2!</h1>
        <h2 className="text-4xl font-bold">Ein Impfstoff für Menschen ohne Impfstoff</h2>

        <p className="mt-3 text-2xl">
          Viele Menschen in Deutschland sehnen derzeit ihre Corona- Impfung herbei. Eine Impfung
          scheitert vielfach noch an der Verfügbarkeit eines Impfstoffs.
          <br />
          Viele Menschen in ärmeren Ländern wünschen sich ebenfalls sehnlichst eine Impfung. Der
          Unterschied: selbst wenn für sie irgendwann ein Impfstoff verfügbar ist, können ihre
          Heimatländer ihnen nicht so selbstverständlich eine kostenlose Impfung zur Verfügung
          stellen.
          <br />
          Die Internet- und Fundraising-Plattform Impf2! will das ändern. Über sie können in
          Deutschland geimpfte Menschen per Knopfdruck die Kosten für die Impfung einer anderen
          Person übernehmen. Kostenpunkt: 2 Euro. Dann ist das Geld da, wenn die Impfung kommt. Für
          alle, für die eine Impfung nicht so selbstverständlich ist wie für uns. Und da Corona erst
          dann endgütig vorbei ist, wenn die ganze Welt geimpft ist: Letztlich auch für uns.
        </p>
      </>
    </div>
  );
}
