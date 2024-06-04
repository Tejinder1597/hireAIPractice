// import SideBar from "./components/SideBar/SideBar";
// import Header from "./components/Header/Header";

import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
// import JobFeed from "../../components/JobFeed/JobFeed";
import SideBar from "../../components/SideBar/SideBar";


import '../../common/style.css'
import './Layout.css'
import Footer from "../../components/Footer/Footer";

// import JobFeed from "./components/JobFeed/JobFeed";

const Layout = () => {
    return (
        <div>
            <div className="back head">
                <SideBar />
                <Header />
            </div>
            
            <Outlet />
            {/* <div>
                <Footer />
            </div> */}
        </div>

    )
}

export default Layout;