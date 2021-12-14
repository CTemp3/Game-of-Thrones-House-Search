var About= document.getElementById("description");
var Comic= document.getElementById("comics");
var Search=document.getElementById("Search");
var Luke= "https://swapi.dev/api/people/1";
var C3PO= "https://swapi.dev/api/people/2";
var R2D2= "https://swapi.dev/api/people/3";
var darthVader= "https://swapi.dev/api/people/4";
var Leia= "https://swapi.dev/api/people/5";

var skywalker= document.getElementById('Skywalker');
var friend= document.getElementById('C3P0');
var r2=document.getElementById('R2-D2');
var darth=document.getElementById('Darth');
var princess=document.getElementById('Princess Leia');

fetch(Luke).then(function(response){

    //request successful
    if (response.ok){

        response.json().then(function(data){

            console.log(data);

        });
    };
    createHistory
});

function pushSkywalker(){

    About.append (Luke.name);

};

skywalker.addEventListener("onClick", pushSkywalker);

fetch(C3PO).then(function(response){

    //request successful
    if (response.ok){

        response.json().then(function(data){

            console.log(data);

        });
    };
});

function pushC3PO(){

    About.append (C3PO.name);      
};
      
friend.addEventListener("onClick", pushC3PO);

fetch(R2D2).then(function(response){

    //request successful
    if (response.ok){

        response.json().then(function(data){

            console.log(data);
        });
    };
});
 
function pushR2D2(){

    About.append (R2D2.name);
};
      
r2.addEventListener("onClick", pushR2D2);

fetch(darthVader).then(function(response){

    //request successful
    if (response.ok){

        response.json().then(function(data){

            console.log(data);
        });
    };
}); 

function pushDarth(){

    About.append (darthVader.name);

    createHistory(darthVader.name);

};

darth.addEventListener("onClick", pushDarth);

fetch(Leia).then(function(response){

    //request successful
    if (response.ok){

        response.json().then(function(data){

            console.log(data);
        });
    };
});

function pushLeia(){
    About.append (Leia.name);
};
      
princess.addEventListener("onClick", pushLeia);

// create history function
var createHistory = function(historyItem) {
    var historyLi = $("<li>")
        .addClass("list-group-item");
    var historyP = $("<p>")
        .addClass("m-6")
        .text(historyItem);

    historyLi.append(historyP);

    $("#list-" + historyList).append(historyLi);

};

// save history function
var saveHistory = function() {
    localStorage.setItem("history", JSON.stringify(searchHistory));
};

// search history call function
var loadHistory = function() {
    // calling history items
    searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

    if (!searchHistory) {
        searchHistory = {}
    };
    $.each(searchHistory, function(list, arr) {
        console.log(list);
        arr.forEach(function(searchHist) {
            createHistory(searchHist.text);
        });
    });
};

loadHistory();
// console.log(searchHistory);