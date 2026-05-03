import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name='title' content='Nestar Demo' />
        <meta name= 'robots' content='index, follow' />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/* SEO Meta Tags */ }
        <meta name='keyword' content={'nextjs, nestar, demo, real estate, property listing, nestar.uz, devex, mern, mern nestjs fullstack'} />
        <meta name='description' content={
          "Buy and Sell properties anywhre anytime in South Korea. |" +
          "한국에서 언제 어디서나 부동산을 사고팔 수 있습니다. |" +
          "Купить и продавать недвижимость в любое время в Южной Корее. |"
        } />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}