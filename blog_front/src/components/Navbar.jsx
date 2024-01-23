import logo from "./logo.jpeg"

export default function Navbar() {
    return (
        <div className="master-nav">
            <nav className="nav-bar1">
                <img src={logo} alt="tree logo" className="logo" />
                <a href="#">work <span className="icon-span"><i className="nf nf-md-purse nav1-icon"></i> </span> </a>
                <a href="#">service <span className="icon-span"><i className="nf nf-fa-coffee nav1-icon"></i></span> </a>
                <a href="#">about <span className="icon-span"><i className="nf nf-fa-heart nav1-icon"></i></span> </a>


            </nav>
            <nav className="nav-bar2">
                <a href="#">blog <span className="icon-span"><i className="nf nf-md-message nav2-icon"></i></span></a>
                <button className="nav-button">planner <i className="nf nf-fa-leaf"></i></button>

            </nav>

        </div>
    )
}