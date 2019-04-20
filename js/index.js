let windowWidth = 0;
let projectWindow = 0;
let projectWindowWidth = 0;
let velocity = 0;
let interval;
let projectTitle;
let imagesRange = [];

$(document).ready(function() {
  $("#matagora").hover(function(){
    $("body").css("background-color", "#DEFFF4");
  });

  $("#playground").hover(function(){
    $("body").css("background-color", "#FFEEE8");
  });

  $("#zetacon").hover(function(){
    $("body").css("background-color", "#8AA2A8");
  });

  $("#saiko").hover(function(){
    $("body").css("background-color", "#D5D5FF");
  });

  $("#datacup").hover(function(){
    $("body").css("background-color", "#EBD59B");
  });

  $("#christianschwartz").hover(function(){
    $("body").css("background-color", "#C4EFFF");
  });

  // $("#matagora").hover(function(){
  //   $("body").animate({backgroundColor: "#DEFFF4"}, 600 );
  // });
  //
  // $("#playground").hover(function(){
  //   $("body").animate({backgroundColor: "#abcdef"}, 600 );
  // });
  //
  // $("#zetacon").hover(function(){
  //   $("body").animate({backgroundColor: "#abcdef"}, 600 );
  // });
  //
  // $("#saiko").hover(function(){
  //   $("body").animate({backgroundColor: "#abcdef"}, 600 );
  // });
  //
  // $("#datacup").hover(function(){
  //   $("body").animate({backgroundColor: "#abcdef"}, 600 );
  // });
  //
  // $("#christianschwartz").hover(function(){
  //   $("body").animate({backgroundColor: "#abcdef"}, 600 );
  // });

});
