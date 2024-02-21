
// navbar desktop

    window.onscroll = function() { myFunction() };

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    //  navbar for mobile and sidebar

    function toggleMenu() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth <= 768) {
            toggleMobileMenu();
        } else {
            toggleSidebar();
        }
    }

    function toggleMobileMenu() {
        var mobileMenu = document.getElementById("mobileMenu");
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth <= 768) { 
            mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
        }
    }

    function toggleMobileSubMenu(menuItem) {
        var mobileButtons = document.querySelectorAll('.mobile-menu .custom-button3');
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth <= 768) { 
            mobileButtons.forEach(function(button) {
                button.style.display = (button.getAttribute('data-target') === menuItem) ? "block" : "none";
            });
        }
    }
    // sidebar
    function toggleSidebar() {
        document.getElementById("mySidebar").style.display="block";
        document.getElementById("mySidebar").style.width = document.getElementById("mySidebar").style.width === "450px" ? "0" : "450px";
    }
