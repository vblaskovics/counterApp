console.log("Client-side code is running.")

const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const startNumber = document.getElementById("countNumber");

function loadNumber(){
    fetch('/getNumber', {method: 'GET'})
    .then(function(response){
        if(response.ok){
          response.json()
          .then(function(data){
            console.log(data["rows"][0][0]);
            startNumber.innerHTML = data["rows"][0][0];
        });
          return;
        }
        throw new Error("Request failed.");
    })
    .catch(function(error){
        console.log(error);
    })
}

increaseButton.addEventListener('click', function(e) {
    console.log("Increase button is clicked!");
    fetch('/increased', {method: 'PUT'})
    .then(function(response){
        if(response.ok){
          console.log("Increase recorded!");
          return;
        }
        throw new Error("Request failed.");
    })
    .catch(function(error){
        console.log(error);
    })
    setTimeout(() => {
        loadNumber();
    }, 300);
})

decreaseButton.addEventListener('click', function(e) {
    console.log("Decrease button is clicked!");
    fetch("/decreased", { method: "PUT" })
      .then(function (response) {
        if (response.ok) {
          console.log("Decrease recorded!");
          return;
        }
        throw new Error("Request failed.");
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      loadNumber();
    }, 300);
})