// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

fetch("scandals/scandals.json")
  .then(
    function(response) {
      
      response.json().then(function(data) {

        let totalScandals = 0;        
        let timeLine = document.getElementById("timeline");

        for (let i = 0; i < data.length; i++) {
          let scandal = data[i];
      
          let alignment = "right";
      
          if (i % 2 == 0) {
            alignment = "left";
          }
      
          // Create new elements
          let newScandal =
            '<div class="scandal"><div class="content ' +
            alignment +
            '"><h4>(' +
            scandal.date +
            ")" + scandal.title + "</h4><p>" +
            scandal.description +
            "</p><h5>Sources</h5><ul>";
      
          // Foreach to add sources
          for (let y = 0; y < scandal.sources.length; y++) {
            let sSources = scandal.sources[y];
      
            newScandal +=
              "<li>" +
              sSources.name +
              ': <a href="' +
              sSources.url +
              '">' +
              sSources.title +
              "</a> (" + sSources.date + ")</li>";
          }
      
          newScandal += "</ul></div></div>";
      
          totalScandals++;
          document.getElementById('totalScandals').innerHTML = totalScandals;
          timeLine.innerHTML += newScandal;
        }

      });

    }
  )

  .catch(function(err){
    console.log(err);
  });

 // @license-end