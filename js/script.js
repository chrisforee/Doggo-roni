// Dog image counter in Create Form
function addDoggo(){
    let numberOfDoggos = document.querySelector("#numberOfDogs").value;
    let doggosDiv = document.querySelector(".doggosAdded");
    doggosDiv.innerHTML = "";
    let doggoCounter = numberOfDoggos;
    while(doggoCounter > 0){
        doggosDiv.innerHTML += 
        `<div class ="createDogImageContainer">
        <img src="/resources/doggo.png" alt="cartoon dog" class="dogImage"/>
        </div>`;
        doggoCounter--;
    }
    console.log("addDoggo function success")
    console.log(`${numberOfDoggos} doggos added`);
}

// Dogs API call 
async function doggoFormHandler(event){
    event.preventDefault();
    const numberOfDogs = document.querySelector("#numberOfDogs").value;
    const errorDiv = document.querySelector(".errorDiv");
    errorDiv.innerHTML = "";
    if(numberOfDogs == 0 || null){
        errorDiv.innerHTML += `
        <div class ="errorDiv">
        <p>Must select at least 1 Doggo-roni</p>
        </div>`
    }
    else{
    const URL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
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
    console.log(`${numberOfDogs} doggos added to pizza`);
} 
}

