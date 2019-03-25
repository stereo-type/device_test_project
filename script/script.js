//--------------------------------------------------------------
//Switching servises 
//--------------------------------------------------------------

var servicesButtons = document.querySelectorAll(".services-item");
var servicesWrappers = document.querySelectorAll(".services-wrapper");

var addClickHandler = function(button, wrapper) {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        for(var i = 0; i < servicesButtons.length; i++) {
            
            servicesWrappers[i].classList.remove("service-description-current");
            servicesButtons[i].classList.remove("services-item-current");
        };
        // wrapper.classList.add("aperance");
        wrapper.classList.add("service-description-current");
        button.classList.add("services-item-current")
    });
};

for (var i = 0; i  < servicesButtons.length; i++) {
    addClickHandler(servicesButtons[i], servicesWrappers[i]);
}

//--------------------------------------------------------------
//Switching slides
//--------------------------------------------------------------

var radioButtons = document.querySelectorAll(".slider-radio");
var slides = document.querySelectorAll(".slider-item");

var addRadioButtonHandler = function(radioButton, currentSlide) {
    radioButton.addEventListener("click", function() {
        for(var i = 0; i < radioButtons.length; i++) {
            // radioButton[i].checked = false;
            slides[i].classList.remove("slider-item-current");
        };
        // radioButton.checked = true;
        currentSlide.classList.add("slider-item-current");
    })
}

for (var i = 0; i < radioButtons.length; i++) {
    addRadioButtonHandler(radioButtons[i], slides[i]);
}

