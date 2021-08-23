import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        background: '#1F1D2B',
        color: '#fff',
    },
    media: {
        height: '100px',
        width: '200px',
        paddingTop:'56.25%', //16:9
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        left: '50px',
        margin: '10px 5px',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartButton: {
        color: 'rgba(255,255,255,0.8)',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
        }
    },
    textColor: {
        color: '#fff',
    },
    cardContentName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContentPrice: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ABBBC2',
    },
    dot: {
        position: 'relative',
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        color: 'rgba(255,255,255,0.8)',
    },
}));