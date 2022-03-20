import React from 'react';
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// functional component
const App = () => {
    const classes = useStyles();
    return (
        // wrap everything inside simple react fragment
        // This just encloses the different things that we want to put inside in there
        <>
            {/* By putting CSSBaseline here, its going to provide a lot of default styling for your material ui */}
            <CssBaseline />
            {/* AppBar is simply just our navigation bar */}
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* main part of our application */}
            {/* use semantic html tags like main */}
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm' style={{ marginTop: '100px' }}>
                        {/* gutterBottom adds some margin to bottom to yhis specific typography */}
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        {/* add explanation of what people are going to see on this page */}
                        {/* paragraph to make sure that it loops through the lines */}
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {/* loop over the images to show them over the card */}
                        {/* open a jsx lodge clock */}
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title='Image title'
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5'>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>View</Button>
                                        <Button size='small' color='primary'>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* HTML5 semantic tag footer */}
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </>
    );
}

export default App;