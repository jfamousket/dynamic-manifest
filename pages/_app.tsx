import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { useMemo } from "react";
import { useRouter } from "next/router";

/**
 *
 * @param key the query key
 * @returns the query value to the query key
 */
export const useNextQueryParam = (key: string): string | undefined => {
  const { asPath } = useRouter();

  const value = useMemo(() => {
    const match = asPath.match(new RegExp(`[&?]${key}=(.*?)(&|$)`));
    if (!match) return undefined;
    return decodeURIComponent(match[1]);
  }, [asPath, key]);

  return value;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = useNextQueryParam("theme");
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href={`/manifest.json?theme=${theme}`} />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
