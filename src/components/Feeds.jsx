import { Box, Typography, styled } from "@mui/material"
import Posts from "./Posts"
import img1 from '../assets/pexels-pixabay-50594.jpg'
import img2 from '../assets/Screenshot (541).png'
import img3 from '../assets/Screenshot (71).png'
import img4 from '../assets/Screenshot 2023-06-15 132250.png'

const Feeds = () => {

    const users=[
        {
            name:'Dileep.doodler'
            ,image:img1
        },
        {
            name:'Dark_knight'
            ,image:img2
        },
        {
            name:'4bhi_Pops'
            ,image:img4
        },
        {
            name:'The_XXX_MaN'
            ,image:img3
        }
    ]
  
const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        paddingLeft:'8px',
        paddingRight:'8px',
        marginTop:'8px',
        flex:1
    }
    , [theme.breakpoints.between('sm','md')]: {
        flex:0.7,
       
        marginLeft:'auto',
        marginRight:'auto',
    }
    , [theme.breakpoints.up('md')]: {
        paddingLeft:'12px',
        paddingRight:'12px',
        marginTop:'12px',
        flex:4
    }
}))
    return (
        <StyledBox            // // flex={4}
            // sx={{
            //     paddingLeft:{xs:"8px",md:'12px'},
            //     paddingRight:{xs:"8px",md:'12px'},
            //     marginTop:{xs:'8px',md:'12px'},
            //     flex:{xs:1,sm:'0',md:4},
            //     width:{sm:'70%'}
            // }}

        > 
        
        {users.map(user=>{
            return(<Posts user={user}/>)
        })}
        

        </StyledBox>


    )
}

export default Feeds