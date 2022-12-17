let imageCounter = 0;
// let img;
const imgURL = ["css/home.jpg", "css/second.jpg", "css/third.jpg"];


$("#right-arrow").click( () => {
    imageCounter++; 
    if (imageCounter > 2) {
        imageCounter = 2;
        $(".bg").css({"background-image": "url("+ imgURL[2] +")"});
        activeLine();
    } else {
        $(".bg").css({"background-image": "url("+ imgURL[imageCounter] +")"});
        activeLine();
    } 
});

$("#left-arrow").click( () => {
    imageCounter--; 
    if (imageCounter < 0) {
        imageCounter = 0;
        $(".bg").css({"background-image": "url("+ imgURL[0] +")"});
        activeLine();
    } else {
        $(".bg").css({"background-image": "url("+ imgURL[imageCounter] +")"});
        activeLine();
    } 
});

function activeLine() {
    switch (imageCounter) {
        case 0:
            $(".first-line").addClass("active-line");
            $(".middle-line").removeClass("active-line");
            $(".last-line").removeClass("active-line");
            break;
        case 1:
            $(".first-line").removeClass("active-line");
            $(".middle-line").addClass("active-line");
            $(".last-line").removeClass("active-line");
            break;
        case 2:
            $(".first-line").removeClass("active-line");
            $(".middle-line").removeClass("active-line");
            $(".last-line").addClass("active-line");
            break;
        default:
            $(".first-line").addClass("active-line");
            break;
    }
}