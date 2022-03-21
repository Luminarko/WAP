const gallery = document.getElementById("gallery");

for(let index in data){
    console.log(index);
    let item = data[index];
    let p = document.createElement("div");
    p.innerHTML = `<h2>${item.name}</h2><p>• ${item.description}</p><p>• ${item.author}</p>`;
    gallery.appendChild(p);
}