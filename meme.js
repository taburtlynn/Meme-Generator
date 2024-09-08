// Generate a meme by adding top input, bottom input, overlay with picture from url. Append each meme to the DOM with the ability to click on each image to remove the meme

document.addEventListener("DOMContentLoaded", function(){

    // After all scripts are downloaded

    const form = document.getElementById("memeForm");
    const memeGallery = document.querySelector(".memeGallery");
    
    
    form.addEventListener("submit", function(e){

        // Submit event listener added to append top and bottom text with image to the DOM
    
    e.preventDefault();

    let memeWrapper = document.createElement("div");

    memeWrapper.classList.add("col-md-6", "col-12");

    let memeDiv = document.createElement("div");
    
    memeDiv.classList.add("meme");
    let urlInput = document.getElementById("memeImage").value;
    let img = document.createElement("img");
    img.src = urlInput;
    let topText = document.createElement("p");
    topText.classList.add("text", "top"); 
    topText.innerText = document.getElementById("topText").value;

    let bottomText = document.createElement("p");
    bottomText.classList.add("text", "bottom"); 
    bottomText.innerText = document.getElementById("bottomText").value;
    
    let overlay = document.createElement("div"); overlay.classList.add("overlay"); 
    let removeSpan = document.createElement("span"); removeSpan.classList.add("oi", "oi-x"); overlay.appendChild(removeSpan);
        
    memeDiv.appendChild(img);
    memeDiv.appendChild(topText);
    memeDiv.appendChild(bottomText);
    memeDiv.appendChild(overlay);
    memeWrapper.appendChild(memeDiv);
    memeGallery.appendChild(memeWrapper);
    
    form.reset();
    
    });
    
    function remove(event) {

// remove event. click on element to remove the whole parent.

        if (event.target.classList.contains("overlay")|| e.target.classList.contains("oi-x") ){
            event.target.parentNode.parentNode.remove(); 
        }
           }
    memeGallery.addEventListener('click', remove, false);
    });
    
    