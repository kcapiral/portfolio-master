let windowWidth = 0;
let projectWindow = 0;
let projectWindowWidth = 0;
let velocity = 0;
let interval;
let projectTitle;
let imagesRange = [];

const scrollHandler = () => {
  let marginLeft = parseInt(projectWindow.css("margin-left").replace(/[^-\d\.]/g, ''));
  // margin left cannot go above 0
  // margin left cannot go below windowWidth - projectWindowWidth
  let newMargin = marginLeft + velocity/50;
  if (newMargin > 0) newMargin = 0;
  if (newMargin < windowWidth - projectWindowWidth) newMargin = windowWidth - projectWindowWidth;
  projectWindow.css("margin-left", `${newMargin}px`);

  // change text depdning on margins
  let pointer = -newMargin + (windowWidth/2);
  // depending on position of image, change title.
  if (pointer > imagesRange[5]) {
    projectTitle.text("christian shwartz");
  } else if (pointer > imagesRange[4]) {
    projectTitle.text("data cup");
  } else if (pointer > imagesRange[3]) {
    projectTitle.text("saiko!");
  } else if (pointer > imagesRange[2]) {
    projectTitle.text("playground");
  } else if (pointer > imagesRange[1]) {
    projectTitle.text("zetacon");
  } else {
    projectTitle.text("matagora");
  }
}

$(document).ready(function() {
  // check mouse position and scroll the project window
  projectWindow = $("#project-section");
  projectWindowWidth = projectWindow[0].clientWidth;
  projectTitle = $("#project-title");
  projectImages = $("img").toArray();
  projectImages.forEach(element => {
    imagesRange.push(element.x);
  });

  interval = setInterval(scrollHandler, 20);
  
  $("#index-section").mousedown((e) => {
    windowWidth = e.currentTarget.clientWidth;
    const mouseLocation = e.pageX;
    velocity = (windowWidth / 2) - mouseLocation;
  });

  $("#index-section").mouseup((e) => {
    velocity = 0;
  });

  

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
});
