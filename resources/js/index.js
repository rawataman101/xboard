// get rss feeds
async function getFeed(i) {
    try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${magazines[i]}`)
        const resJson = await res.json();
        console.log(resJson) 
        return resJson
    } catch (error) {
        console.log("ERROR! fetching feed", error)
        return null
    }
    
}

// get rss feeds
async function getFeed(i) {
  try {
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${magazines[i]}`)
      const resJson = await res.json();
      console.log(resJson) 
      return resJson
  } catch (error) {
      console.log("ERROR! fetching feed", error)
      return null
  }
  
}

function getCarousel(data, index) {
const carouselDiv = document.createElement("div");
carouselDiv.id = `carouselExampleIndicators${index}`;
carouselDiv.className = "carousel slide";
carouselDiv.setAttribute("data-bs-ride", "carousel");

const carouselInnerDiv = document.createElement("div");
carouselInnerDiv.id = `carousel-inner${index}`;

data.forEach((e, i) => {
  const aDiv = document.createElement("a")
  aDiv.setAttribute("href", `${e.link}`)
  aDiv.id = (`${index}__aDiv__${i}`)
  aDiv.setAttribute("target", "_blank")
  const cardElement = getCard(e);
  const carouselItem = document.createElement("div");
  carouselItem.className = `carousel-item ${i === 0 ? "active" : ""}`;

  aDiv.appendChild(cardElement)
  carouselItem.appendChild(aDiv);
  carouselInnerDiv.appendChild(carouselItem);
});

carouselDiv.appendChild(carouselInnerDiv);

// Next button
const nextButton = document.createElement("a");
nextButton.className = "carousel-control-next";
nextButton.href = `#carouselExampleIndicators${index}`;
nextButton.setAttribute("role", "button");
nextButton.setAttribute("data-bs-slide", "next");
nextButton.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>`;
carouselDiv.appendChild(nextButton);

// Append the entire carousel to the specified card
document.getElementById(`carousel__card${index + 1}`).appendChild(carouselDiv);
}



function getCard(i) {
  // for(let i of data) {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card"
      cardDiv.innerHTML = `
      <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${i.title}</h5>
      <div class="cardBody__subtitle">
          <p>${i.author}</p>
          <i class="fa-solid fa-circle"></i>
          </svg>
          <h6>${i.pubDate}</h6>
      </div>
      <p class="card-text">${i.content}</p>
   </div>
  `  
    return cardDiv;
  //document.querySelector(".card").appendChild(cardDiv)
// }
}



function getCard(i) {
    // for(let i of data) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card"
        cardDiv.innerHTML = `
        <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${i.title}</h5>
        <div class="cardBody__subtitle">
            <p>${i.author}</p>
            <i class="fa-solid fa-circle"></i>
            </svg>
            <h6>${i.pubDate}</h6>
        </div>
        <p class="card-text">${i.content}</p>
     </div>
    `  
      return cardDiv;
    //document.querySelector(".card").appendChild(cardDiv)
  // }
}