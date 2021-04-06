const rawJson = require('../../data/episodes/episodes.json');
const seasonJson = require('../../data/seasons/seasons.json');

async function onCreateNode({ node, actions }) {
    function transformObject(obj, id, type) {
        createNodeField({node, name: `testRaw`, value: addUpScores(rawJson, node.id)});
        createNodeField({node, name: `testAvg`, value: transformAverage(rawJson, addUpScores(rawJson, node.id), node.id)});
        for (let j = 0; j < seasonJson.length; j++){
            createNodeField({node, name: seasonJson[j]['name'], value: addUpSeasonScores(rawJson, node.id, seasonJson[j]['id'])});
        }
    }
    const { createNodeField } = actions;
    if (node.internal.type !== `PeopleJson`) {
        return
    }
    transformObject(
        node,
        `${node.id}1`,
        upperFirst(dotReplace(`${node.id}Score`))
    )
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
                if(isNaN(spotSearch[i]['score'])) {
                    rawScore.push(0);
                } else {
                    rawScore.push(spotSearch[i]['score']);
                }
                
            }
        }
    }
    let totalScore = rawScore.reduce((a, b) => a + b, 0);
    if (isNaN(totalScore)) { // this is causing existing players who have no score on an episode to return a total of 0; this is an issue.
        totalScore = 0;
    }
    return totalScore;
}

function addUpSeasonScores(file,player,season){
    let rawScore = [];
    for (let j=0; j < file.length; j++){
        const spotSearch = file[j]['players'];
        if (file[j]['season'] === season) {

            for (let i=0 ; i < spotSearch.length ; i++) {
                if (spotSearch[i]['id'] === player) {
                    if(isNaN(spotSearch[i]['score'])) {
                        rawScore.push(0);
                    } else {
                        rawScore.push(spotSearch[i]['score']);
                    }
                }
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

exports.onCreateNode = onCreateNode