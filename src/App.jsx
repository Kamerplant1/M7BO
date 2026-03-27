import './App.css'
import { AboutMe } from './AboutMe'
import { TimeGreet } from './TimeGreet'
import { Top10 } from './Top10'
import { CookieClicker } from './cookieclicker'
import { Pokemon } from './Pokemon'

function App() {

  return (
    <>
      <main>
        <AboutMe />
      </main>

      <div>
        <TimeGreet />
      </div>

      <div>
        <Top10 />
      </div>

      <div>
        <CookieClicker />
      </div>

      <div >
        <Pokemon />
      </div>
    </>
  )
}

export default App