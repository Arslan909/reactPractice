import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <h1>this header is placed in Header.jsx which render Title Link and which is then imported in Layout</h1>
            <nav>
                <Link to="/tittles">Tittle</Link>
                {/* <Link to="/detail/:id">Detail</Link> */}

            </nav>
        </>
    )
}