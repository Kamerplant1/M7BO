import './App.css'
import { Routes, Route, Link } from 'react-router'
import { About } from './about'
import { Games } from './games'
import { Contact } from './contact'

function App() {

  return (
    <>
      <main>
        <nav>
          <ul className='navlist'>
         
              <li className='navlist__item'>
                <Link className="nav__link" to="/about">About</Link>
              </li>
               <li className='navlist__item'>
              <Link className="nav__link" to="/games">Games</Link>
            </li>
            <li className='navlist__item'>
              <Link className='nav__link' to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}


export default App