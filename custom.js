$(document).ready(function(){
    $('.menu .short-menu').click(function(){
        $('.menu ul.main').addClass('show-menu');  
        
    });
    $('.search-icon').click(function(){
        $('.search-box-web').toggle();
    });
    /*$(document).mouseup(function (e)
	    {
	      var container = $('.search-box-web');

	      if (!container.is(e.target) // if the target of the click isn't the container...
	          && container.has(e.target).length === 0) // ... nor a descendant of the container
	      {
	          container.fadeOut();
	      }
    });*/
    $('.menu ul.main .close-btn').click(function(){
        $('.menu ul.main li .sub-m').removeClass('plus');
        $('.menu ul.main').removeClass('show-menu');
        $('.menu ul.main .drop-down,.menu ul.main  ul.third-level').removeClass('open-data');
        $('.menu ul.main li .drop-down,.menu ul.main  ul.third-level').slideUp();           
    });
   
    $('.menu ul.main li .sub-m').click(function(){       
        if($(this).next().next().hasClass('open-data')) {
            $(this).removeClass('plus');
            $('.menu ul.main li .drop-down').removeClass('open-data');
            $('.menu ul.main li .drop-down').slideUp();
            $(this).next().next().stop().slideUp();            
        }
        else {
            $('.menu ul.main li .sub-m').removeClass('plus');
            $(this).addClass('plus');
            $(this).next().next().addClass('open-data');
            $('.menu ul.main li .drop-down').stop().slideUp();
            $(this).next().next().stop().slideDown();           
        }
    });
    $('.menu ul.main li .sub-m1').click(function(){ 
        if($(this).next().next().hasClass('open-data')) {
            $(this).removeClass('plus');
            $('.menu ul.main li ul.third-level').removeClass('open-data');
            $('.menu ul.main li ul.third-level').slideUp();
            $(this).next().next().stop().slideUp();            
        }
        else {
            $(this).next().next().addClass('open-data');
            $(this).addClass('plus');
            $('.menu ul.main li ul.third-level').stop().slideUp();
            $(this).next().next().stop().slideDown();           
        }
       
    });
    if( $(this).width() < 640) {
        $('.our-programme-sec.mec-sec-new ul li').click(function(){       
            if($(this).find('.inner').hasClass('active')) {  
                $('.our-programme-sec.mec-sec-new ul li').removeClass('add');          
                $(this).find('.inner').removeClass('active');
                $(this).find('.inner').slideUp();
            }
            else {
                $('.our-programme-sec.mec-sec-new ul li .inner').removeClass('active'); 
                $('.our-programme-sec.mec-sec-new ul li').removeClass('add');
                $(this).addClass('add'); 
                $('.our-programme-sec.mec-sec-new ul li .inner').slideUp();            
                $(this).find('.inner').addClass('active');           
                $(this).find('.inner').slideDown();
            }

        });
    }
    /*
    var allcookies = document.cookie;
    console.log("All Cookies : " + allcookies );
    cookiearray = allcookies.split(';');

    for(var i=0; i<cookiearray.length; i++)
    {
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        console.log ("Key is : " + name + " and Value is : " + value);
     } 

    */

    /* Banner Slider*/
    $("#slider2").responsiveSlides({
        auto: true,
        pager: false,
        nav:true,
        prevText: "&nbsp;",   // String: Text for the "previous" button
        nextText: "&nbsp;", 
        speed: 500,       
    }); 
    $("#slider2-new").responsiveSlides({
        auto: true,
        pager: true,
        nav:true,
        prevText: "&nbsp;",   // String: Text for the "previous" button
        nextText: "&nbsp;", 
        speed: 500,           
    });    
    $('aside.connect-link-new li .image').click(function(){       

        if($(this).parent().parent('li').hasClass('show')){
            $(this).parent().parent('li').removeClass('show');
        }
        else{
            $('aside.connect-link-new li').removeClass('show');        
            $(this).parent().parent('li').addClass('show');
        }
    });
    /*$('header.new-home-sec .bottom-header .menu').slicknav({
        // allowParentLinks: true,
        // duplicate: false,
        //prependTo: 'nav .main-container .wrapper'
        closeOnClick: true
    });*/
   
    $("#owl-example1").owlCarousel({
        navigation:true,
        items:5,
        autoPlay:true,
        pagination:false,
        responsive:true,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: true      
        
    });  
    $("#owl-example2").owlCarousel({
        navigation:true,
        items:2,
        autoPlay:true,
        pagination:false,
        responsive:true,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: true      
        
    });
    $("#owl-example3").owlCarousel({
        navigation:true,
        items:3,
        autoPlay:true,
        pagination:false,
        responsive:true,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: true      
        
    }); 
    $("#owl-example4").owlCarousel({
        navigation:true,
        items:4,
        autoPlay:true,
        pagination:false,
        responsive:true,
         itemsDesktop : [1199,3],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
         //itemsMobile : [479,2],
        pager: true      
        
    }); 
    $("#owl-example41").owlCarousel({
        navigation:true,
        items:4,
        autoPlay:true,
        pagination:false,
        responsive:true,
         itemsDesktop : [1199,3],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
         itemsMobile : [479,2],
        pager: true      
        
    }); 
    
    $("#owl-example5").owlCarousel({
        navigation:true,
        items:2,
        autoPlay:false,
        pagination:false,
        responsive:false,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: true      
        
    });  
    $("#owl-example7").owlCarousel({
        navigation:false,
        items:1,
        autoPlay:true,
        pagination:true,
        responsive:false,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: false      
        
    }); 
    $("#owl-example8").owlCarousel({
        navigation:false,
        items:1,
        autoPlay:true,
        pagination:true,
        responsive:true,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
        // itemsTablet: [768,1],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: true      
        
    }); 
    $("#owl-example6").owlCarousel({
        navigation:true,
        items:5,
        autoPlay:true,
        pagination:false,
        responsive:true,
        // itemsDesktop : [1199,1],
        // itemsDesktopSmall : [980,1],
         itemsTablet: [768,3],
        // itemsTabletSmall: false,
        // itemsMobile : [479,1],
        pager: true      
        
    });  
    $("#trigger").fancybox().trigger('click');
    $('.fancybox').fancybox(); 
    $(".fancybox-iframe").fancybox({
        type: "iframe",
        // other API options
    });
   
    // $(".revealOnScroll:not(.animated)").each(function () {
    //     var $this     = $(this),
    //         offsetTop = $this.offset().top;
      
    //     if (scrolled + win_height_padded > offsetTop) {
    //       if ($this.data('timeout')) {
    //         window.setTimeout(function(){
    //           $this.addClass('animated ' + $this.data('animation'));
    //         }, parseInt($this.data('timeout'),10));
    //       } else {
    //         $this.addClass('animated ' + $this.data('animation'));
    //       }
    //     }
    //   });
    //   // Hidden...
    //   $(".revealOnScroll.animated").each(function (index) {
    //      var $this     = $(this),
    //          offsetTop = $this.offset().top;
    //      if (scrolled + win_height_padded < offsetTop) {
    //        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
    //      }
    //   });
    
    
    /* News */
    
    $("#loadMore_news").show();
    $(".news-events-sec li,.blogs-inner-sec ul li,.featured-positions ul li").slice(0, 8).show();
    var loadnewslen = $("#loadnews").length;
    if(loadnewslen >0)
    {
        $("#loadnews").hide();
    }
    
    $("#loadMore_news").on('click', function (e) {
        e.preventDefault();
        $(".news-events-sec li:hidden,.blogs-inner-sec ul li:hidden,.featured-positions ul li:hidden").slice(0, 8).slideDown();
        if ($(".news-events-sec li:hidden,.blogs-inner-sec ul li:hidden,.featured-positions ul li:hidden").length == 0) {
            $("#loadMore_news").fadeOut('slow');
        }
        
    });

    $('.faq_sec .container .naccs .grid .left_tabs .sidebar-icon , .faq_sec .container .naccs .grid .left_tabs .menu div').click(function(){
        $('.faq_sec .container .naccs .grid .left_tabs').toggleClass('show');       

    });
   

    /* Blogs */
    // $('section').bind('mousewheel', function(e) {
    //     if(e.originalEvent.wheelDelta / 120 > 0) {
    //        $('.cookies-sec').addClass('fadeout');
    //     } else {
    //         $('.cookies-sec').removeClass('fadeout');
    //     }
    // });
    $('body').bind('wheel', function(e){
        if(e.originalEvent.deltaY > 0) {
            $('.cookies-sec').addClass('fadeout');
        } else{
            $('.cookies-sec').removeClass('fadeout');
        }
    });

    

    /* Custom Scrollbar */
    $(".overflow-content,.desccription-mucstomscroll,.mec-sec-new .inner ul,.testimonial .full .text span,.text .text-scroll,.life-at-mec-new-page .text-scroll").mCustomScrollbar({
        axis:"y",
        theme:"dark-thin",
        autoExpandScrollbar:true,
        advanced:{autoExpandHorizontalScroll:true}
    });
    //Click event to scroll to top      
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    /* Accordion*/
    $('.accordion > li:eq(0) a.accord').addClass('active').next().slideDown();

    $('.accordion a.accord').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion-inner-text');

        $(this).closest('.accordion').find('.accordion-inner-text').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
    /*FB widget */
    $('.social-widget .widget').click(function(){    
    if($(this).hasClass('show')){
        $(this).removeClass('show');
    }
    else{
        $('.social-widget .widget').removeClass('show')
        $(this).addClass('show')
    }
    });

    $('.video-gallery-sec ul.video-gal li a').click(function(e){
        var tab_id = $(this).attr('href');
        //$('ul.tabs li').removeClass('current');
        e.preventDefault();
        $('.video-gallery-sec ul li a').removeClass('active');
      
        $(this).addClass('active');
        $('.video-gallery-sec .video').removeClass('active');
        $('#'+tab_id).addClass('active');
    });
    $('ul.video-gal li a').click(function(){
        $('.yvideo').each(function(){
          $(this).stopVideo();
        });
    });

    /* popup js*/
    $('.adm_form').click(function(){
        $('body').addClass('bg_freeze');
        $('.acadmic_enq_popup ').css("display","block");
    });
    $('.bro_form').click(function(){
        $('body').addClass('bg_freeze');
        $('.download_bro_popup ').css("display","block");
    });

    $('.ph_drp_menu').click(function(){
        $('.cont_code').slideToggle();
    });

    // change text of dropdown
    $(".cont_code li > span").on("click", function(){
        var tabText = $(this).text();
        $('button.ph_drp_menu').text(tabText);
        $('.cont_code').slideToggle();
    });

    $('.close_btn').click(function(){
        $('.acadmic_enq_popup').css("display","none");
        $('.download_bro_popup ').css("display","none");
        $('body').removeClass('bg_freeze');
    });

    /*funded project dropdown */
    $('.project_drpdwn_btn > span').click(function(){
        $('.project_drpdwn').slideToggle(600);
    });
    // change text of dropdown
    $('.project_drpdwn li').on("click",function(){
        var listText=$(this).text();
        $('.project_drpdwn_btn > span').text(listText);
        $('.project_drpdwn').slideToggle(600);
    });

    /* Make Active the Parent Class */


   
    /* Menu Level 2 */

    var currobj = $("li.parentlevel .drop-down ul li li.active");
    var activecls = currobj.length;
    console.log("second level :"+activecls); 
    if(activecls > 0)
    {
        var parentobj = currobj.parent('ul').parent('li');
        var parent_text = parentobj.find('a:first').html();
        var parent_url = parentobj.find('a:first').attr('href');
        lipath2added1 = '<li><a href="'+parent_url+'">'+parent_text+'</a></li>';

        console.log(lipath2added1);

        var parentobj2 = currobj.parent().parent().parent().parent().parent('li');
        parentobj2.addClass('active');
        var parent_text = parentobj2.find('a:first').html();
        var parent_url = parentobj2.find('a:first').attr('href');
        lipath2added2 = '<li><a href="'+parent_url+'">'+parent_text+'</a></li>';

        console.log(lipath2added2);

        lipath2added = lipath2added2+lipath2added1;

        console.log(lipath2added);

        if(lipath2added)
       {
         $(lipath2added).insertAfter( "#breadcrumhome" );
       }
    }
    else
    {
         /* Menu Level1 */
        var lipath2added='';
        
        var currobj = $("li.parentlevel .drop-down ul li.active");
        var activecls = currobj.length;
        console.log("first level :"+activecls); 

        if(activecls > 0)
        {
            var parentobj = currobj.parent().parent().parent('li');
            parentobj.addClass('active');
            var parent_text = parentobj.find('a:first').html();
            var parent_url = parentobj.find('a:first').attr('href');
            lipath2added = '<li><a href="'+parent_url+'">'+parent_text+'</a></li>';

        if(lipath2added)
        {
            $(lipath2added).insertAfter( "#breadcrumhome" );
        }
        }
    }

   
    /*faq tabs js*/
    $(document).on("click", " .faqus div", function() {
        var numberIndex = $(this).index();
    
        if (!$(this).is("active")) {
            $(" .faqus div").removeClass("active");
            $(".naccs ul li").removeClass("active");
    
            $(this).addClass("active overflow-content mCustomScrollbar");
            $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active ");
    
            var listItemHeight = $(".naccs ul")
                .find("li:eq(" + numberIndex + ")")
                .innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
        }
    });
    /* news section fade effects*/
    $(function() {
        $("#changethewords").changeWords({
            time: 2000,
            animate: "fadeIn",
            selector: "span"
        });
        });

});
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("header").addClass("small")
    } else {
        $("header").removeClass("small")
        
    }
});
/*$(document).ready(function(){
    $('.slicknav_nav > ul > li').each(function(){
        var ss = $(this);
        var aa = $(this).find('a');
        var dd = $(ss).find('.drop-down > ul')
        $(ss).find(dd).detach().appendTo(ss + ' a');
        $(ss).find('.drop-down').remove();
       

    })
    // $('.slicknav_nav').find('.drop-down').remove();
});*/


