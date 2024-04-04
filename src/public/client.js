console.log("Client-side code is running.")

const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const startNumber = document.getElementById("countNumber");

async function loadNumber(){
    await fetch('/getNumber', {method: 'GET'})
    .then(async function(response){
        if(response.ok){
          await response.json()
          .then(function(data){
            console.log(data)
            startNumber.innerHTML = data;
        });
          return;
        }
        throw new Error("Request failed.");
    })
    .catch(function(error){
        console.log(error);
    })
}

increaseButton.addEventListener('click', async function(e) {
    console.log("Increase button is clicked!");
    await fetch('/increased', {method: 'PUT'})
    .then(function(response){
        if(response.ok){
          console.log("Increase recorded!");
          loadNumber();
          return;
        }
        throw new Error("Request failed.");
    })
    .catch(function(error){
        console.log(error);
    })
    // setTimeout(() => {
    //     loadNumber();
    // }, 300);
})

decreaseButton.addEventListener('click', async function(e) {
    console.log("Decrease button is clicked!");
    await fetch("/decreased", { method: "PUT" })
      .then(function (response) {
        if (response.ok) {
          console.log("Decrease recorded!");
          loadNumber();
          return;
        }
        throw new Error("Request failed.");
      })
      .catch(function (error) {
        console.log(error);
      });
    // setTimeout(() => {
    //   loadNumber();
    // }, 300);
})