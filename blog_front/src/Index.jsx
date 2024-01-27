import "./App.css"
import Layout from "./layout/layout"
import Body from "./components/Title"
import Detailpage from './components/Detailpage'

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (


        <>
            <BrowserRouter>

                <Routes>
                    <Route element={<Layout />}>

                        <Route path='/tittles' element={<Body />}></Route>
                        <Route path='/detail/:id' element={<Detailpage />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}