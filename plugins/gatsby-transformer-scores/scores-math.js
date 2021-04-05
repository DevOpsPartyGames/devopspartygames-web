// const rawJson = require('../../data/episodes/episodes.json');
//
// function addUpScores(file,player){
//     let rawScore = [];
//     for (let j=0; j < file.length; j++){
//         const spotSearch = file[j]['players'];
//         for (let i=0 ; i < spotSearch.length ; i++) {
//             if (spotSearch[i]['id'] === player) {
//                 rawScore.push(spotSearch[i]['score']);
//             }
//         }
//     }
//     return rawScore.reduce((a, b) => a + b, 0);
// }
//
// function transformAverage(file,scoreNum,player){
//     let count = 0
//     for (let j=0; j < file.length; j++) {
//         const spotSearch = file[j]['players'];
//         for (let i = 0; i < spotSearch.length; i++) {
//             if (spotSearch[i]['id'] === player) {
//                 count++
//             }
//         }
//     }
//     return Math.round(scoreNum/count);
// }
//
// function transformMean(){
//     return;
// }
//
// function transformMode(){
//     return
// }
//
// console.log(addUpScores(rawJson, "laura.santamaria"))
// console.log(transformAverage(rawJson,35,'laura.santamaria'))