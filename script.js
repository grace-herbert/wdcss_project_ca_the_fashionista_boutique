//******************************************
//clothing objects with properties to input into modal onclick
//*******************************************



const dress1 = {name: "Georgia Dress", Description: "Elegant green maxi-dress with uniquely designed tree print by Heather McGee", image: "../images/rsz_52.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0};

const dress2 = {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0}; 

const dress3 = {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}; 

const pop1 = {name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0};

const pop2 = {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0};

const pop3 = {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}; 

const top1 = {name: "The Artemis", Description: "White crop-top with a high neckline by Jessie McArthur", image: "../images/whitetop1.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0}; 

const top2 = {name: "The Athena", Description: "Creamy beige wrap top handsewn with 100% organic cotton by Jessie McArthur", image: "../images/whitetrousersbeigetop1.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0};

const top3 = {name: "The Hera", Description: "Black boob-tube with 100% organic cotton by Jessie McArthur", image: "../images/yellowskirtblacktop1.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0};

const skirt1 = {name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0};

const skirt2 = {name: "The Marseillais", Description: "Boho skirt. Red and green handdrawn print skirt  by Heather McGee", image: "../images/rz53.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0}; 

const skirt3 = {name: "The Lyonnais", Description: "A-line blue prairie skirt handmade with 100% organic cotton by Jessie McArthur", image: "../images/rzblueskirtwhitetop.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}; 

const trouser1 = {name: "London Mod", Description: "Handstitched sequin flares by Kylie West", image: "../images/rsz_sequinflares.png", price: 110, clicked: false, selectedQuantity: 0, Total: 0};

const trouser2 = {name: "Tokyo Chic", Description: "Flared black trousers by Heather McGee", image: "../images/rzflaredtrousersblackblazer.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0};

const trouser3 = {name: "New York Vogue", Description: "Funky blue flared trousers with handwoven lace at the ends by Jessie McArthur", image: "../images/rzfunkyjeans.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}; 

const coat1 = {name: "Takeko Jacket", Description: "Leather jacket by Jessie McArthur", image: "../images/rsz_127.png", price: 200, clicked: false, selectedQuantity: 0, Total: 0}; 

const coat2 = {name: "Zenobia Coat", Description: "Woolan orange coatsheered from sheep of Benbulbin by Jessie McArthur", image: "../images/rz4.png", price: 180, clicked: false, selectedQuantity: 0, Total: 0};

const coat3 = {name: "Tomoe Jacket", Description: "Vegan leather jacket by Jessie McArthur", image: "../images/rzleatherjacket.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0};

const acc1 = {name: "The Syria Bag", Description: "Handwoven circular straw bag by Jessie McArthur", image: "../images/rz5.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}; 

const acc2 = {name: "The Mediteranean Bag", Description: "Handwoven yellow circular straw bag by Jessie McArthur", image: "../images/rsz_2cropped48.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0};

const acc3 = {name: "The Sicilian Scarf", Description: "Purple silk print scarf by Jessie McArthur", image: "../images/rsz_1scarf.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0};



//**** jQuery function to change modal on click helped through code recieved from Tutorial Republic- https://www.tutorialrepublic.com/faq/how-to-change-the-image-source-using-jquery.php and https://www.youtube.com/watch?v=JxDjOb0UjAw 

$(document).ready(function(){
    $("#pop1btn").on('click', {
        name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#pop2btn").on('click', {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#pop3btn").on('click', {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#dresses1btn").on('click', {name: "Georgia Dress", Description: "Elegant green maxi-dress with uniquely designed tree print by Heather McGee", image: "../images/rsz_52.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#dresses2btn").on('click', {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);   
    $("#dresses3btn").on('click', {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#top1btn").on('click', {name: "The Artemis", Description: "White crop-top with a high neckline by Jessie McArthur", image: "../images/whitetop1.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#top2btn").on('click', {name: "The Athena", Description: "Creamy beige wrap top handsewn with 100% organic cotton by Jessie McArthur", image: "../images/whitetrousersbeigetop1.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#top3btn").on('click', {name: "The Hera", Description: "Black boob-tube with 100% organic cotton by Jessie McArthur", image: "../images/yellowskirtblacktop1.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#skirt1btn").on('click', {name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#skirt2btn").on('click', {name: "The Marseillais", Description: "Boho skirt. Red and green handdrawn print skirt  by Heather McGee", image: "../images/rz53.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#skirt3btn").on('click', {name: "The Lyonnais", Description: "A-line blue prairie skirt handmade with 100% organic cotton by Jessie McArthur", image: "../images/rzblueskirtwhitetop.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#trouser1btn").on('click', {name: "London Mod", Description: "Handstitched sequin flares by Kylie West", image: "../images/rsz_sequinflares.png", price: 110, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#trouser2btn").on('click', {name: "Tokyo Chic", Description: "Flared black trousers by Heather McGee", image: "../images/rzflaredtrousersblackblazer.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#trouser3btn").on('click', {name: "New York Vogue", Description: "Funky blue flared trousers with handwoven lace at the ends by Jessie McArthur", image: "../images/rzfunkyjeans.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#coat1btn").on('click', {name: "Takeko Jacket", Description: "Leather jacket by Jessie McArthur", image: "../images/rsz_127.png", price: 200, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#coat2btn").on('click', {name: "Zenobia Coat", Description: "Woolan orange coatsheered from sheep of Benbulbin by Jessie McArthur", image: "../images/rz4.png", price: 180, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#coat3btn").on('click', {name: "Tomoe Jacket", Description: "Vegan leather jacket by Jessie McArthur", image: "../images/rzleatherjacket.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#acc1btn").on('click', {name: "The Syria Bag", Description: "Handwoven circular straw bag by Jessie McArthur", image: "../images/rz5.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#acc2btn").on('click', {name: "The Mediteranean Bag", Description: "Handwoven yellow circular straw bag by Jessie McArthur", image: "../images/rsz_2cropped48.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    $("#acc3btn").on('click', {name: "The Sicilian Scarf", Description: "Purple silk print scarf by Jessie McArthur", image: "../images/rsz_1scarf.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    

    function defineModal(e){
        $('#exampleModalLabel').text(e.data.name);
        $('#modalDesc').text(e.data.Description);
        $('#modalImage').attr("src", e.data.image);
        $('#mPrice').text("Price: €" + e.data.price);
        tempObj = [e.data.name, e.data.Description, e.data.image, e.data.price, e.data.selectedQuantity, e.data.Total];
  
    }

  });



//*****Setting Quantity of Order ***************
let orderTotal = 0;
let quantity = 0;
const order = [];

$(document).ready(function(){
    $("#quantity1").on('click', {
        selectedQuantity : 1}, setQuantity);
    $("#quantity2").on('click', {
        selectedQuantity : 2}, setQuantity);
    $("#quantity3").on('click', {
        selectedQuantity : 3}, setQuantity);
    $("#quantity4").on('click', {
        selectedQuantity : 4}, setQuantity);
    $("#quantity5").on('click', {
        selectedQuantity : 5}, setQuantity);
    
    function setQuantity(e){
        tempObj["selectedQuantity"] = e.data.selectedQuantity;
        console.log(e.data.selectedQuantity + ", " + tempObj["selectedQuantity"])
        
    }
});
    


//*****Orders ***************

tempObj = [];
basket = [];

//add orders to basket using the tempObj variable

function addToBasket(){
    
    basket.push(tempObj);
    
}

function displayOrders(){
        
        for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    
}
}


// jQuery to change background color of footer and buttons on payment page       
$(document).ready(function(){
    $(".basketFooter").css("background-color","white");
    $(".basketFooter").css("color","#3b3b3b");
    $(".basketRegSubmitBtn").css("background-color","#3b3b3b");
    $(".basketRegSubmitBtn").css("color","white");
    $(".basketConSubmitBtn").css("background-color","#3b3b3b");
    $(".basketConSubmitBtn").css("color","white");
});

var container = document.getElementById("addOrders");

function addOrders(){
    for(i = 0; i<basket.length; i++){
        container.append("<div id = order"+[i]+"></div>");
//            for(j = 0; j < basket[i].length; j++){ 
//            order[i].append("<h1>"+basket[i][j].name + "</h1> <br> <p>" + basket[i][j].Description + "</p>");
//                
//            }
    }
}


$(document).ready(() => {
  $('#addOrders').ready(function(){
      addOrders();
      displayOrders();
   
  })
  
});

