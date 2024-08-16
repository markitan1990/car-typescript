import { CarBox } from './components/car-box/car-box';
import { Header } from './components/header/header';
import { Home } from './components/home-page/home-page';
import { AboutUs } from './components/about-us/about-us';
import './globalStyles.scss'

export function App() {
  return (
    <>
      <Header />
      <Home/>
      <AboutUs/>
      <CarBox/>
    </>
  );
}

