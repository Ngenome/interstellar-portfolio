import { MantineProvider } from "@mantine/core";
import Nav from "../components/nav";
import "../styles/globals.css";
import { ModalsProvider } from "@mantine/modals";
import SocialIcons from "../components/social-icons";
function MyApp({ Component, pageProps }) {
  return (
    // <body className=" bg-primary_bg">
    <>
      <ModalsProvider>
        <Nav />
        <Component {...pageProps} />
        <SocialIcons />
      </ModalsProvider>
    </>
    // </body>
  );
}

export default MyApp;
