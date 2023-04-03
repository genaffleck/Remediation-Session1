(function(){
  "use strict";

  const myImages = ["image1.jpg", "image2.jpg", "image3.jpg","image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg"];
  
  let currentImage = 0;

  document.getElementById("next").onclick = nextPhoto;

  function nextPhoto(){
    currentImage++;
    if(currentImage > myImages.length-1){currentImage = 0;}
    document.getElementById("myimage").src = myImages[currentImage];
  }

  document.getElementById("previous").onclick = previousPhoto;

  function previousPhoto(){
    currentImage--;
    if(currentImage < 0){currentImage = myImages.length-1}
    document.getElementById("myimage").src = myImages[currentImage];      
  }
})();