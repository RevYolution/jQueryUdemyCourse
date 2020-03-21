// $(function(){}) is the shorthand notation for jQuery(function(){}) they work the same but industry convention is to use $. 
// delay() is a function that can be used to delay any animation by the milliseconds given in the parameters. It is also possible to use a callback function to time the execution of animations. 
    // Callback ex: $("p").fadeTo(1000, 0, function(){$("div").slideToggle()});
// ---------------------------------Showing and hiding elements example--------------------------------------//

// $(function() {
//   // jQuery goes here...

//   // Simple fading in and out of elements over a set time in milliseconds. fadeTo() allows to set duration and opacity of element. 
//   // $(".red-box").fadeOut(2000);
//   // $(".green-box").fadeOut(2000);
//   // $(".red-box").fadeIn(1000);
//   // $(".red-box").fadeTo(1000, 0.5);

//   // fadeOut() when complete by default sets the element to display none which removes it from the DOM flow. To avoid this affect use fadeTo() with opacity set to 0. This will prevent the element being removed from the DOM if that is desired. fadeTo() only affects the opacity so if the element has a display none property it will not appear on the page because the DOM will not show it. It will only work if a fadIn() is used in conjunction. 

//   // fadeTo() shown over different durations and opacity for elements. fadeToggle() will fade an element in or out with duration in milliseconds depending on current state will also store previous opacity value fading to that value on appearance. 
//   $(".red-box").fadeTo(1500, 0.2);
//   $(".green-box").fadeTo(2000, 0.5);
//   $(".blue-box").fadeTo(2000, 0.8);

//   $(".green-box").fadeToggle(1500);
//   $(".green-box").fadeToggle(1500);

//   // To just hide or show elements use the show()/hide() functions or toggle() to be able to switch between the two. These do allow for time in milliseconds as well. 

// });


// ---------------------------------Moving elements example--------------------------------------//

$(function(){
    // slideUp() hides an element and slideDown() reviles it again. slideToggle() will hide or show based on what the display is set to. Transition parameter is in milliseconds. 
        // $(".blue-box").slideUp(2000);
        // $(".blue-box").slideDown(2000);
    // Challenge to hide then show all the paragraphs that are present in the html file. 
        // $("p").hide();
        // $("p").slideDown(2000);

    // The animate() function allows the use of css properties to animate an element. The first parameter can be an object of how the element is to move and the second is the duration the animation is to take place. += or -= can be used to an unknown value to add or subtract on top of the value already present. 

    // Challenge move the blue box right then back to its starting position.
        $(".blue-box").animate({
            marginLeft : "+=200px",
            opacity : "0",
            height : "-=50px",
            width : "-=50px",
            marginTop : "+=25px"
        }, 1500);
        // $(".blue-box").animate({
        //     "margin-left" : "-=200px"
        // }, 1000);

        $("p").animate({
            fontSize : "20px"
        }, 1000);
});