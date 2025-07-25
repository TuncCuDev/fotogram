let myImgs = [
    "Mountain_img(1).jpg",
    "Mountain_img(2).jpg",
    "Mountain_img(3).jpg",
    "Mountain_img(4).jpg",
    "Mountain_img(5).jpg",
    "Mountain_img(6).jpg",
    "Mountain_img(7).jpg",
    "Mountain_img(8).jpg",
    "Mountain_img(9).jpg",
    "Mountain_img(10).jpg",
    "Mountain_img(11).jpg",
    "Mountain_img(12).jpg",
    "Mountain_img(13).jpg",
];


function render(){
    let ImgsRef = document.getElementById('mountain_imgs');
    ImgsRef.innerHTML = "";
    for (let i = 0; i < myImgs.length; i++) {
        mountain_imsRef.innerHTML += getImages(i);
    }   
}

function getImages(i){
    return `<div> 
                ${myImgs[i]}
            </div>`
}