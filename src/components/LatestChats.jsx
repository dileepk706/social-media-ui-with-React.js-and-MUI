import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"

const LetestCahts=({user})=>{

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.image} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.name}
                    secondary={
                        <React.Fragment>
                         
                            {`-${user.chat}....`}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    )
}

export default LetestCahts

