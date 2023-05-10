//change Color-theme 

function GreenTheme() {
    const element1 = document.getElementById("green");
    element1.classList.add("green-1");

    const element2 = document.getElementById("1");
    element2.classList.add("green-1");

    const element3 = document.getElementById("2");
    element3.classList.add("green-1");
    
    const element4 = document.getElementById("3");
    element4.classList.add("green-1");
   
    const element5 = document.getElementById("4");
    element5.classList.add("green-1");
    
  }
  
 
  function PurpleTheme() {
   
    const element1 = document.getElementById("green");
    element1.classList.remove("green-1");

    const element2 = document.getElementById("1");
    element2.classList.remove("green-1");


    const element3 = document.getElementById("2");
    element3.classList.remove("green-1");

    const element4 = document.getElementById("3");
    element4.classList.remove("green-1");

    const element5 = document.getElementById("4");
    element5.classList.remove("green-1");
  }
  




document.getElementById("green-button").addEventListener("click", GreenTheme);
document.getElementById("purple-button").addEventListener("click", PurpleTheme);



////////////////////////////////////

//display cards
var imageUrls = [
    "./assets/images/1.png",
    "./assets/images/2.png",
    "./assets/images/3.png",
    "./assets/images/4.png",
    "./assets/images/5.png",
    "./assets/images/6.png",
  ];

  var divIds = ["div1", "div2", "div3", "div4", "div5", "div6"];

function create_card(parentDiv, imageUrl) {
    // Create the card div
    var card = document.createElement("div");
    card.className = "card shadow-sm";
  
    // Create an image element
    var image = document.createElement("img");
    image.src = imageUrl;
    image.className = "card-img-top img-fluid";

    // Create card body
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    // Create card title
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = "الأكثر تنويعاً";
  
    // Create card text
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = "تمكنك دراية من الاستثمار في أكثر من 60 منتج استثماري من 10 مدراء مختلفين. هذه المنتجات تستثمر في كافة الفئات الاستثمارية (كالأسهم، والصكوك، والمرابحة...إلخ) والأسواق كما يمكنك التداول في ما يزيد عن 1,200 من صناديق المؤشرات المتداولة ETF";
  
    // Append title and text to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  
    // Append card body to card
    card.appendChild(image);
    card.appendChild(cardBody);
  
    // Append card to the card row
    var cardRow = document.getElementById(parentDiv);
    cardRow.appendChild(card);
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {


    for (var i = 0; i < divIds.length; i++) {
        create_card(divIds[i], imageUrls[i]);
      }
      
  

    
  });
 

