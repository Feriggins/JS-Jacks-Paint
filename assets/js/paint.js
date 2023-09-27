function configureListeners() {
    let images = document.querySelectorAll('img');// select img elements  
    //images[img1,img2,img3]

    console.log("did i get images",images)
     for (var i = 0; i < images.length; i++) {  
        images[i].addEventListener("mouseover", (event)=>{
                addOpacity(event);
        })

        images[i].addEventListener("mouseout", (event)=>{
            removeOpacity(event);
        })
        // iterate over images and add mouseover event listeners  

    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add("dim");
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {

    event.target.classList.remove("dim");
     //remove appropriate CSS class
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
            price = "$14.99";
            colorName = "Lime Green";     
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = "$11.14";
            colorName = "Medium Brown";    
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = "$22.99";
            colorName = "Royal Blue";    
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = "$4.99";
            colorName = "Solid Black";    
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = "$8.22";
            colorName = "Solid Cyan";    
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = "$11.99";
            colorName = "Solid Purple";    
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = "$13.42";
            colorName = "Solid Red";    
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = "$21.98";
            colorName = "Solid White";    
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = "$14.99";
            colorName = "Solid Yellow";    
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }
    updatePrice(colorName, price)
}
    function updatePrice(colorName, price)
    {       
       

        document.querySelector("#color-name").innerHTML = colorName;
        document.querySelector("#color-price").innerHTML = price;
 
    }
    




configureListeners()