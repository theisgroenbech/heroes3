import React from "react";
import creatureImages from "./assets/creatureImagesBase64";
import artifactImages from "./assets/artifactImagesBase64";
import creatureList from "./assets/creatures2";
import artifactList from "./assets/artifacts";
import spellsList from "./assets/spells";
import spellsHtml from "./assets/spellsHtml";
import MaterialTable from "material-table";
import CategoryTable from "./CategoryTable";
import artifactsHtml from "./assets/artifactsHtml";

export const creatures = () => {
    function getImage(data) {
        let item = creatureList.indexOf(data)
        let image = creatureImages.filter(x => x.id === item)[0]
        return image.image
    }

    let columns = [
        {
            field: 'url',
            title: '',
            render: (rowData) =>
                <img src={getImage(rowData)} style={{width: 50, borderRadius: '50%'}}/>,
            width: 70,
        },
        {title: "Name", field: "Name",},
        {title: "Town", field: "Town"},
        {title: "Level", field: "Lvl"},
        {title: "Attack", field: "Att"},
        {title: "Defence", field: "Def"},
        {title: "HP", field: "HP"},
        {title: "Special", field: "Special"},
        {title: "Cost", field: "Cost", width: 100},
    ];


    return <CategoryTable columns={columns} data={creatureList}/>
}
export const artifacts = () => {
    function getImage(data) {
        let item = artifactList.indexOf(data)
        let image = artifactImages.filter(x => x.id === item)[0]
        return image.image
    }

    let columns = [
        {
            field: 'url',
            title: '',
            render: (rowData) =>
                <img src={getImage(rowData)} style={{width: 50, borderRadius: '50%'}}/>,
            width: 70,
        },
        {title: "Artifact", field: "Artifact"},
        {title: "Slot", field: "Slot"},
        {title: "Class", field: "Class"},
        {title: "Effect", field: "Effect"},
        {title: "Cost", field: "Cost", maxWidth: 100,},
    ];


    return <CategoryTable columns={columns} data={artifactList}/>
}

export const spells = () => {
    function getImage(data) {
        let item = spellsList.indexOf(data)
        let html = spellsHtml[item]
        let rex = /src="(.*)" de/g;
        let m;
        console.log(html.Name)
        if (m = RegExp(rex).exec(html.Name))
            return ("https://heroes.thelazy.net/" + m[1])
    }

    let columns = [
        {
            field: 'url',
            title: '',
            render: (rowData) =>
                <img src={getImage(rowData)} style={{width: 50}}/>,
            width: 70,

        },
        {title: "Name", field: "Name", maxWidth: 200,},
        {title: "Level", field: "Level", maxWidth: 200,},
        {title: "Class", field: "Class", maxWidth: 200,},
        {title: "Effect", field: "Effect"},
    ];

    return <CategoryTable columns={columns} data={spellsList}/>
}
