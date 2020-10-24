'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'galeria.js', true),            
            new Route('about', 'about.html')
        ]);
    }
    init();
}());
