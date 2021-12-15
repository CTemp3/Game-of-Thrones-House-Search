
//var Luke= "https://swapi.dev/api/people/1/";
//var C3PO= "https://swapi.dev/api/people/2/";
//var R2D2= "https://swapi.dev/api/people/3/";
//var darthVader= "https://swapi.dev/api/people/4/";
//var Leia= "https://swapi.dev/api/people/5/";

var skywalker= document.getElementById('Skywalker');
var friend= document.getElementById('C3P0');
var r2=document.getElementById('R2-D2');
var darth=document.getElementById('Darth');
var princess=document.getElementById('Princess_Leia');

//if Luke is selected from drop down box


//if skywalker is selected  then Function()
//Function = on click fetch data and save it to local storage
//after saving then condense info needed
//display data in html card

var characters = [
  {
    charName: "Luke Skywalker",
    charImage1: "",
    birthDate:"Born: 19BBY",
    hairColor:"Hair Color: brown",
    eyeColor:"Eye Color: blue",
    charHeight:"Height: 172cm",
    charWeight:"Weight:72kg",
    charMovies:"Movies Associated: Star Wars Episode 3: Revenge of the Sith, Star Wars Episode 4: A New Hope., Star Wars Episode 5: The Empire Strikes Back, Star Wars Episode 6: Return of the Jedi, Star Wars Episode 7: The Force Awakens, Star Wars Episode 8: The Last Jedi"
  },
  {
   charName: "C3PO",
   charImage2:"",
    birthDate:"Born: 49BBY",
    hairColor:"Hair Color: none",
    eyeColor:"Eye Color: yellow",
    charHeight:"Height: 182cm",
    charWeight:"Weight: 54kg",
    charMovies:"Movies Associated: Star Wars Episode 1: The Phantom Menace, Star Wars Episode 2: Attack of the Clones, Star Wars Episode 3: Revenge of the Sith, Star Wars Episode 4: A New Hope., Star Wars Episode 5: The Empire Strikes Back, Star Wars Episode 6: Return of the Jedi, Star Wars Episode 7: The Force Awakens, Star Wars Episode 8: The Last Jedi, Star Wars Episode 9: Rise of Skywalker"
  },
  {
    charName: "R2-D2",
    charImage3:"",
    birthDate:"Born: unknown",
    hairColor:"Hair Color: none",
    eyeColor:"Eye Color: none",
    charHeight:"Height: 91cm",
    charWeight:"Weight: 45kg",
    charMovies:"Movies Associated: Star Wars Episode 1: The Phantom Menace, Star Wars Episode 2: Attack of the Clones, Star Wars Episode 3: Revenge of the Sith, Star Wars Episode 4: A New Hope., Star Wars Episode 5: The Empire Strikes Back, Star Wars Episode 6: Return of the Jedi, Star Wars Episode 7: The Force Awakens, Star Wars Episode 8: The Last Jedi, Star Wars Episode 9: Rise of Skywalker"
  },
  {
    charName: "Darth Vader",
    charImage4:"",
    birthDate:"Born: 19BBY",
    hairColor:"Hair Color: unknown",
    eyeColor:"Eye Color: unknown",
    charHeight:"Height: 248cm",
    charWeight:"Weight: 181kg",
    charMovies:"Movies Associated: Star Wars Episode 3: Revenge of the Sith, Star Wars Episode 4: A New Hope., Star Wars Episode 5: The Empire Strikes Back, Star Wars Episode 6: Return of the Jedi"
  },
  {
    charName: "Leia Organa Solo",
    charImage5:"",
    birthDate:"Born: 19BBY",
    hairColor:"Hair Color: brown",
    eyeColor:"Eye Color: brown",
    charHeight:"Height: 144cm",
    charWeight:"Weight: 45kg",
    charMovies:"Movies Associated: Star Wars Episode 3: Revenge of the Sith, Star Wars Episode 4: A New Hope., Star Wars Episode 5: The Empire Strikes Back, Star Wars Episode 6: Return of the Jedi, Star Wars Episode 7: The Force Awakens, Star Wars Episode 8: The Last Jedi, Star Wars Episode 9: Rise of Skywalker"
  },
  ]




