import { makeStyles, Snackbar } from '@material-ui/core'
import React from 'react'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root: {
        top:theme.spacing(9)
    }
}))

function Notification({ notify, setNotify }) {
    
    const classes = useStyles()
    const handleClose = (event, reason) => {
        setNotify({
            ...notify,
        isOpen:false
    })
}

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
        >
            <Alert
                severity={notify.type}
                onClose={handleClose}
                >
                {notify.message}
            </Alert>
    </Snackbar>
    )
}

export default Notification
