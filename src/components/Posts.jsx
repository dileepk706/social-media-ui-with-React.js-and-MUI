import { CommentOutlined, Favorite, FavoriteBorder, More, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"






const Posts = ({user}) => {

    return (
        <Card  sx={{margin:{xs:1,sm:2,md:3}}} >
            <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src={user.image}

                    />

                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={user.name}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                sx={{height:{xs:'194',sm:'250',md:'420'}}}
                 
                image={user.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: 'red' }} />}
                />
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                <IconButton>
                    <CommentOutlined />
                </IconButton>

            </CardActions>
        </Card>
    )
}

export default Posts