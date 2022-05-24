import { MantineProvider } from "@mantine/core";
import Nav from "../components/nav";
import "../styles/globals.css";
import { ModalsProvider } from "@mantine/modals";
function MyApp({ Component, pageProps }) {
  return (
    // <body className=" bg-primary_bg">
    <>
      <ModalsProvider>
        <Nav />
        <Component {...pageProps} />
      </ModalsProvider>
    </>
    // </body>
  );
}

export default MyApp;
