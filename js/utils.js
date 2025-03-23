_arabica.fetchParamFromUrl = function(param) {
    var url = window.location.search;
    var searchParams = new URLSearchParams(url);
    return searchParams.get(param);
}

_arabica.setTheme = function() {
    var themeMap = {
        "Assets": "Assets",
    };
    var default_theme = "Assets";
    _arabica.theme = themeMap[_arabica.fetchParamFromUrl("theme")] || default_theme;
    $(".container").addClass(_arabica.theme);
}