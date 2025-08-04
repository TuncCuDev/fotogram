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
    "./img/Mountain11.jpg",
    "./img/Mountain12.jpg",
    "./img/Mountain13.jpg",
];

let TitlesImgs = [
    "Mount Everest",
    "Lhoste",
    "Markalu",
    "Cho Oyu",
    "Mansalu",
    "Broad Peak",
    "Nanda Devi",
    "Tirich Mir",
    "Trivor",
    "Gangkhar",
    "Pasu Sar",
    "Kabru",
];

let currentIndex= 0;

function render(){
    let fotogram = document.getElementById('mountain_imgs');
    fotogram.innerHTML = "";
    for (let i = 0; i < myImgs.length; i++) {
        fotogram.innerHTML += getImages(i);
    }   
}

function getImages(i){
    return `<div onclick="openOverlay(${i})" class="single_img"> 
               <img src="${myImgs[i]}" alt="Bild ${i + 1}"/>
               <p>${TitlesImgs[i]}</p>
            </div>`;
}

 function openOverlay(index){
    currentIndex = index;
    let Refoverlay = document.getElementById('overlay');
    let overlayImg = document.getElementById('overlay-img');
    overlayImg.src = myImgs[currentIndex];
    Refoverlay.classList.remove('d_none');
 }

 function closeOverlay(){
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.add('d_none');
 }

 function openNextImage(){
   currentIndex = currentIndex + 1;
    if (currentIndex === myImgs.length){
        currentIndex = 0;
    }
    return document.getElementById('overlay-img').src = myImgs[currentIndex]
}

 function openPreviousImage(){
    currentIndex = currentIndex - 1;
    if (currentIndex < 0){
        currentIndex = myImgs.length -1;
    }
    return document.getElementById('overlay-img').src = myImgs[currentIndex];
    }
 