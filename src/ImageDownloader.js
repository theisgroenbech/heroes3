const creatures = require('./assets/creatures2')
const creaturesHtml = require("./assets/creatures.html")
const fetch = require('node-fetch')

function getPath(data) {

    let rex = /src="(.*)\.gif"*/g;

    let m;


    if (m = RegExp(rex).exec(data)) return "https://heroes.thelazy.net/"+m[1]+".gif"

}


async function getImage(data, i) {
    let url = "https://heroes.thelazy.net/index.php/File:" + data.Name + "_portrait.gif";
    url = url.replace(" ", "_")
    return fetch(url).then(res => res.text())
        .then(body => {
            let imagePath = getPath(body)

            let x = {id: i, image: imagePath}
            console.log(JSON.stringify(x)+", ")
        });
}
console.log("[")
creatures.map((x,i) => getImage(x,i))
console.log("]")