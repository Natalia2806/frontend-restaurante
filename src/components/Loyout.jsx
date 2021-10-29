import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
function Layout(props) {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                {props.children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;
