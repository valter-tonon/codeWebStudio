import React, { useState ,useRef} from 'react';
import Particles from './components/Letter'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global'
import  Burger  from './components/Burger'
import Menu from './components/Menu'
import { useOnClickOutside } from './hook'
import { theme } from './theme'

function App() {
  const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

  const[open, setOpen]= useState(false)
  return (
    <ThemeProvider theme={theme}>
    <div >
      <GlobalStyles/>
      <Particles/>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
    </ThemeProvider>
  )
}



export default App;
