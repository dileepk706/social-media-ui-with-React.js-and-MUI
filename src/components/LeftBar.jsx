import { Group, Home, Inbox, LocationCity, ModeNight, Pages, People, Person, Settings, WbSunny } from "@mui/icons-material"
import { AppBar, Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Toolbar, Typography } from "@mui/material"

const LeftBar = ({ dark, setDark,displayLeftBar,setDisplayLeftBar }) => {

  
  const changeMode = () => {
    setDark(prev => {
      if (prev === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })

  }
  return (
    <Box
      
      p={1}
      sx={{ 
        display: { xs: displayLeftBar?'block':'none', md: 'block' } ,
        zIndex:{xs:displayLeftBar&&1,sm:displayLeftBar&&1,md:0} ,
        height:'100vh',
        flex:{sm:0.3,md:1},
        transition: 'opacity 1s ease',
      }}
      bgcolor={'background.default'} color={'text.primary'}
    >

      <Box position={'fixed'} height={'100vh'} bgcolor={displayLeftBar&&'background.default'} color={displayLeftBar&&'text.primary'} >
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <LocationCity />
              </ListItemIcon>
              <ListItemText primary="Trends" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                {dark === 'light' ? <WbSunny /> : <ModeNight />}
              </ListItemIcon>
              <Switch onChange={(e) => changeMode()} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default LeftBar