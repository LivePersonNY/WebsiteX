$(window).on('load', function (e) {
    console.log('page is fully loaded');
    $('.policy-toc').prepend('<h3>Section A</h3>');

    $('.link.link-no-arrow[href="#web-messaging-voice-amp-videonbspcalls"]').parent().after('<h3>Section B</h3>');
});
