const dress1 = {name: "Georgia Dress", Description: "Elegant green maxi-dress with uniquely designed tree print by Heather McGee", image: "../images/rsz_52.png"};

const dress2 = {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png"};


function defineModal(){
    if(id == "dresses1btn"){
    document.getElementById("exampleModalLabel").innerHTML = dress1.name;
    document.getElementById("modalDesc").innerHTML = dress1.Description;
    document.getElementById("modalImage").innerHTML = dress1.image;
        
    }
    
}

$(document).ready(() => {
  $('#dresses1btn').on('click',() => {
    $('#dress1Modal').hide()
  })
  
});