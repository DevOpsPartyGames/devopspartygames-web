const rawJson = require('../../data/episodes/episodes.json');

let i = 1

async function onCreateNode({ node, actions, createNodeId, loadNodeContent, createContentDigest }) {
    function transformObject(obj, id, type) {
        const tlbscoresNode = {
            ...obj,
            id,
            children: [],
            parent: node.id,
            internal: {
                contentDigest: createContentDigest(obj),
                type,
            },
            testRaw: addUpScores(rawJson, node.id),
            testAvg: transformAverage(rawJson, addUpScores(rawJson, node.id), node.id),
        }
        createNode(tlbscoresNode);
        // createParentChildLink({ parent: node, child: tlbscoresNode });
    }
    const { createNode, createParentChildLink } = actions;

    if (node.internal.type !== `PeopleJson`) {
        return
    }

    transformObject(
        node,
        `${node.id}1`,
        upperFirst(dotReplace(`${node.id}Score`))
    )

    i++

    // const content = await node;
    // Object.keys(content).forEach((obj, i) => {
    //     console.log(obj)
    //     const nameStr = Buffer.from(node.name, 'utf-8')
        // if (obj === 'id') {
        //     transformObject(
        //         obj,
        //         obj.id ? obj.id : createNodeId(`${node.id} [${i}] >>> SCORES`),
        //         upperFirst(dotReplace(`${node.id}Score`))
        //     );
        // }
    // })
}

function upperFirst(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
}

function dotReplace(string) {
    const regex = /\./g;
    return string.replace(regex,'');
}

function addUpScores(file,player){
    let rawScore = [];
    for (let j=0; j < file.length; j++){
        const spotSearch = file[j]['players'];
        for (let i=0 ; i < spotSearch.length ; i++) {
            if (spotSearch[i]['id'] === player) {
                rawScore.push(spotSearch[i]['score']);
            }
        }
    }
    let totalScore = rawScore.reduce((a, b) => a + b, 0);
    if (isNaN(totalScore)) {
        totalScore = 0;
    }
    return totalScore;
}

function transformAverage(file,scoreNum,player){
    let count = 0;
    for (let j=0; j < file.length; j++) {
        const spotSearch = file[j]['players'];
        for (let i = 0; i < spotSearch.length; i++) {
            if (spotSearch[i]['id'] === player) {
                count++;
            }
        }
    }
    let avgScore = Math.round(scoreNum/count);
    if (isNaN(avgScore)){
        avgScore = 0;
    }
    return avgScore;
}

// function transformMean(){
//     return;
// }
//
// function transformMode(){
//     return
// }

exports.onCreateNode = onCreateNode