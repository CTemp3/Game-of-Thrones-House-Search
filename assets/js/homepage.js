    const api_urlY =  "http://swapi.dev/api/people/20";
 
    async function getUser() {
     
      // Making an API call (request)
      // and getting the response back
      const response = await fetch(api_urlY);
   
      // Parsing it to JSON format
      const data = await response.json();
      console.log(data.results);
