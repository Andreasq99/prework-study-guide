var topics = ["HTML",'CSS','Git','JavaScript'];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];

function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

var topics=['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
    for (var i = 0; i<topics.length; i++){
        console.log(topics[i]);
    }
}

console.log("Here's what we learned in the prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();