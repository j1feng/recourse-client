let ExampleButton = () => {
    
    function httpGetAsync(theUrl, callback){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              callback(xmlHttp.responseText);
      }
      xmlHttp.open("GET", theUrl, true); // true for asynchronous 
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }

    function changeTable(responseText){
      document.getElementById('button_result_table').innerHTML = responseText;
    }

    return <div>
        <button onClick={() => {
        return httpGetAsync("https://recourse-api.herokuapp.com/recourse", 
          changeTable);}}>
        Get My Recourse Action Set!
        </button>
        
        <button onClick={() => {
          document.getElementById('button_result_table').innerHTML = null;
        }}>
        Hide Action Set
        </button>

        <div id = 'button_result_table'></div>
      </div>
  }

export default ExampleButton;