import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"
import img1 from '../assets/pexels-pixabay-50594.jpg'
import img2 from '../assets/Screenshot (541).png'
import img3 from '../assets/Screenshot (71).png'
import img4 from '../assets/Screenshot 2023-06-15 132250.png'
import LetestCahts from "./LatestChats"

const RightBar=()=>{

    const users=[
        {
            name:'Dileep.doodler'
            ,image:img1,
            chat:'hi....how are you'
        },
        {
            name:'Dark_knight'
            ,image:img2,
            chat:'are u free tomarrow?'
        },
        {
            name:'4bhi_Pops'
            ,image:img4,
            chat:'how was the party man..'
        },
      
    ]
    
    return(
        <Box 
        flex={2} 
        p={5}
        sx={{display:{xs:'none',md:'block'}}}
        >
           <Box position={'fixed'} width={300}>
                
                {/* connections */}
                <Typography variant="h6" fontWeight={100} color={'gray'}>Connections</Typography>
                <AvatarGroup total={24} sx={{display:'flex',justifyContent:'center'}}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/3.jpg" />
                </AvatarGroup>

                {/* latest uploaded postes */}
                <Typography variant="h6" fontWeight={100} color={'gray'} marginTop={'20px'}>Latest Posts</Typography>
                <ImageList cols={3} rowHeight={100} gap={5} >
                    <ImageListItem sx={{borderRadius:'10px'}}>
                        <img style={{borderRadius:'10px'}} src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img style={{borderRadius:'10px'}} src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img style={{borderRadius:'10px'}} src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" alt="" />
                    </ImageListItem>
                </ImageList>

                {/* latest Chats */}
                {/* latest uploaded postes */}
                <Typography variant="h6" fontWeight={100} color={'gray'} marginTop={'20px'}>Latest Chats</Typography>
                
                {users.map(user => {
                    return (
                        <LetestCahts user={user} />
                    )
                })}
                
           </Box>
        </Box>

    )
}

export default RightBar