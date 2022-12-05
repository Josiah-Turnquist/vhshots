import { borderColor } from "@mui/system";

const styles = (theme) => ({
    root: {

    },
    inputs: {
      borderRadius: '100px',
      padding: '20px',
      margin: '5px',
      width: '75vw',
      height: '50px',
      color: theme.palette.text.primary,
      background: theme.palette.input.background,
      border: `2px solid ${theme.palette.input.background}`,
      outlineColor: theme.palette.input.background,
      outline: 'none',
      "&:focus": {
        background: theme.palette.input.background,
        border: `2px solid ${theme.palette.input.background}`,
      },
      "&::placeholder": {
        color: theme.palette.input.textPlaceholder,
        opacity: 0.5
      },
      "&::selection": {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.input.textSelection,
      }
    },
    submissionButton: {
      borderRadius: '100px',
      marginTop: '20px',
      margin: '10px',
      width: '75vw',
      height: '50px',
      color: theme.palette.text.primary,
      background: theme.palette.button.background,
      border: `0px solid ${theme.palette.button.background}`,
      outlineColor: theme.palette.button.background,
      outline: 'none',
      "&:focus": {
        background: theme.palette.button.background,
        // border: `0px solid ${theme.palette.button.background}`,
      },
      "&:hover": {
        background: theme.palette.button.onHover,
        cursor: 'pointer',
      },
      "&::placeholder": {
        color: theme.palette.button.textPlaceholder,
        opacity: 0.5
      },
      "&::selection": {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.button.textSelection,
      }
    },
    navContainer: {
    },
    infoWrapper: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
    infoText: {
      textAlign: 'center',
      padding: '10px',
    },
    profileImg: {
      position: 'relative',
      borderRadius: '50%',
      width: '200px',
      height: '200px',
      objectFit: 'cover',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignSelf: 'center',
    },
    profileQuote: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '80vw',
      marginTop: '15px',
    }
  });

export default styles;
