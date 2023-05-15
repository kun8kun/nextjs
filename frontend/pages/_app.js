import 'styles/globals.css'
import { Header, Footer, TabMenu } from "components/common";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <TabMenu />
    </>
  )
}
