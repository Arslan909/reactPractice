
import Detailpage from './components/Detailpage'
import Tittlepage from './components/Tittlepage'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import './App.css'

export default function App() {

	return (
		<>
			<BrowserRouter>
				<nav>
					<Link to="/tittles">Tittle</Link>
					<Link to="/detail/:id">Detail</Link>

				</nav>


				<Routes>
					<Route path='/tittles' element={<Tittlepage />}></Route>
					<Route path='/detail/:id' element={<Detailpage />}></Route>
				</Routes>
			</BrowserRouter>

		</>
	)
}

