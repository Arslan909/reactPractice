import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css"
import { Outlet } from "react-router-dom";



export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="body-container">
                <Outlet />
            </div>
            <Footer />

        </>
    )
}