$(document).ready(() => {
    $(".welcome").fadeIn(500);
    // Navbar active on scroll
    $(".container-fluid").scroll((e) => {
        let scrollTop = $(".container-fluid").scrollTop();
        console.log(scrollTop);
        $(".navBar li a").removeClass("active");

        if (scrollTop <= 10) {
            $(".welcome").fadeIn(500);
        }
        else {
            $(".welcome").fadeOut(500);
        }


        if (scrollTop < 400) {
            $(".homeLink").addClass("active");
        }
        else if (scrollTop > 400 && scrollTop <= 980) {
            $(".servicesLink").addClass("active");
            $(".card").fadeIn(500);
        }
        else if (scrollTop > 980 && scrollTop <= 1540) {
            $(".projectsLink").addClass("active");
        }
        else if (scrollTop > 1540) {
            $(".aboutUsLink").addClass("active");
        }
    })
});