// COLOUR 1 - FIRST SWATCH

$(".c1-1").click(function() {
  $("#popup-main-colour").css("background-color", "#6b2c43");
  $("#popup-palette-colour").css("background-color", "#ef742e");
  $("#popup-title").text("Wine Red - Warm Orange");
  $("#popup-hex").text("#6B2C43 + #EF742E");

  $("#inspo-img-1").attr("src", "images/c1-1-1.jpg");
  $("#inspo-img-2").attr("src", "images/c1-1-2.jpg");
  $("#inspo-img-3").attr("src", "images/c1-1-3.jpg");
  $("#inspo-img-4").attr("src", "images/c1-1-4.jpg");
  $("#inspo-img-5").attr("src", "images/c1-1-5.jpg");
  $("#inspo-img-6").attr("src", "images/c1-1-6.jpg");
  $("#inspo-img-7").attr("src", "images/c1-1-7.jpg");
  $("#popup").fadeIn();
});

// 2 SWATCH - the green
$(".c1-2").click(function() {
  // set main colour in popup the big one
  $("#popup-main-colour").css("background-color", "#6b2c43");
   // set second colour in popup paired colour)
  $("#popup-palette-colour").css("background-color", "#a39b1f");
  // change the title text in popup
  $("#popup-title").text("Wine Red - Olive Gold");
  // update the hex codes text
  $("#popup-hex").text("#6B2C43 + #A39B1F");
  // add description
  
    // show popup smooth
  $("#popup").fadeIn();

  //all inspo images for this colour combo
  $("#inspo-img-1").attr("src", "images/c1-2-1.jpg");
  $("#inspo-img-2").attr("src", "images/c1-2-2.jpg");
  $("#inspo-img-3").attr("src", "images/c1-2-3.jpg");
  $("#inspo-img-4").attr("src", "images/c1-2-4.jpg");
  $("#inspo-img-5").attr("src", "images/c1-2-5.jpg");
  $("#inspo-img-6").attr("src", "images/c1-2-6.jpg");
  $("#inspo-img-7").attr("src", "images/c1-2-7.jpg");
    // repeat the same for all 
  
});


// 3 SWATCH - yellow
$(".c1-3").click(function() {
  $("#popup-main-colour").css("background-color", "#6b2c43");
  $("#popup-palette-colour").css("background-color", "#f4e49b");
  $("#popup-title").text("Wine Red - Soft Yellow");
  $("#popup-hex").text("#6B2C43 + #F4E49B");
  
  
$("#inspo-img-1").attr("src", "images/c1-3-1.jpg");
$("#inspo-img-2").attr("src", "images/c1-3-2.jpg");
$("#inspo-img-3").attr("src", "images/c1-3-3.jpg");
$("#inspo-img-4").attr("src", "images/c1-3-4.jpg");
$("#inspo-img-5").attr("src", "images/c1-3-5.jpg");
$("#inspo-img-6").attr("src", "images/c1-3-6.jpg");
$("#inspo-img-7").attr("src", "images/c1-3-7.jpg");

  $("#popup").fadeIn();
});

// CLOSE BUTTON
$("#close-popup").click(function() {
  $("#popup").fadeOut();
});

// CLICK OUTSIDE TO CLOSE
$("#popup").click(function(e) {
  if ($(e.target).is("#popup")) {
    $("#popup").fadeOut();
  }
});

// COLOUR 2 - second SWATCH

$(".c2-1").click(function() {
  $("#popup-main-colour").css("background-color", "#a3c7ec");
  $("#popup-palette-colour").css("background-color", "#fa9208");
  $("#popup-title").text("Light Blue - Bright Orange");
  $("#popup-hex").text("#A3C7EC + #FA9208");
 
  
  $("#inspo-img-1").attr("src", "images/c2-1-1.jpg");
  $("#inspo-img-2").attr("src", "images/c2-1-2.jpg");
  $("#inspo-img-3").attr("src", "images/c2-1-3.jpg");
  $("#inspo-img-4").attr("src", "images/c2-1-4.jpg");
  $("#inspo-img-5").attr("src", "images/c2-1-5.jpg");
  $("#inspo-img-6").attr("src", "images/c2-1-6.jpg");
  $("#inspo-img-7").attr("src", "images/c2-1-7.jpg");
  $("#popup").fadeIn();
});

