function onReady() {
    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });

    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });

    $('#some-button').magnificPopup({
        items: [
          {
            src: '../jquery/img/image.jpg'
          },
          {
            src: '../jquery/img/image2.jpg'
          },
          
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });
}
$(document).ready(onReady);