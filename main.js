function changeRightSide(heading) {
    document.getElementById("right-heading").innerHTML = heading;
    document.getElementById("right-content").innerHTML = '<object type="text/html" data="'+ heading.toLowerCase() +'.html" ></object>';
}

$(document).ready(function(){

    // jQuery methods go here...
  
  });