$(".c2-2").click(function() {
  $("#popup-main-colour").css("background-color", "#a3c7ec");
  $("#popup-palette-colour").css("background-color", "#aa0a28");
  $("#popup-title").text("Light Blue - Deep Red");
  $("#popup-hex").text("#A3C7EC + #AA0A28");
  
  $("#inspo-img-1").attr("src", "images/c2-2-1.jpg");
  $("#inspo-img-2").attr("src", "images/c2-2-2.jpg");
  $("#inspo-img-3").attr("src", "images/c2-2-3.jpg");
  $("#inspo-img-4").attr("src", "images/c2-2-4.jpg");
  $("#inspo-img-5").attr("src", "images/c2-2-5.jpg");
  $("#inspo-img-6").attr("src", "images/c2-2-6.jpg");
  $("#inspo-img-7").attr("src", "images/c2-2-7.jpg");
   
  $("#popup").fadeIn();
});

$(".c2-3").click(function() {
  $("#popup-main-colour").css("background-color", "#a3c7ec");
  $("#popup-palette-colour").css("background-color", "#33404c");
  $("#popup-title").text("Light Blue - Dark Slate");
  $("#popup-hex").text("#A3C7EC + #33404C");
  
  
  $("#inspo-img-1").attr("src", "images/c2-3-1.jpg");
  $("#inspo-img-2").attr("src", "images/c2-3-2.jpg");
  $("#inspo-img-3").attr("src", "images/c2-3-3.jpg");
  $("#inspo-img-4").attr("src", "images/c2-3-4.jpg");
  $("#inspo-img-5").attr("src", "images/c2-3-5.jpg");
  $("#inspo-img-6").attr("src", "images/c2-3-6.jpg");
  $("#inspo-img-7").attr("src", "images/c2-3-7.jpg");
  
  $("#popup").fadeIn();
});

// COLOUR 3 - thrid SWATCH

$(".c3-1").click(function() {
  $("#popup-main-colour").css("background-color", "#a09c33");
  $("#popup-palette-colour").css("background-color", "#dee0df");
  $("#popup-title").text("Muted Green - Soft Grey");
  $("#popup-hex").text("#A09C33 + #DEE0DF");
  
  
  $("#inspo-img-1").attr("src", "images/c3-1-1.jpg");
  $("#inspo-img-2").attr("src", "images/c3-1-2.jpg");
  $("#inspo-img-3").attr("src", "images/c3-1-3.jpg");
  $("#inspo-img-4").attr("src", "images/c3-1-4.jpg");
  $("#inspo-img-5").attr("src", "images/c3-1-5.jpg");
  $("#inspo-img-6").attr("src", "images/c3-1-6.jpg");
  $("#inspo-img-7").attr("src", "images/c3-1-7.jpg");
  $("#popup").fadeIn();
  
});

$(".c3-2").click(function() {
  $("#popup-main-colour").css("background-color", "#a09c33");
  $("#popup-palette-colour").css("background-color", "#c7dfff");
  $("#popup-title").text("Muted Green - Light Blue");
  $("#popup-hex").text("#A09C33 + #C7DFFF");
 
  $("#inspo-img-1").attr("src", "images/c3-2-1.jpg");
  $("#inspo-img-2").attr("src", "images/c3-2-2.jpg");
  $("#inspo-img-3").attr("src", "images/c3-2-3.jpg");
  $("#inspo-img-4").attr("src", "images/c3-2-4.jpg");
  $("#inspo-img-5").attr("src", "images/c3-2-5.jpg");
  $("#inspo-img-6").attr("src", "images/c3-2-6.jpg");
  $("#inspo-img-7").attr("src", "images/c3-2-7.jpg"); 
  $("#popup").fadeIn();
  
});

$(".c3-3").click(function() {
  $("#popup-main-colour").css("background-color", "#a09c33");
  $("#popup-palette-colour").css("background-color", "#594c1e");
  $("#popup-title").text("Muted Green - Earth Brown");
  $("#popup-hex").text("#A09C33 + #594C1E");
 
  
  $("#inspo-img-1").attr("src", "images/c3-3-1.jpg");
  $("#inspo-img-2").attr("src", "images/c3-3-2.jpg");
  $("#inspo-img-3").attr("src", "images/c3-3-3.jpg");
  $("#inspo-img-4").attr("src", "images/c3-3-4.jpg");
  $("#inspo-img-5").attr("src", "images/c3-3-5.jpg");
  $("#inspo-img-6").attr("src", "images/c3-3-6.jpg");
  $("#inspo-img-7").attr("src", "images/c3-3-7.jpg");
  $("#popup").fadeIn();

});

