import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  canonicalPath?: string;
};

const Header: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title ?? "Premji invest"}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1"
      />
      <meta name="description" content={props.description ?? "Premji invest"} />
      <meta property="og:title" content="Premji invest" />
      <meta
        property="og:description"
        content={props.description ?? "Premji invest"}
      />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />

      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="apple-mobile-web-app-title" content="Premji invest" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <meta name="application-name" content="Premji invest" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="format-detection" content="telephone=no" />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="twitter:creator" content="@sourabhkumar" />
      <meta property="og:site_name" content="Premji invest" />
      <meta property="og:url" content="https://www.premjiinvest.com" />
      {props.canonicalPath ? (
        <link
          rel="canonical"
          href={`https://www.premjiinvest.com${props.canonicalPath}`}
        />
      ) : (
        <link rel="canonical" href={`https://www.premjiinvest.com`} />
      )}
    </Head>
  );
};

export default Header;
