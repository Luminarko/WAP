const gallery = document.getElementById("gallery");
const details = document.getElementById("details");

for(let index in data){
    console.log(index);
    let item = data[index];
    let itemElement = document.createElement("div");
    itemElement.innerHTML = `<img src="${item.images[0]}"><h2 id="name">${item.name}</h2><p> ${item.description}</p><p> ${item.author}</p><p class="price">${item.price}</p>`;
    gallery.appendChild(itemElement);
    
    itemElement.onclick = () => {
        details.innerHTML = `<div class="background"><div class="deta"><img src="${item.images}"><h2 id="name">${item.name}</h2><p> ${item.description}</p><p> ${item.author}</p><p class="price">${item.price}</p></div></div>`;
        details.style.display = "flex";
    };
    details.onclick = () => {
        details.style.display = "none";
    };
}
