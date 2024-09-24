import './App.css'
import Aboutpage from './components/aboutpage'
import Cardskerala from './components/Cardskerala'
import Headernav from './components/headernav'
import Homepage from './components/homepage'
import Slider from './components/slider'
import {Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react'

function App() {
const Hpage=lazy(()=>import('./components/homepage'))
const Apage=lazy(()=>import('./components/aboutpage'))
  return (
    <>
      <Headernav/>
      <section>
      <Suspense fallback={<div>loading....</div>}>
       <Routes>
        
        <Route path="/" element={<Hpage/>}/><Route/>
        <Route path="/about" element={<Apage/>}/><Route/>
       </Routes>
       </Suspense>
       </section>
       
    </>
  )
}

export default App
