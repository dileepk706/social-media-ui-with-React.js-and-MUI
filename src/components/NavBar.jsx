import { LogoDev, Mail, Notifications, } from "@mui/icons-material"
import avatar from '../assets/Copy of IMG-20210415-WA0003.jpg'
import { useState } from "react"

const { Box, AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } = require("@mui/material")


const NavBar = ({displayLeftBar , setDisplayLeftBar }) => {

    const [open,setOpen]=useState(false)

    const handlingOpen=()=>{
        setOpen(true)
    }

    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>DevDil</Typography>
                <StyledIcon onClick={()=>{
                    console.log('from nav',displayLeftBar);
                    setDisplayLeftBar(!displayLeftBar)
                }} sx={{ display: { xs: 'block', md: 'none' } }} />

                <Search><InputBase placeholder="search..." /></Search>
                
                <Icons 
                    onClick={() => {
                        handlingOpen()
                    }}>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="white" />
                    </Badge>
                    <Avatar 
                    alt="Remy Sharp" 
                    src={avatar}
                    
                    />
                </Icons>
                <UserBox>
                    <Avatar 
                    alt="Remy Sharp" 
                    src={avatar}
                    onClick={e=>{
                        handlingOpen()
                    }} 
                    />
                    <Typography variant="span">Dileep</Typography>
                </UserBox>
            </StyledToolBar>

            {/* display menu */}
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default NavBar

const Icons = styled(Box)(({ theme }) => ({
    display: 'none'
    , justifyContent: 'space-between'
    , alignItems: 'center'
    , gap: '20px'
    , [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex'
    , justifyContent: 'center'
    , alignItems: 'center'
    , gap: '5px'
    , [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}))

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'

})
const StyledIcon = styled(LogoDev)({
    fontSize: '55px'
})