// COLOUR 4 - FOURTH SWATCH
$(".c4-1").click(function() {
  $("#popup-main-colour").css("background-color", "#ffbaec");
  $("#popup-palette-colour").css("background-color", "#e15304");
  $("#popup-title").text("Soft Pink - Bright Orange");
  $("#popup-hex").text("#FFBAEC + #E15304");
 
  
  $("#inspo-img-1").attr("src", "images/c4-1-1.jpg");
  $("#inspo-img-2").attr("src", "images/c4-1-2.jpg");
  $("#inspo-img-3").attr("src", "images/c4-1-3.jpg");
  $("#inspo-img-4").attr("src", "images/c4-1-4.jpg");
  $("#inspo-img-5").attr("src", "images/c4-1-5.jpg");
  $("#inspo-img-6").attr("src", "images/c4-1-6.jpg");
  $("#inspo-img-7").attr("src", "images/c4-1-7.jpg");
  $("#popup").fadeIn();
});

$(".c4-2").click(function() {
  $("#popup-main-colour").css("background-color", "#ffbaec");
  $("#popup-palette-colour").css("background-color", "#95cdb4");
  $("#popup-title").text("Soft Pink - Mint Green");
  $("#popup-hex").text("#FFBAEC + #95CDB4");
 
  
  $("#inspo-img-1").attr("src", "images/c4-2-1.jpg");
  $("#inspo-img-2").attr("src", "images/c4-2-2.jpg");
  $("#inspo-img-3").attr("src", "images/c4-2-3.jpg");
  $("#inspo-img-4").attr("src", "images/c4-2-4.jpg");
  $("#inspo-img-5").attr("src", "images/c4-2-5.jpg");
  $("#inspo-img-6").attr("src", "images/c4-2-6.jpg");
  $("#inspo-img-7").attr("src", "images/c4-2-7.jpg");
  $("#popup").fadeIn();
});

$(".c4-3").click(function() {
  $("#popup-main-colour").css("background-color", "#ffbaec");
  $("#popup-palette-colour").css("background-color", "#9fa4be");
  $("#popup-title").text("Soft Pink - Cool Grey Blue");
  $("#popup-hex").text("#FFBAEC + #9FA4BE");
 
  
  $("#inspo-img-1").attr("src", "images/c4-3-1.jpg");
  $("#inspo-img-2").attr("src", "images/c4-3-2.jpg");
  $("#inspo-img-3").attr("src", "images/c4-3-3.jpg");
  $("#inspo-img-4").attr("src", "images/c4-3-4.jpg");
  $("#inspo-img-5").attr("src", "images/c4-3-5.jpg");
  $("#inspo-img-6").attr("src", "images/c4-3-6.jpg");
  $("#inspo-img-7").attr("src", "images/c4-3-7.jpg");
  $("#popup").fadeIn();
});

// COLOUR 5 - Fith SWATCH

$(".c5-1").click(function() {
  $("#popup-main-colour").css("background-color", "#fd6f2f");
  $("#popup-palette-colour").css("background-color", "#c1c5b6");
  $("#popup-title").text("Orange + Soft Grey Green");
  $("#popup-hex").text("#FD6F2F + #C1C5B6");
  
  $("#inspo-img-1").attr("src", "images/c5-1-1.jpg");
  $("#inspo-img-2").attr("src", "images/c5-1-2.jpg");
  $("#inspo-img-3").attr("src", "images/c5-1-3.jpg");
  $("#inspo-img-4").attr("src", "images/c5-1-4.jpg");
  $("#inspo-img-5").attr("src", "images/c5-1-5.jpg");
  $("#inspo-img-6").attr("src", "images/c5-1-6.jpg");
  $("#inspo-img-7").attr("src", "images/c5-1-7.jpg");

  $("#popup").fadeIn();
});

