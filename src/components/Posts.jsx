import { CommentOutlined, Favorite, FavoriteBorder, More, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Skeleton, Typography } from "@mui/material"
import { useState } from "react";






const Posts = (props) => {
    const [user, setUser] = useState([])
    const [loading, setLoding] = useState(true)

    setTimeout(() => {
        setUser(props.user)
        setLoding(false)
    }, 3000);

    return (
        <Card sx={{ margin: { xs: 1, sm: 2, md: 3 } }} >
            <CardHeader

                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt="Remy Sharp"
                            src={user.image}
                        />
                    )


                }

                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    )

                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        user.name
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        '5 hours ago'
                    )
                }
            />
            {loading ? (
                <Skeleton sx={{ height: { xs: 190, sm: 250, md: 400 } }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    sx={{ height: { xs: '194', sm: '250', md: '420' } }}

                    image={user.image}
                    alt="Paella dish"
                />
            )}

            <CardContent>
                {
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <Typography variant="body2" color="text.secondary">This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                    )
                }

            </CardContent>
            <CardActions disableSpacing>
                {
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <>
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
                        </>
                    )
                }


            </CardActions>
        </Card>
    )
}

export default Posts