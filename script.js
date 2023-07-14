/*function changeIndex(){
    document.getElementById("imageIndex").src="images/Marcus Norris.jpg";
}*/

function changeIndex() {
    var image = document.getElementById("imageIndex");
    var imagePath = image.src;
    
    if (imagePath.endsWith("bio1.jpg")) {
      image.src = "images/bio2.jpg";
    } else if (imagePath.endsWith("bio2.jpg")){
      image.src = "images/bio3.jpg";
    } else {
        image.src = "images/bio1.jpg";
    }
  }