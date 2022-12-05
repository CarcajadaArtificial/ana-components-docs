import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Ana Components Docs</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/ana-components@v0.0.23/static/styles.css"
          // href="/styles.css"
        />
      </Head>
      <Component />
    </>
  );
}
