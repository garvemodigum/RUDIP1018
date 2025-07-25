fetch("https://garvemodigum.github.io/garvmodigum/data.json") 
  .then(response => response.json()) 
  .then(data => { 
    document.getElementById("output").textContent = JSON.stringify(data, null, 2); 
  }) 
  .catch(error => { 
    document.getElementById("output").textContent = "Error loading data: " + error; 
  });