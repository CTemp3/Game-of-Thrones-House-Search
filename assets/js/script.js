var SuperheroName= document.getElementById("hero-name");
var About= document.getElementById("description");
var Comic= document.getElementById("comics");
var Search=document.getElementsByClassName("Search");
var Luke= "https://swapi.dev/api/people/1";
var C3PO= "https://swapi.dev/api/people/2";
var R2D2= "https://swapi.dev/api/people/3";
var darthVader= "https://swapi.dev/api/people/4";
var Leia= "https://swapi.dev/api/people/5";



fetch(Luke).then(function(response){
    //request successful
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
        });
    }
    });

fetch(C3PO).then(function(response){
    //request successful
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
        });
        }
        });

fetch(R2D2).then(function(response){
    //request successful
    if (response.ok){
        response.json().then(function(data){
        console.log(data);
    });
    }
    });
    
fetch(darthVader).then(function(response){
    //request successful
    if (response.ok){
        response.json().then(function(data){
        console.log(data);
    });
    }
    }); 
    
fetch(Leia).then(function(response){
    //request successful
    if (response.ok){
        response.json().then(function(data){
        console.log(data);
    });
    }
    }); 
function pull (data){
    About.p.append(data.description);
    Comic.p.append(data.comics);
}

// document.getElementByClassName("Search").addEventListener("onClick", pull);
   

var searchHistory = {};


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
};

loadHistory();
// console.log(searchHistory);

