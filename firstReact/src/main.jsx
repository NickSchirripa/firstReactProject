
import { createRoot } from 'react-dom/client'



import './index.css'


const root = createRoot(document.getElementById("root"))

function Header(){
  return(
    <header>
    <img className ="pic" src="src/assets/SilkCircle.png" alt="Silk Logo"></img>
  </header>
  )
}

function Main(){
  return(
  
    <main>
    <h1>Johny SilkBoots</h1>
    <h2>Games I Like</h2>
    <ul>
      <li>Street Fighter</li>
      <li>Ico</li>
      <li>Shadow of the Colossus</li>
      <li>Final Fantasy</li>
      <li>Nier Automata</li>
      <li>Death Stranding</li>
      <li>LotRO</li>
    </ul>
</main>

  )
}

function Footer(){
  return(
    <footer> "© 2025 SilkBoots development. All rights reserved."</footer>
  )
}


function TempInfo(){
  return(
<>
  <Header/>
  <Main/>
  <Footer/>
</>
  )
}


root.render(
  <TempInfo/>
  )