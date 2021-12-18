//const url = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
 // .then(response => response.json())
 // .then(data => console.log(data));

 // window.localStorage.setItem("url", JSON.stringify(url))

 // let newobject = window.localStorage.getItem(url);
 // console.log(url)

 // const quotes = [
 //     "If I fall, don't bring me back. --John Snow ",
 //     "There is only one war that matters. The Great War. And it is here. --John Snow",
 //     "Love is the death of duty. --John Snow",
 //     "Everything before the word \"but\" is horseshit.--John Snow",
 //     "The war is not over. And I promise you, friend, the true enemy won't wait out the storm. He brings the storm. --John Snow",
 //     "I hate the king more than any of them. --Sansa Stark",
 //     "No need to seize the last word, Lord Baelish. I'll assume it was something clever. --Sansa Stark",
 //     "The man who passes the sentence should swing the sword.--Ned Stark",
 //     "Winter is coming! --Ned Stark",
 //     "I, Eddard of the house Stark, lord of Winterfell and warden of the North, sentence you to die. --Ned Stark",
//      "A madman sees what he sees.--Ned stark",
 //     "I grew up with soldiers. I learned how to die a long time ago .--Ned Stark"
 //   ]
 // function getQuote() {
 //     for(let i=0; i <quotes.length ; i++) {
         

 //     }
 // }
 // let quote= getQuote ();
 // let result;

 // const interval = setInterval(() => {
 //     result = quote.next();
 //       result.done === false ? console.log(result.value) : clearInterval(interval);
 // }, 15000);
 // document.getElementById("aa").innerHTML.quotes
 import { useState , useEffect } from 'react' ;

 function App () {
     const [quotes, setQuotes] = useState(null);

     useEffect(() => {
         getData();
     //"sentence"

     async function getData() {
         const response = await fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random");
        const data = await response.json();
        
        setQuotes(data);

     }
    }, []);
    
    return  (
        <div>
            <h1></h1>
       
            {quotes && (
                <div className="quotes">

                    {quotes.map((quote, index) => (
                        <div key={index}>
                            <h2>{quotes.sentence}</h2>
                </div>
                    ))}

        </div>
            )}

    </div>
    
    )
