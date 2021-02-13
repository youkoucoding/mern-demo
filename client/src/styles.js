import { makeStyles } from '@material-ui/core/styles';

// 戻り値: A hook. This hook can be used in a function component
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: { color: 'rgba(0, 183, 255, 1)' },
  image: { marginLeft: '15px' },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    }
  },
}));