//var charImage1=document.getElementById("x").src = ".//assets/Images/luke.jpg";
//var charImage2=document.getElementById("x").src =".//assets/Images/C-3PO_EP3.png"
//var charImage3=document.getElementById("x").src=".//assets/Images/220px-R2-D2_Droid.png"
//var charImage4=document.getElementById("x").src=".//assets/Images/Darth_Vader_in_The_Empire_Strikes_Back.jpg"
//var charImage5=document.getElementById("x").src=".//assets/Images/Princess_Leia's_characteristic_hairstyle.jpg/"
   

var character = document.getElementById('featured-character')

var charImage=document.getElementById("charImage")
var heroName = document.getElementById('hero-name')
var heroAge=document.getElementById("hero-age")
var heroHair=document.getElementById("hero-hair")
var heroEye=document.getElementById("hero-eye")
var heroHeight=document.getElementById("hero-height")
var heroWeight=document.getElementById("hero-weight")
var heroMovies=document.getElementById("hero-movies")

var select = document.getElementById('nav-item').addEventListener('change', function() {
  console.log('You selected: ', this.value.charAt(0));
  character.textContent=characters[this.value.charAt(0)-1].charName
  // add code for character imagvar img = document.createElement("img");
  var img1 = document.createElement("img");
  img1.src =".//assets/Images/luke.jpg";
  var src = document.getElementById("x");
  
  src.appendChild(img1);

  heroAge.textContent=characters[this.value.charAt(0)-1].birthDate
  heroHair.textContent=characters[this.value.charAt(0)-1].hairColor
  heroEye.textContent=characters[this.value.charAt(0)-1].eyeColor
  heroHeight.textContent=characters[this.value.charAt(0)-1].charHeight
  heroWeight.textContent=characters[this.value.charAt(0)-1].charWeight
  heroMovies.textContent=characters[this.value.charAt(0)-1].charMovies
  // add code for additional character details
});


 // fetch(Luke).then(function(response){
    //request successful
   // if (response.ok){
     //   response.json().then(function(data){
       //     console.log(data);
       // });
   // }
   // });

//then fetch data
//fetch(Luke).then(function(response){
    //request successful
  //  if (response.ok){
    //    response.json().then(function(data){
      //      console.log(data);
        //});
  //  }
    //});
//save api date to local storage

//function pushSkywalker(){
  //    About.append (Luke.name);
//}

//skywalker.addEventListener("onClick", pushSkywalker);

//fetch(C3PO).then(function(response){
    //request successful
  //  if (response.ok){
    //    response.json().then(function(data){
      //      console.log(data);
      //  });
      //  }
      //  });
  //  function pushC3PO(){
    //    About.append (C3PO.name);
     // }
      
     // friend.addEventListener("onClick", pushC3PO);

//fetch(R2D2).then(function(response){
    //request successful
  //  if (response.ok){
    //    response.json().then(function(data){
      //  console.log(data);
   // });
   // }
   // });
 
//    function pushR2D2(){
  //      About.append (R2D2.name);
    //  }
      
    //  r2.addEventListener("onClick", pushR2D2);

  //fetch(darthVader).then(function(response){
    //request successful
    //if (response.ok){
      //  response.json().then(function(data){
        //console.log(data);
    //});
   // }
   // }); 
  
//    function pushDarth(){
  //      About.append (darthVader.name);
    //  }
      
   //   darth.addEventListener("onClick", pushDarth);

//fetch(Leia).then(function(response){
    //request successful
  //  if (response.ok){
    //    response.json().then(function(data){
      //  console.log(data);
   // });
   // }
   // }); 

    //function pushLeia(){
      //  About.append (Leia.name);
     // }
      
      //princess.addEventListener("onClick", pushLeia);
   

//var searchHistory = {};


// create history function
//var createHistory = function(historyItem) {
 //   var historyLi = $("<li>")
   //     .addClass("list-group-item");
   // var historyP = $("<p>")
    //    .addClass("m-6")
    //    .text(historyItem);

    //historyLi.append(historyP);

    //$("#list-" + historyList).append(historyLi);

//};

// save history function
//var saveHistory = function() {
  //  localStorage.setItem("history", JSON.stringify(searchHistory));
//};

// search history call function
//var loadHistory = function() {
    // calling history items
  //  searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

    //if (!searchHistory) {
     //   searchHistory = {}
  //  };
//};

//oadHistory();
// console.log(searchHistory);
