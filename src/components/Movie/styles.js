import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    movie: {
        padding: '10px',
        overflowX: 'hidden',
        backgroundColor: 'red'
    },
    links:{
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        }
    },
    image:{
        borderRadius: '20px',
        height: '300px',
        marginBotton: '10px',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.5s ease-in-out',
        }
    },
    title : {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: '0px',
        textAlign: 'center',
    }
}))