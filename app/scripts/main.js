'use strict';

var km2c = {
    links: function(link){
        window.open(link, '_blank');
    }
};

$(function(){
    $('.projects').on('click', 'a', function(e){
        e.preventDefault();
        var link = $(this).data('link');
        km2c.links(link);
    });
});