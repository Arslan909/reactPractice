import "./App.css"
import Layout from "./layout/layout"
import Body from "./components/Title"
import Detailpage from './components/Detailpage'
import Postform from "./components/Postform";

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (


        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Layout />}>

                        <Route path='/tittles' element={<Body />}></Route>
                        <Route path='/tittles/addpost' element={<Postform />}></Route>
                        <Route path='/detail/:id' element={<Detailpage />}></Route>
                        <Route path='/detail/updatepost/:id' element={<Postform />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}