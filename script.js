(function($) {
    $(document).ready(function () {
        var menuToggle = $("#nav-hamburger");
        var menu = $("#navigation");
        var menuItem = $("#navigation ul li");

        menuToggle.click(function () {
            menu.toggleClass("active");
        });

        menuItem.click(function () {
            menu.removeClass("active");
            menuItem.removeClass("current-page");
            $(this).addClass("current-page");
        });
    });
})(jQuery);