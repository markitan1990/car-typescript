import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';
import { GoTopButton } from "../components";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <GoTopButton />
        </>
    );
}