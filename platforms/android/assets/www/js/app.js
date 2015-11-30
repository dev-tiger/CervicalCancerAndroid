function onBackKeyDown() {
    $$(".back").click();
}

var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Initialize your app
var myApp = new Framework7({
    pushState: true,
    swipePanel: 'left',
    material: true,
    materialPageLoadDelay: 0,
    materialRipple: true,
});

// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
  //Because we want to use dynamic navbar, we need to enable it for this view:
  //dynamicNavbar: true
});

var mySwiper = myApp.swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationHide: false,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

if (isAndroid) {
    //document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener('backbutton', function (e) {
        $$(".back").click(); e.preventDefault();
    }, false);

}
//
// // Add views
// var view1 = myApp.addView('#view-1', {
//     dynamicNavbar: true,
//     domCache: true,
// });
//
// var view2 = myApp.addView('#view-2', {
//     // Because we use fixed-through navbar we can enable dynamic navbar
//     dynamicNavbar: true,
//     domCache: true,
// });
//
// var view3 = myApp.addView('#view-3', {
//     dynamicNavbar: true,
//     domCache: true,
// });
