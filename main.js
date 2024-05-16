let searchBtn = document.querySelector("#searchbtn")
let searchForm = document.querySelector(".search-form")
let loginform = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".nav-bar")
let videobtn = document.querySelectorAll(".video-btn")


function showbar() {
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
}

function showform() {
    loginform.classList.add("active")
}

function hideform() {
    loginform.classList.remove("active")
}

function showmenu() {
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}


videobtn.forEach(slide => {
    slide.addEventListener("click" , function() {
        document.querySelector(".controls .blue").classList.remove("blue")
        slide.classList.add("blue")
        let src = slide.getAttribute("data-srs")
        document.querySelector("#video-slider").src = src
    })
})


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slider, i) => {
            if (i === index) {
                slider.style.display = "block";
                } else {
                slider.style.display = "none";
            }
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        showSlide(currentIndex);
    }

    document.getElementById("prevBtn").addEventListener("click", function() {
        goToSlide(currentIndex - 1);
    });

    document.getElementById("nextBtn").addEventListener("click", function() {
        goToSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});
