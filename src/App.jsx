import './App.css';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import { AddCircle } from '@mui/icons-material';
import LeftBar from './components/LeftBar';
import Feeds from './components/Feeds';
import RightBar from './components/RightBar';
import NavBar from './components/NavBar';
import AddButton from './components/AddButton';
import { useState } from 'react';

function App() {

  const [dark, setDark] = useState('light')
  const DarkTheme = createTheme({
    palette: {
      mode: dark
    },

  });
  const [displayLeftBar, setDisplayLeftBar] = useState(false)

  return (
    <ThemeProvider theme={DarkTheme} >
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar  
        displayLeftBar={displayLeftBar} 
        setDisplayLeftBar={setDisplayLeftBar} 
        />

        <Stack direction='row' justifyContent='space-between' sx={{ gap: { xs: 0, sm: '10px' } }}>
          <LeftBar 
          setDark={setDark} 
          dark={dark}
          displayLeftBar={displayLeftBar} 
          setDisplayLeftBar={setDisplayLeftBar} 
          />
          <Feeds />
          <RightBar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>

  )
}

export default App;

