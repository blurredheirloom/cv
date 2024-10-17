/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


$(document).ready(
    function(){
        $('.hidden').toggle();
        $('.code-toolbar').toggle();

        var r = Math.floor(Math.random()*5);
        switch (r) {
            case 0:
                $(".language-c").parent(".code-toolbar").toggle();
            break;
            case 1:
                $(".language-java").parent(".code-toolbar").toggle();
            break;
            case 2:
                $(".language-python").parent(".code-toolbar").toggle();
            break;
            case 3:
                $(".language-cpp").parent(".code-toolbar").toggle();
            break;
            case 4:
                $(".language-php").parent(".code-toolbar").toggle();
            break;
            default:
                $(".language-c").parent(".code-toolbar").toggle();
            break;
        }


        $('.dropdown .end').toggle();
        $(".experience .show-more").click(function () {
            $(".experience .hidden").fadeToggle();
            $('.experience .bxs-down-arrow').toggleClass('bxs-up-arrow');
            if( $('.experience .bxs-down-arrow').hasClass('bxs-up-arrow'))
                $(".experience .show-more label").text("Mostra meno");
            else
                $(".experience .show-more label").text("Mostra tutto");
        });
        $(".certificate .show-more").click(function () {
            $(".certificate .hidden").fadeToggle();
            $('.certificate .bxs-down-arrow').toggleClass('bxs-up-arrow');
            if( $('.certificate .bxs-down-arrow').hasClass('bxs-up-arrow'))
                $(".certificate .show-more label").text("Mostra meno");
            else
                $(".certificate .show-more label").text("Mostra tutto");
        });

});


const themeButton = document.getElementById('theme-button');
let darkTheme = 'dark';
let lightTheme = 'light';
let darkMode = localStorage.getItem("dark-mode");

function enableDarkMode() {
    document.body.classList.add(darkTheme);
    document.body.classList.remove(lightTheme);
   themeButton.classList.remove("bx-moon");
	themeButton.classList.add("bx-sun");
    localStorage.setItem("dark-mode", "enabled");
};

function disableDarkMode() {
    document.body.classList.remove(darkTheme);
    document.body.classList.add(lightTheme);
	themeButton.classList.remove("bx-sun");
	themeButton.classList.add("bx-moon");
    localStorage.setItem("dark-mode", "disabled");
};

enableDarkMode();


themeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
