import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        width: 500,
        maxWidth: '100%'
    },
});

function createData(name, size) {
    return { name, size };
}

const rows = [
    createData('Few', "1-4"),
    createData('Several', "5-9"),
    createData('Pack', "10-19"),
    createData('Lots', "20-49"),
    createData('Horde', "50-99"),
    createData('Throng', "100-249"),
    createData('Swarm', "250-499"),
    createData('Zounds', "500-999"),
    createData('Legion', "1000+"),
];

export default function ArmySizeTable() {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
