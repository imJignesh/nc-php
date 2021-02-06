 Scrollbar.initAll({
   damping: 0.3,
   alwaysShowTracks: true,
   continuousScrolling: true
 });


//  document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"].switch');

//   checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//       // do this
//     //  console.log('Checked');
//     } else {
//       // do that
//      // console.log('Not checked');
//     }
//   });
// });




 var initTimer = function () {

   function getTimeRemaining(endtime) {
     const total = Date.parse(endtime) - Date.parse(new Date());
     const seconds = Math.floor((total / 1000) % 60);
     const minutes = Math.floor((total / 1000 / 60) % 60);
     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
     const days = Math.floor(total / (1000 * 60 * 60 * 24));

     return {
       total,
       days,
       hours,
       minutes,
       seconds
     };
   }

   function initializeClock(id, endtime) {
     const clock = document.getElementById(id);
     const daysSpan = clock.querySelector('.days');
     const hoursSpan = clock.querySelector('.hours');
     const minutesSpan = clock.querySelector('.minutes');
     const secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
       const t = getTimeRemaining(endtime);

       daysSpan.innerHTML = t.days;
       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

       if (t.total <= 0) {
         clearInterval(timeinterval);
       }
     }

     updateClock();
     const timeinterval = setInterval(updateClock, 1000);
   }


   if (document.getElementById('clockdiv')) {
     const deadline = document.getElementById('clockdiv').dataset.deadline;
     initializeClock('clockdiv', deadline);
   }

 }

 initTimer();

 jQuery(document).ready(function ($) {

  

  $(window).scroll(function(e){
    $('#sticky__posts').removeClass('open');
  });

  if($('#slide_toggle').length){
    $('#slide_toggle').click(function(e){
      e.preventDefault();
      $('#sticky__posts').toggleClass('open')
    })
  }  if($('.filter__toggle').length){
    $('.filter__toggle').click(function(e){
      e.preventDefault();
      $('.report_filters .uk-sticky').toggleClass('open')
    })
  }

   $('.passwordtoggle').click(function (e) {
     e.preventDefault();
     var input__type = $(this).parent().find('input').attr('type');
     if ("password" == input__type) {
       $(this).parent().find('input').attr('type', 'text');
     } else {
       $(this).parent().find('input').attr('type', 'password');
     }
   })
   $.validator.setDefaults({
     submitHandler: function () {
       alert("submitted! (do your ajax submit thing)");
     }
   });

   $("#form__subscribe").validate({
     focusInvalid: true,

     errorLabelContainer: $("#form__subscribe div.error__list .errors"),
     submitHandler: function (form) {
       // form.submit();
       $(form).find('.submit').addClass('loading');
       $(form).find('div.error__list').removeClass('uk-alert');
       alert("submitted! (do your subscribe submit thing)");

     },
     invalidHandler: function (event, validator) {
       var errors = validator.numberOfInvalids();
       if (errors) {
         $('#form__subscribe div.error__list').addClass('uk-alert');
       } else {
         $('#form__subscribe div.error__list').removeClass('uk-alert');
       }
     }
   });


   $("#form__login").validate({
     focusInvalid: true,

     errorLabelContainer: $("#form__login div.error__list .errors"),
     submitHandler: function (form) {
       // form.submit();
       $(form).find('.submit').addClass('loading');
       $(form).find('div.error__list').removeClass('uk-alert');
       alert("submitted! (do your ajax submit thing)");

     },
     invalidHandler: function (event, validator) {
       var errors = validator.numberOfInvalids();
       if (errors) {
         $('#form__login div.error__list').addClass('uk-alert');
       } else {
         $('#form__login div.error__list').removeClass('uk-alert');
       }
     }
   });


   $("#form__user").validate({
     errorLabelContainer: $("#form__user div.error__list .errors"),
     submitHandler: function (form) {
       // form.submit();
       $(form).find('.submit').addClass('loading');
       $(form).find('div.error__list').removeClass('uk-alert');

       alert("submitted! (do your ajax submit thing)");

     },
     invalidHandler: function (event, validator) {
       var errors = validator.numberOfInvalids();
       if (errors) {
         $('#form__user div.error__list').addClass('uk-alert');
       } else {
         $('#form__user div.error__list').removeClass('uk-alert');
       }
     },
     rules: {
       firstname: "required",
       lastname: "required",
       username: {
         required: true,
         minlength: 2
       },
       password: {
         required: true,
         minlength: 5
       },
       repeat_password: {
         required: true,
         minlength: 5,
         equalTo: "#password_user"
       },
       email: {
         required: true,
         email: true
       },
       topic: {
         required: "#newsletter:checked",
         minlength: 2
       },
       agree: "required"
     }
   });

   $("#form__profile").validate({
     errorLabelContainer: $("#form__profile div.error__list .errors"),
     submitHandler: function (form) {
       // form.submit();
       $(form).find('.submit').addClass('loading');
       $(form).find('div.error__list').removeClass('uk-alert');

       alert("submitted! (do your ajax submit thing)");

     },
     invalidHandler: function (event, validator) {
       var errors = validator.numberOfInvalids();
       if (errors) {
         $('#form__profile div.error__list').addClass('uk-alert');
       } else {
         $('#form__profile div.error__list').removeClass('uk-alert');
       }
     }
   }); 
   
   
   
   $("#form__corp").validate({
     errorLabelContainer: $("#form__corp div.error__list .errors"),
     submitHandler: function (form) {
       // form.submit();
       $(form).find('.submit').addClass('loading');
       $(form).find('div.error__list').removeClass('uk-alert');

       alert("submitted! (do your ajax submit thing)");

     },
     invalidHandler: function (event, validator) {
       var errors = validator.numberOfInvalids();
       if (errors) {
         $('#form__corp div.error__list').addClass('uk-alert');
       } else {
         $('#form__corp div.error__list').removeClass('uk-alert');
       }
     },
     rules: {
       firstname: "required",
       lastname: "required",
       username: {
         required: true,
         minlength: 2
       },
       password: {
         required: true,
         minlength: 5
       },
       repeat_password: {
         required: true,
         minlength: 5,
         equalTo: "#password_corp"
       },
       email: {
         required: true,
         email: true
       },
       topic: {
         required: "#newsletter:checked",
         minlength: 2
       },
       agree: "required"
     }
   });

   $("#form__recover").validate({
     errorLabelContainer: $("#form__recover div.error__list .errors"),
     submitHandler: function (form) {
       // form.submit();
       $(form).find('.submit').addClass('loading');
       $(form).find('div.error__list').removeClass('uk-alert');

       alert("submitted! (do your ajax submit thing)");

     },
     invalidHandler: function (event, validator) {
       var errors = validator.numberOfInvalids();
       if (errors) {
         $('#form__recover div.error__list').addClass('uk-alert');
       } else {
         $('#form__recover div.error__list').removeClass('uk-alert');
       }
     },
     rules: {
       firstname: "required",
       lastname: "required",
       username: {
         required: true,
         minlength: 2
       },
       password: {
         required: true,
         minlength: 5
       },
       repeat_password: {
         required: true,
         minlength: 5,
         equalTo: "#password_corp"
       },
       email: {
         required: true,
         email: true
       },
       topic: {
         required: "#newsletter:checked",
         minlength: 2
       },
       agree: "required"
     }
   });

   $('#community_nav').slick({
     infinite: true,
     variableWidth: true,
     autoplay: true,
     autoplaySpeed: 2000,
     prevArrow: '<a type="button" class="slick-prev uk-position-left uk-button"><i uk-icon="chevron-left"></i></a>',
     nextArrow: '<a type="button" class="slick-next uk-position-right uk-button"><i uk-icon="chevron-right"></i></a>',

   });

   var options = {
     requestDelay: 500,

     // url: function (phrase) {
     // 	return '?q=' + phrase + '&format=json';
     // },
     url: "results.json",
     //  url: "/find/?q=1",


     categories: [{
       listLocation: "users",
       maxNumberOfElements: 3,
       header: "Users"
     }, {
       listLocation: "reports",
       maxNumberOfElements: 3,
       header: "Reports"
     }, {
       listLocation: "articles",
       maxNumberOfElements: 3,
       header: "Articles"
     }],

     getValue: function (element) {
       // console.log(element);
       return element.title;
     },

     template: {
       type: "custom",
       method: function (value, item) {
         img = area = "";
         if (item.img) img = "<img src='" + item.img + "' class='suggestion-post-thumbnail' />";
         if (item.cat) area = "<span class='uk-background-primary uk-badge'>" + item.cat + "</span> ";
         if (item.view) area += "<i class='fa fa-eye'></i> " + item.view;

         return "<a class='suggestion-link' href='" + item.link + "'>" + img + "<div class='suggestion-post-attributes'>" + item.title + "<span class='suggestion-post-area'>" + area + "</span></div></a>";
       }
     },


     list: {
       /* onSelectItemEvent: function() {
               console.log(this)
       },
       onHideListEvent: function() {
          
       },*/

       maxNumberOfElements: 9,
       match: {
         enabled: true
       },

     },
     theme: "light"
   };

   jQuery('#site_search').easyAutocomplete(options);
 });