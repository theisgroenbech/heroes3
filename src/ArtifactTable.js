/*
import React, {forwardRef, useEffect, useState} from 'react';
import './App.css';
import MaterialTable from "material-table";
import artifacts from './assets/artifacts.json'
import artifactsHtml from './assets/artifactsHtml.json'
import creatureImages from './assets/creatureImages.json'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


function ArtifactsTable() {

    return (
        <MaterialTable
            style={{margin: -24}}
            icons={tableIcons}
            columns={[
                {
                    field: 'url',
                    title: '',
                    render: (rowData) =>
                        <img src={getTown(rowData)} style={{width: 50, borderRadius: '50%'}}/>
                },
                {title: "Artifact", field: "Artifact"},
                {title: "Slot", field: "Slot"},
                {title: "Class", field: "Class"},
                {title: "Effect", field: "Effect"},
                {title: "Cost", field: "Cost"},
            ]}

            data={artifacts}
            title="Creatures"
            options={
                {
                    pageSize: 50,
                    grouping: true,
                    tableLayout: 'auto'
                }
            }
        />

    );
}

function getImage(data) {
    let item = artifacts.indexOf(data)
    let html = artifactsHtml[item]
    let rex = /src="(.*)" de/g;
    let m;
    console.log(html.Artifact)
    if (m = RegExp(rex).exec(html.Artifact))
        return ("https://heroes.thelazy.net/" + m[1])
}


/!*function getImage(data) {
    let item = creatures.indexOf(data)
    let image = creatureImages.filter(x => x.id === item)[0]
    return image.image
}*!/

export default ArtifactsTable;
*/
