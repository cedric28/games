(function ($) {
    'use strict';
    $ = jQuery.noConflict();
    var app = {
        initMobileMenu: function() {
            $('#mobile-menu').on('click', function(){
                var sb = $('#sidebar');
                var mm = $('#mobile-menu');
                if(sb.hasClass('m-active')){
                    sb.removeClass('m-active');
                    mm.removeClass('m-active');
                } else {
                    sb.addClass('m-active');
                    mm.addClass('m-active');
                }
            });
            
            // $('#sidebarCollapse').on('click',function(){
            // 	$('#sidebar').toggleClass('active');
            // });
        },
        initMobileResize: function() {
            $(window).on('resize load',function(){
                var sf = $('.search-form');
                if ($(this).width() < 991) {
                    sf.detach().prependTo('.mobile-search');
                } else {
                    sf.detach().prependTo('.desktop-search');
                }
            });
        },
        init: function() {
            this.initMobileResize();
            this.initMobileMenu();
        }
    }
    $(document).ready(function(){

        app.init();
        
    });  

})(jQuery);
