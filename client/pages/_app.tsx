import { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import Layout from '../components/Layout'
import '../styles/globals.scss';
import { FC } from "react";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default wrapper.withRedux(WrappedApp)