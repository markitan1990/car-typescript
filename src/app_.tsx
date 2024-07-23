import { CarBox } from './components/car-box/car-box';
import { Header } from './components/header/header';
import { Home } from './components/home-page/home-page';
import { LoginBox } from './components/modal/login-box';
import { Modal } from './components/modal/modal';
import { AboutUs } from './components/about-us/about-us';
import Scroll from './components/scroll/scroll';

export function App() {
  return (
    <>
      <Modal />
      <LoginBox />
      <Header />
      <Home/>
      <AboutUs/>
      <CarBox/>
    </>
  );
}

