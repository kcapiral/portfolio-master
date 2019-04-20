let windowWidth = 0;
let projectWindow = 0;
let projectWindowWidth = 0;
let velocity = 0;
let interval;
let projectTitle;
let imagesRange = [];

// const scrollHandler = () => {
//   let marginLeft = parseInt(projectWindow.css("margin-left").replace(/[^-\d\.]/g, ''));
//   // margin left cannot go above 0
//   // margin left cannot go below windowWidth - projectWindowWidth
//   let newMargin = marginLeft + velocity/10;
//   if (newMargin > 0) newMargin = 0;
//   if (newMargin < windowWidth - projectWindowWidth) newMargin = windowWidth - projectWindowWidth;
//   projectWindow.css("margin-left", `${newMargin}px`);

//   // change text depdning on margins
//   let pointer = -newMargin + (windowWidth/2);
//   // depending on position of image, change title.
//   if (pointer > imagesRange[5]) {
//     projectTitle.text("christian shwartz");
//   } else if (pointer > imagesRange[4]) {
//     projectTitle.text("data cup");
//   } else if (pointer > imagesRange[3]) {
//     projectTitle.text("saiko!");
//   } else if (pointer > imagesRange[2]) {
//     projectTitle.text("playground");
//   } else if (pointer > imagesRange[1]) {
//     projectTitle.text("zetacon");
//   } else {
//     projectTitle.text("matagora");
//   }
// }

$(document).ready(function() {
  // check mouse position and scroll the project window
//   projectWindow = $("#project-section");
//   projectWindowWidth = projectWindow[0].clientWidth;
//   projectTitle = $("#project-title");
//   projectImages = $("img").toArray();
//   projectImages.forEach(element => {
//     imagesRange.push(element.x);
//   });

//   interval = setInterval(scrollHandler, 100);

//   $("#index-section").mousedown((e) => {
//     windowWidth = e.currentTarget.clientWidth;
//     const mouseLocation = e.pageX;
//     velocity = (windowWidth / 2) - mouseLocation;
//   });

//   $("#index-section").mouseup((e) => {
//     velocity = 0;
//   });



  $("#matagora").hover(function(){
    $("body").css("background-color", "#DEFFF4"), 1200;
  });

  $("#playground").hover(function(){
    $("body").css("background-color", "#FFEEE8"), 1200;
  });

  $("#zetacon").hover(function(){
    $("body").css("background-color", "#8AA2A8"), 1200;
  });

  $("#saiko").hover(function(){
    $("body").css("background-color", "#D5D5FF"), 1200;
  });

  $("#datacup").hover(function(){
    $("body").css("background-color", "#EBD59B"), 1200;
  });

  $("#christianschwartz").hover(function(){
    $("body").css("background-color", "#C4EFFF"), 1200;
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
