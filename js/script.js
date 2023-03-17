// Dog image counter in Create Form
function addDoggo(){
    let num = document.querySelector("#num").value;
    let doggosDiv = document.querySelector(".doggosAdded");
    doggosDiv.innerHTML = "";
    let doggoCounter = num;
    while(doggoCounter > 0 & doggoCounter < 13){
        doggosDiv.innerHTML += 
        `<div class ="createDogImageContainer">
        <img src="resources/doggo.png" alt="cartoon dog" class="dogImage"/>
        </div>`;
        doggoCounter--;
    }
    console.log("addDoggo function success")
    console.log(`${num} doggos loaded`);
}

// Dogs API call 
async function doggoFormHandler(event){
    event.preventDefault();
    const num = document.querySelector("#num").value;
    const errorDiv = document.querySelector(".errorDiv");
    errorDiv.innerHTML = "";
    if(num == 0 || null || num > 12){
        errorDiv.innerHTML += `
        <div class ="errorDiv">
        <p>Doggoroni must be between 1 - 12</p>
        </div>`
    }
    else{
    const URL = `https://dog.ceo/api/breeds/image/random/${num}`
    const settings = {
        method : "GET"
    }
    const response = await fetch(URL, settings);
    const data = await response.json();
    const pizzaDiv = document.querySelector(".pizzaBlock");
    pizzaDiv.innerHTML = "";

    for(const image of data.message){
        pizzaDiv.innerHTML += `
        <div class ="pizzaDogImgContainer${Math.floor(Math.random() * (17-1) + 1)}">
        <img src="${image}" alt="Dog image" class="pizzaDogImage"/>
        </div>
        `;
}    
    console.log("Dogs API success");
    console.log(`${num} doggos added to pizza`);
} 
}

