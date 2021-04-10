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
        <h1>Impf2 e.V.!</h1>
        <h2>Spende einen Impfstoff für Menschen ohne Impfstoff!</h2>
<div class="flex items-center">
     <img src="https://philipp.meier.name/assets/impf2gib2.png" class="scale-50"/>
</div>

<form action="https://www.paypal.com/donate" method="post" target="_top" class="text-xl">
<input type="hidden" name="hosted_button_id" value="F4ARYB6S9UTVC" />
<div class="flex items-center">
<input type="image" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"  class="align-bottom"/>&nbsp;über&nbsp;<img src="https://www.paypalobjects.com/webstatic/de_DE/i/de-pp-logo-150px.png" border="0" alt="PayPal Logo" />
</div>
</form>


        <p className="hero">
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
