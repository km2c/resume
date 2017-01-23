'use strict';

var km2c = {
    links: function(link){
        window.open(link, '_blank');
    },
    mailMe: function(){
        var emailAddress = ['kirkmccutcheon', '@', 'gmail.com'].join(''),
            emailElement = document.getElementById('email');
        emailElement.innerHTML = emailAddress;
        emailElement.setAttribute('href', 'mailto:' +  emailAddress);
    },
    callMe: function(){
        var phoneNumber = ['614', '989','3924'].join('-'),
            phoneElement = document.getElementById('phone');
        phoneElement.innerHTML = phoneNumber;
        phoneElement.setAttribute('href', 'tel:' +  phoneNumber);
    }
};


$('.projects').on('click', 'a', function(e){
    e.preventDefault();
    var link = $(this).data('link');
    km2c.links(link);
});

window.addEventListener('load', function() {
    km2c.mailMe();
    km2c.callMe();
});
