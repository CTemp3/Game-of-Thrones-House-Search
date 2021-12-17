// curl "https://www.anapioficeandfire.com/api/houses/7" arryn
 //curl "https://www.anapioficeandfire.com/api/houses/15" baratheon
 //curl "https://www.anapioficeandfire.com/api/houses/169" greyjoy
 //curl "https://www.anapioficeandfire.com/api/houses/229" lannister

 //curl "https://www.anapioficeandfire.com/api/houses/362" stark
 //curl "https://www.anapioficeandfire.com/api/houses/378" targaryen
 //curl "https://www.anapioficeandfire.com/api/houses/395" tully

 const card = document.getElementById("thecard")
 card.addEventListener("click", flipCard);
 function flipCard () {
     card.classList.toggle(flipCard);
 }
 //if stark is pushed
 myFunction_s();
 
 function myFunction_s () {
     let st = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/character/jon");
     document.getElementById("thefront").innerHTML = typeof st;
     console.log(st);
 }   
 
 myFunction_t();
 
 function myFunction_t () {
     let ta = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/character/daenerys");
     document.getElementById("thefront").innerHTML = typeof ta;
     console.log(ta);
 
 }   
 
 myFunction_l();
 
 function myFunction_l () {
     let la = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/character/tyrion");
     document.getElementById("lannister").innerHTML = typeof la;
     console.log(la);
 
 }
 
 myFunction_g();
 
 function myFunction_g () {
     let gr = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/character/theon");
     document.getElementById("greyjoy").innerHTML = typeof gr;
     console.log(gr);
 
 }
 
 myFunction_b();
 
 function myFunction_b () {
     let ba = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/character/robert");
     document.getElementById("baratheon").innerHTML = typeof ba;
     console.log(ba);
 
 }
 
 
 
 
 
 //
 //function myFunction () {
 //    let fl = fetch("https://anapioficeandfire.com/api/houses/362")
 //    document.getElementById("flipB").innerHTML= typeof fl + "  " +fl;
 //    console.log(fl);
 //}
 //then a quote shoud display in the card
 
 // const address = fetch("https://anapioficeandfire.com/api/houses/362")
 //  .then((response) => response.json())
 //  .then((user) => {
 //    return user.address;
 //  });
 
 //const printAddress = () => {
 //  address.then((a) => {
 //    console.log(a);
 //  });
 //};
 
 //printAddress();
 
 
 
 
 
 
 //myFunction_s();
 
 //function myFunction_s () {
 //    let st = fetch("https://anapioficeandfire.com/api/houses/362");
 //    document.getElementById("stark").innerHTML = typeof st + "   " + st;
 //    console.log(st);
 
 //}   
 
 //myFunction_t();
 
 //function myFunction_t () {
 //    let ta = fetch("https://anapioficeandfire.com/api/houses/378");
 //    document.getElementById("targaryen").innerHTML = typeof ta + "   " + ta;
 //    console.log(ta);
 
 //}   
 
 //myFunction_l();
 
 //function myFunction_l () {
 //    let la = fetch("https://anapioficeandfire.com/api/houses/229");
 //    document.getElementById("lannister").innerHTML = typeof la + "   " + la;
 //    console.log(la);
 
 //}
 
 //myFunction_g();
 
 //function myFunction_g () {
 //    let gr = fetch("https://anapioficeandfire.com/api/houses/169");
 //    document.getElementById("greyjoy").innerHTML = typeof gr + "   " + gr;
 //    console.log(gr);
 
 //}
 
 //myFunction_b();
 
 //function myFunction_b () {
 //    let ba = fetch("https://anapioficeandfire.com/api/houses/15");
 //    document.getElementById("baratheon").innerHTML = typeof ba + "   " + ba;
 //    console.log(ba);
 
 //}
 
 //myFunction_m();
 
 //function myFunction_m () {
 //   let ma = fetch("https://anapioficeandfire.com/api/houses");
 //   document.getElementById("martell").innerHTML = typeof ma + "   " + ma;
 //   console.log(ma);
 
 //}
 
 //myFunction_a();
 
 //function myFunction_a () {
 //    let ar = fetch("https://anapioficeandfire.com/api/houses/7");
 //    document.getElementById("arryn").innerHTML = typeof ar + "   " + ar;
 //    console.log(ar);
 
 //}
 
 //myFunction_tu();
 
 //function myFunction_tu () {
 //    let tu = fetch("https://anapioficeandfire.com/api/houses/395");
 //    document.getElementById("tully").innerHTML = typeof tu + "   " + tu;
 //    console.log(tu);
 
 //}