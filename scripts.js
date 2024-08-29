function PromeniTemu() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var headerElement = document.getElementById('header');
    
    var currentColor = window.getComputedStyle(headerElement).backgroundColor;
    if (currentColor === "rgba(255, 192, 203, 0.6)") {
        headerElement.style.backgroundColor = "rgba(255, 192, 203, 0.3)";
        
    } 
    else {
        headerElement.style.backgroundColor = "rgba(255, 192, 203, 0.6)";
    }

    var headerImage = document.getElementById('headerImage');

    if (headerImage.src.includes('images/blacklogo.png')) {
        headerImage.src = 'images/whitelogo.png';
    } 
    else {
        headerImage.src = 'images/blacklogo.png';
    }

    var mainElement = document.getElementById('main');
    
    var currentColor = window.getComputedStyle(mainElement).backgroundColor;
    if (currentColor === "rgba(0, 0, 0, 0.1)") {
        mainElement.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
        
    } 
    else {
        mainElement.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }

    if (element.classList.contains("dark-mode")) {
        var all = document.getElementsByTagName("*");
        for (var i=0, max=all.length; i < max; i++) {
            all[i].style.color = "white";
        }
    } else {
        var all = document.getElementsByTagName("*");
        for (var i=0, max=all.length; i < max; i++) {
            all[i].style.color = "black";
        }
    }
}