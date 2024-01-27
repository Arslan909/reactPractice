
import Detailpage from './components/Detailpage'
import Tittlepage from './components/Tittlepage'
import Layout from './layout/layout'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import React from 'react'


export default function App() {

	const [Data, setData] = React.useState([])

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => setData(data))
	}, [])


	return (
		<>
			<BrowserRouter>

				<Routes>
					<Route element={<Layout />}>

						<Route path='/tittles' element={<Tittlepage titleData={Data} setData={setData} />}></Route>
						<Route path='/detail/:id' element={<Detailpage />}></Route>

					</Route>
				</Routes>
			</BrowserRouter>

		</>
	)
}

