var imgAll = document.querySelectorAll('.image-snip');
var imgSnip_Src = [];
for (var i = 0; i < imgAll.length; i++) {
  imgSnip_Src.push(imgAll[i].src);
}

// imgFull_Src contains the src values of the full sized images hosted on Cloudinary.
var imgFull_Src = ['https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667357/tribute-hr-giger/images/artwork/giger-work-alien-front.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667355/tribute-hr-giger/images/artwork/giger-work-structure.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667356/tribute-hr-giger/images/artwork/brain-salad-surgery-album-art-1973.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667355/tribute-hr-giger/images/artwork/mirror-image.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667355/tribute-hr-giger/images/artwork/the-tourist-iv-1982.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667355/tribute-hr-giger/images/artwork/landscape-xviii.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667356/tribute-hr-giger/images/artwork/li-ii-1974.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667356/tribute-hr-giger/images/artwork/xenomorph-necronom-iv-1976.jpg', 'https://res.cloudinary.com/dtpoqyoum/image/upload/v1558667357/tribute-hr-giger/images/artwork/giger-work-concept-ship.jpg'];

var imgSnip_Num = [];
for (var i = 0; i < imgAll.length; i++) {
  imgSnip_Num.push(imgAll[i].id)
}

var modal = document.getElementById('myModal');
var modalImg = document.getElementById('full-img');
var captionText = document.getElementById('caption');

const showModal = (event) => {
  const clickedImage = event.target;
  for (let i = 0; i < imgSnip_Num.length; i++) {
    if (clickedImage.id === imgSnip_Num[i]) {
      modal.style.display = 'block';
      modal.style.transform = 'scale(1)';
      modalImg.src = imgFull_Src[i];
    }
  }
}

const closeModalButton = document.getElementsByClassName('close')[0];

closeModalButton.onclick = function() {
  modal.style.display = 'none';
}

imgAll.forEach(function(x) {
  x.addEventListener('click', showModal);
});