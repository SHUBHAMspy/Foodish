import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
		AOS.init({
			delay: 500,
			duration: 1200,
		});
	});
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
