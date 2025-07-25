let myImgs = [
    "./img/Mountain1.jpg",
    "./img/Mountain2.jpg",
    "./img/Mountain3.jpg",
    "./img/Mountain4.jpg",
    "./img/Mountain5.jpg",
    "./img/Mountain6.jpg",
    "./img/Mountain7.jpg",
    "./img/Mountain8.jpg",
    "./img/Mountain9.jpg",
    "./img/Mountain10.jpg",
    "./img/Mountain11.jpg",
    "./img/Mountain12.jpg",
    "./img/Mountain13.jpg",
];


function render(){
    let ImgsRef = document.getElementById('mountain_imgs');
    ImgsRef.innerHTML = "";
    for (let i = 0; i < myImgs.length; i++) {
        ImgsRef.innerHTML += getImages(i);
    }   
}

function getImages(i){
    return `<div> 
               <img src="${myImgs[i]}" alt="Berbild">
            </div>`
}

 window.onload = render;