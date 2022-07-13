let coUnt=document.getElementById('count')
// here the id name of the number h2 tag count being extracted. whatever that will be inside of that h2 tag will be extracted 

console.log(coUnt)

let co=0


// here the inc funtion of the onlick value of button tag is called.




//whenever the button is pressed it will call this function to update the value

//inside the value inside the count.innertext function
function inc(){
    co=co+1
    coUnt.innerText=co
}

function dec(){
    co=co-1
    coUnt.innerText=co
}

let saveEl= document.getElementById('save-el')

//function to save the count for any function you wish to perform

function save(){
    countUpdate=co+" * "
    coUnt.innerText=0
    co=0
    saveEl.textContent+=countUpdate
}
