import React from "react";
import {
    createStyles,
    IconButton,
    Snackbar,
    SnackbarContent,
} from "@material-ui/core";
import Close from '@material-ui/icons/Close';
import {green} from '@material-ui/core/colors';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => createStyles({
    successSnackBar: {
        backgroundColor: green[600]
    },
}));

interface CopyLinkSnackbarProps {
    isActive: boolean,
    closeCopyLinkSnackBar: () => void
}

function CopyLinkSnackbar(props: CopyLinkSnackbarProps) {
    const classes = useStyles();

    function closeHandlder() {
        props.closeCopyLinkSnackBar()
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={props.isActive}
            autoHideDuration={3000}
            onClose={closeHandlder}
        >
            <SnackbarContent
                className={classes.successSnackBar}
                message={
                    <span id="client-snackbar">
                        Link copied to clipboard
                    </span>
                }
                action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={closeHandlder}>
                    <Close/>
                    </IconButton>,
            ]}
            />
    </Snackbar>
    )
}

export default CopyLinkSnackbar;