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