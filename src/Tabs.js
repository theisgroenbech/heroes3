import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import {green} from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import App from "./App";
import CategoryTable from "./CategoryTable";
import ArtifactsTable from "./ArtifactTable";
import {artifacts, creatures, spells} from "./Tables";
import PeopleIcon from '@material-ui/icons/People';
import ArmySizeDialog from "./ArmySizeDialog";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}


const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',
        position: 'relative',
        minHeight: 200,
        // borderRadius: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexGrow: 1,
    }
}));

export default function Categories() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <AddIcon/>,
            label: 'Add',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <EditIcon/>,
            label: 'Edit',
        },
        {
            color: 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon/>,
            label: 'Expand',
        },
    ];

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                      indicatorColor={"#FFF"}

                      centered
                >
                    <Tab label="Creatures" {...a11yProps(0)} />
                    <Tab label="Artifacts" {...a11yProps(1)} />
                    {/*<Tab label="Heroes" {...a11yProps(2)} />*/}
                    <Tab label="Spells" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            {/*<AppBar position="static" style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor={"#FFF"}
                    textColor={"#FFF"}
                    variant="fullWidth"
                    aria-label="action tabs example"
                    centered
                >
                    <Tab label="Creatures" {...a11yProps(0)} />
                    <Tab label="Artifacts" {...a11yProps(1)} />
                    <Tab label="Heroes" {...a11yProps(2)} />
                    <Tab label="Spells" {...a11yProps(3)} />
                </Tabs>
            </AppBar>*/}
            {/*<SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >*/}
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {creatures}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {artifacts}
                </TabPanel>
{/*                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>*/}
            <TabPanel value={value} index={2} dir={theme.direction}>
                    {spells}
                </TabPanel>
            {/*</SwipeableViews>*/}
            {/*{fabs.map((fab, index) => (
                <Zoom
                    key={fab.color}
                    in={value === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                        {fab.icon}
                    </Fab>
                </Zoom>
            ))}*/}

            <ArmySizeDialog/>


        </div>
    );
}
