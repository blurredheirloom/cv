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

var element = document.getElementById("hello");
var r = Math.floor(Math.random()*5);
element.childNodes.forEach(x => x.classList = "")

switch (r) {
    case 0:
        element.classList = "language-c";
        element.querySelector(':nth-child(1)').classList.add("visible");
    break;
    case 1:
        element.classList = "language-java";
        element.querySelector(':nth-child(2)').classList.add("visible");
    break;
    case 2:
        element.classList = "language-python";
        element.querySelector(':nth-child(3)').classList.add("visible");
    break;
    case 3:
        element.classList = "language-cpp";
        element.querySelector(':nth-child(4)').classList.add("visible");
    break;
    case 4:
        element.classList = "language-php";
        element.querySelector(':nth-child(5)').classList.add("visible");
    break;
    default:
        element.classList = "language-c";
        element.querySelector(':nth-child(1)').classList.add("visible");
    break;
}


$(document).ready(
    function(){
        $('.hidden').toggle();
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



/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 


/*==================== GENERATE PDF ====================*/ 
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements


    // 2. The PDF is generated


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
