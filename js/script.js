function addDoggo(){
    console.log("addDoggo function success")
    let numberOfDoggos = document.querySelector("#numberOfDogs").value;
    console.log(`${numberOfDoggos} doggos added`);
    let doggosDiv = document.querySelector(".doggosAdded");
    doggosDiv.innerHTML = "";
    let doggoCounter = numberOfDoggos;
    while(doggoCounter > 0){
        doggoCounter--;
        doggosDiv.innerHTML += 
        `<div class ="dogImageContainer">
        <img src="/resources/doggo.png" alt="Dog image" class="dogImage"/>
        </div>`;
    }
}


async function handleDogFormRequest(event){
    event.preventDefault();

    const numberOfDogs = document.querySelector("#numberOfDogs").value;

    const URL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
                //"https://dog.ceo/api/breeds/image/random" + numberOfDogs   <========Same as use of backticks in line above, both work

    const settings = {
        method : "GET"
    };

    const response = await fetch(URL, settings);
    const data = await response.json();

    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = "";

    for(const image of data.message){
        resultsDiv.innerHTML += `
            <div class ="dogImageContainer">
                <img src="${image}" alt="Dog image" class="dogImage"/>
            </div>
        `;
    }     
}