import { makeStyles } from '@material-ui/core/styles';
const profileInfoStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    width: '100%',
    margin: theme.spacing(1)
  },
  large: {
    // width: '250px',
    // height: '250px',
    // margin: 'auto',
    // borderRadius:'140px'

    width: '100%',
    height: '100%',

  }
}));
export default profileInfoStyle;