$(".c5-2").click(function() {
  $("#popup-main-colour").css("background-color", "#fd6f2f");
  $("#popup-palette-colour").css("background-color", "#fdf6f0");
  $("#popup-title").text("Orange + Off White");
  $("#popup-hex").text("#FD6F2F + #FDF6F0");
  

  $("#inspo-img-1").attr("src", "images/c5-2-1.jpg");
  $("#inspo-img-2").attr("src", "images/c5-2-2.jpg");
  $("#inspo-img-3").attr("src", "images/c5-2-3.jpg");
  $("#inspo-img-4").attr("src", "images/c5-2-4.jpg");
  $("#inspo-img-5").attr("src", "images/c5-2-5.jpg");
  $("#inspo-img-6").attr("src", "images/c5-2-6.jpg");
  $("#inspo-img-7").attr("src", "images/c5-2-7.jpg");

  $("#popup").fadeIn();
});

$(".c5-3").click(function() {
  $("#popup-main-colour").css("background-color", "#fd6f2f");
  $("#popup-palette-colour").css("background-color", "#4e5d63");
  $("#popup-title").text("Orange + Dark Blue Grey");
  $("#popup-hex").text("#FD6F2F + #4E5D63");
  
  $("#inspo-img-1").attr("src", "images/c5-3-1.jpg");
  $("#inspo-img-2").attr("src", "images/c5-3-2.jpg");
  $("#inspo-img-3").attr("src", "images/c5-3-3.jpg");
  $("#inspo-img-4").attr("src", "images/c5-3-4.jpg");
  $("#inspo-img-5").attr("src", "images/c5-3-5.jpg");
  $("#inspo-img-6").attr("src", "images/c5-3-6.jpg");
  $("#inspo-img-7").attr("src", "images/c5-3-7.jpg");

  $("#popup").fadeIn();
});

// COLOUR 6 - six SWATCH

$(".c6-1").click(function() {
  $("#popup-main-colour").css("background-color", "#f8e6a0");
  $("#popup-palette-colour").css("background-color", "#623f1b");
  $("#popup-title").text("Soft Yellow - Deep Brown");
  $("#popup-hex").text("#F8E6A0 + #623F1B");

  
  $("#inspo-img-1").attr("src", "images/c6-1-1.jpg");
  $("#inspo-img-2").attr("src", "images/c6-1-2.jpg");
  $("#inspo-img-3").attr("src", "images/c6-1-3.jpg");
  $("#inspo-img-4").attr("src", "images/c6-1-4.jpg");
  $("#inspo-img-5").attr("src", "images/c6-1-5.jpg");
  $("#inspo-img-6").attr("src", "images/c6-1-6.jpg");
  $("#inspo-img-7").attr("src", "images/c6-1-7.jpg");
  
  $("#popup").fadeIn();
});

$(".c6-2").click(function() {
  $("#popup-main-colour").css("background-color", "#f8e6a0");
  $("#popup-palette-colour").css("background-color", "#d4e7f7");
  $("#popup-title").text("Soft Yellow - Light Blue");
  $("#popup-hex").text("#F8E6A0 + #D4E7F7");
  
  $("#inspo-img-2").attr("src", "images/c6-2-2.jpg");
  $("#inspo-img-3").attr("src", "images/c6-2-3.jpg");
  $("#inspo-img-4").attr("src", "images/c6-2-4.jpg");
  $("#inspo-img-5").attr("src", "images/c6-2-5.jpg");
  $("#inspo-img-6").attr("src", "images/c6-2-6.jpg");
  $("#inspo-img-7").attr("src", "images/c6-2-7.jpg");
  $("#popup").fadeIn();
});

$(".c6-3").click(function() {
  $("#popup-main-colour").css("background-color", "#f8e6a0");
  $("#popup-palette-colour").css("background-color", "#8996A4");
  $("#popup-title").text("Soft Yellow - Cool Grey");
  $("#popup-hex").text("#F8E6A0 + #8996A4");
  
  $("#inspo-img-1").attr("src", "images/c6-3-1.jpg");
  $("#inspo-img-2").attr("src", "images/c6-3-2.jpg");
  $("#inspo-img-3").attr("src", "images/c6-3-3.jpg");
  $("#inspo-img-4").attr("src", "images/c6-3-4.jpg");
  $("#inspo-img-5").attr("src", "images/c6-3-5.jpg");
  $("#inspo-img-6").attr("src", "images/c6-3-6.jpg");
  $("#inspo-img-7").attr("src", "images/c6-3-7.jpg");
  
  $("#popup").fadeIn();
});
