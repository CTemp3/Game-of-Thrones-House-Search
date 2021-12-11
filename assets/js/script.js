var SuperheroName= document.getElementById("hero-name");
var About= document.getElementById("description");
var Comic= document.getElementById("comics");
var Search=document.getElementsByClassName("Search");
var apiUrl= "http://gateway.marvel.com/v1/public/characters?apikey=6d3560cb65781c5a6131baee6f648d19";



fetch(apiUrl).then(function(response){
    //request successful
    if (response.ok){
        response.json().then(function(data){
            console.log(data);
        });
    }
        else{
            alert("there was a problem with your data pull!")
        }
    });
function pull (data){
    About.p.append(data.description);
    Comic.p.append(data.comics);
}

document.getElementByClassName("Search").addEventListener("onClick", pull);
   

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

