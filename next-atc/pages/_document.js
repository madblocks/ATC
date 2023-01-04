import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Noto+Sans:wght@400;700;800&family=Old+Standard+TT:wght@400;700&family=Poppins:ital,wght@0,400;0,600;1,300&display=swap" 
          rel="stylesheet">
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
