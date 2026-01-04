import {Outlet, Link, NavLink, useLocation} from "react-router-dom";
import {React,Component} from "react";
import { useMediaQuery } from 'react-responsive'
import NavigationHeaderDesktop from "../components/NavigationHeaderDesktop";
import NavigationHeaderMobile from "../components/NavigationHeaderMobile";
import Footer from "../components/Footer";
const Layout = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });
    const isMobile = !isDesktop;

    return (
        <>
            {isDesktop && <NavigationHeaderDesktop></NavigationHeaderDesktop>}
            {isMobile && <NavigationHeaderMobile></NavigationHeaderMobile>}
            <main className="site-main d-flex flex-column min-vh-100">
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    )
};





export default Layout;
