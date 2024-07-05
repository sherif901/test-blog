

import { createBrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";
import Page from "./page";

const routes = createBrowserRouter([
    {
        path:"/",
        element:
        <>
        <Navbar />
        <Home />
        <Footer />
        </>
    },
  
    {

        path:"/page/:productId",
        element:
        <>
        <Navbar />
        <Page />
        <Footer />
        </>
    }
]);

export default routes;
