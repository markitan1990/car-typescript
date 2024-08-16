import {CarBox} from "./layout/section/carBox";
import { Header } from "./layout/header";
import { AboutUs } from './layout/section/aboutUs';
import './styles/globalStyles.scss'
import {Home} from "./layout/section/home";

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

