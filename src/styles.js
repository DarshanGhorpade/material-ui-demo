import { makeStyles } from '@material-ui/core/styles';

// create hook
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        // padding 20px top & bottom 
        // padding 0px left & right
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        // with this you are getting aspect ratio of 16/9 
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0',
    },
}));

export default useStyles;