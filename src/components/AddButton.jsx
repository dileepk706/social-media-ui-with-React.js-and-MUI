import { Add, DateRange, EmojiEmotions, InsertPhoto, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, Zoom, styled } from "@mui/material"
import { useState } from "react"
import avatar from '../assets/Copy of IMG-20210415-WA0003.jpg'


const AddButton = ({ dark, setDark }) => {

    const [open, setOpen] = useState(false)


    return (
        <>
            <Tooltip TransitionComponent={Zoom} title="Add"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: 'calc(50%)', md: 40 },
                    transform: { xs: 'translateX(-25px)', md: 'none' },
                }}
            >
                <Fab color="primary" aria-label="add" onClick={()=>setOpen(true)}>
                    <Add />
                </Fab>
            </Tooltip>

            {/* creae post */}
            <StyledModal
                open={open}
                onClose ={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{width:{sm:400,md:500}}}
                    borderRadius={'30px'}
                    padding={'20px'}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                >
                    <Typography id="modal-modal-title" variant="h6" textAlign={'center'} color={'gray'}>
                        Create New Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp" src={avatar} />
                        <Typography variant="caption" fontSize={15} fontWeight={10}>
                            dileep.doodler
                        </Typography>
                    </UserBox>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        placeholder="Whats your feeling"
                        variant="standard"
                        fullWidth
                        sx={{ marginTop: '10px' }}
                    />
                    <Stack direction={'row'} spacing={1} marginTop={3}>
                        <EmojiEmotions color='primary' />
                        <InsertPhoto color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup sx={{marginTop:'50px'}} fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button >Post</Button>
                        <Button sx={{width:'100px'}}>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>


    )
}

export default AddButton


const StyledModal = styled(Modal)({
    display: 'flex'
    , justifyContent: 'center'
    , alignItems: 'center'
})

const UserBox = styled(Box)({
    display: 'flex'
    , justifyContent: 'flex-start'
    , alignItems: 'center'
    , gap: '10px'
    , margin: '10px 0'

})
