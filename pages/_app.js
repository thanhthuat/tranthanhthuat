import { wrapper } from '../store';
import '../assets/scss/main.scss'
import 'swiper/swiper.min.css';
import '../assets/css/boxicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
