import { Nav } from "@/components/Nav";
import "@/styles/globals.css";
import Head from "next/head";
import { Scrollbar } from "react-scrollbars-custom";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" charSet="UTF-8" />
        <title>Next blog with MDX</title>
      </Head>

      <div className='flex flex-col w-4/5 justify-center items-center mx-auto'>
        <Nav />
      </div>
      <Component {...pageProps} />
    </>
  );
}
