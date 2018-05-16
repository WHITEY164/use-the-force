
    
var oReq = new XMLHttpRequest();

function reqListener () {
  
     var data = JSON.parse(this.responseText);

     var people1 = document.getElementById("peopleResult1");

     var people2 = document.getElementById("peopleResult2");

     var people3 = document.getElementById("peopleResult3");

     people1.innerHTML = "Person: " + data.name + " Height: " + data.height + " Mass: " + data.mass + " Birth Year: " + data.birth_year + " Gender: " + data.gender;
  }

  oReq.addEventListener("load", reqListener);

    oReq.open("GET", "https://swapi.co/api/people/1/?response=height");   

    oReq.send();

    var oReq2 = new XMLHttpRequest();

function reqListener2 () {

     var data = JSON.parse(this.responseText);

     var people2 = document.getElementById("peopleResult2");

     people2.innerHTML = "Person: " + data.name + " Height: " + data.height + " Mass: " + data.mass + " Birth Year: " + data.birth_year + " Gender: " + data.gender;
  }

  oReq2.addEventListener("load", reqListener2);

    oReq2.open("GET", "https://swapi.co/api/people/5/?response=height");       

    oReq2.send();


    var oReq3 = new XMLHttpRequest();

function reqListener3 () {
     var data = JSON.parse(this.responseText);

     var people3 = document.getElementById("peopleResult3");

     people3.innerHTML = "Person: " + data.name + " Height: " + data.height + " Mass: " + data.mass + " Birth Year: " + data.birth_year + " Gender: " + data.gender;
  }

  oReq3.addEventListener("load", reqListener3);
    oReq3.open("GET", "https://swapi.co/api/people/4/?response=height");       
    oReq3.send();

    var oReq4 = new XMLHttpRequest();
    
    function reqListener4(){
      var data = JSON.parse(this.responseText);

      var result = document.getElementById("planets");

      for(i=0;i<10;i++){
        
        console.log();

        var planet = document.createElement('div');

        planet.innerHTML = data.results[i].name;

        result.appendChild(planet);
      }
      

    }

    oReq4.addEventListener("load", reqListener4);

    oReq4.open("GET", "https://swapi.co/api/planets/");   

    oReq4.send();
   

    var oReq5 = new XMLHttpRequest();

    function reqListener5 () {

         var data = JSON.parse(this.responseText);

         var results = document.getElementById("films");

         for(var i=0;i <7;i++){
          var text = document.createElement('div');

          text.innerHTML = "Movie: " + data.results[i].title + " Episode: " + data.results[i].episode_id + " Director: " + data.results[i].director;

          results.appendChild(text);
         }
         
      }
    
      oReq5.addEventListener("load", reqListener5);

        oReq5.open("GET", "https://swapi.co/api/films/");  

        oReq5.send();


        var oReq6 = new XMLHttpRequest();
