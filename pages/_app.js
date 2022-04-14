import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from '../components/layout';
import store from "../redux/store";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
		AOS.init({
			delay: 500,
			duration: 1200,
		});
	});

  
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
