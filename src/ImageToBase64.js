const artifactList = require('./assets/artifacts')
const artifactsHtml = require('./assets/artifactsHtml')
const creatureImages = require('./assets/creatureImages')

var fetchBase64 = require("fetch-base64")

/*
creatureImages.map(c => {
    fetchBase64.remote(c.image).then(data => {
            //console.log(data[1])
            let x = {id: c.id, image: data[1]}
            console.log(JSON.stringify(x) + ", ")
        }
    );
})
*/

function getImage(data) {
    let item = artifactList.indexOf(data)
    let html = artifactsHtml[item]
    let rex = /src="(.*)" de/g;
    let m;
    // console.log(html.Artifact)
    if (m = RegExp(rex).exec(html.Artifact))
        return ("https://heroes.thelazy.net/" + m[1])
}

artifactList.map((c, id) => {

    let path;
    if (c.Artifact === 'Vial of Dragon Blood')
        path = 'https://heroes.thelazy.net/images/5/5e/Artifact_Vial_of_Dragon_Blood.gif'
     else if (c.Artifact === 'Armageddon\'s Blade')
         path = 'https://heroes.thelazy.net/images/d/db/Artifact_Armageddon%27s_Blade_%28artifact%29.gif'
     else path = getImage(c)
    fetchBase64.remote(path).then(data => {
            //console.log(data[1])
            let x = {id: id, image: data[1]}
            console.log(JSON.stringify(x) + ", ")
        }
    ).catch(err => console.log("Failed with", c))
})


/*
const fetch = require('node-fetch')

function getPath(data) {

    let rex = /src="(.*)\.gif"*!/g;

    let m;


    if (m = RegExp(rex).exec(data)) return "https://heroes.thelazy.net/" + m[1] + ".gif"
}


async function getImage(data, i) {
    let url = "https://heroes.thelazy.net/index.php/File:" + data.Name + "_portrait.gif";
    url = url.replace(" ", "_")
    return fetch(url).then(res => res.text())
        .then(body => {
            let imagePath = getPath(body)

            let x = {id: i, image: imagePath}
            console.log(JSON.stringify(x) + ", ")
        });
}

console.log("[")
creatures.map((x, i) => getImage(x, i))
console.log("]")
*/
