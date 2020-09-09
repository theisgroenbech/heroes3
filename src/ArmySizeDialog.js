import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PeopleIcon from "@material-ui/icons/People";
import Fab from "@material-ui/core/Fab";
import ArmySizeTable from "./ArmySizeTable";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ArmySizeDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab style={{ margin: 10,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed'}}  variant="extended" size="large" color="primary" aria-label="add" onClick={handleClickOpen}>
                <PeopleIcon style={{marginRight: 10}} />
                Army sizes
            </Fab>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                {/*<DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>*/}
                {/*<DialogContent>*/}
                    <ArmySizeTable/>
                    {/*<DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>*/}
                {/*</DialogContent>*/}
                {/*<DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Agree
                    </Button>
                </DialogActions>*/}
            </Dialog>
        </div>
    );
}
