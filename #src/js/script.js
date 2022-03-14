
$(document).ready(function () {


   // Header Scroll

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("scroll");
        } else {
        $(".header").removeClass("scroll");
        }
    });

    if ($(window).scrollTop() > 50) {
        $(".header").addClass("scroll");
    }


    // HUMBURGER

    $('.humburger').click(function(event) {

        let showMenu = false;
    
        if(!showMenu) {
            $('.humburger').toggleClass('close');
            $('.header__menu').toggleClass('show');
            $('body, html').toggleClass('lock');
            showMenu = true;
        } else {
            $('.humburger').removeClass('close');
            $('.header__menu').removeClass('show');
            $('body, html').removeClass('lock'); 
            showMenu = false;
        }
    });
    


    // DROPDOWN

    $(".dropdown").click(function () {
        $('.dropdown > .dropdown__content').not($(this).children(".dropdown__content")).hide();
        $(this).children(".dropdown__content").toggle();
    });

    // MODALS

    const openModalButtons = $('[data-modal-target]'),
        closeModalButtons = $('[data-close-button]'),
        overlay = $('#overlay');
    
        openModalButtons.each(function(){
            $(this).on('click', function(){
            const modal = $(this).data('modalTarget')
            openModal(modal)
            $('body, html').toggleClass('lock'); 
        })
    })
    
    closeModalButtons.each(function(){
        $(this).on('click', function(){
            const modal = $(this).closest('.modal')
            closeModal(modal)
            $('body, html').toggleClass('lock'); 
        })
    })
    
    overlay.on('click', function(){
        const modals = $('.modal.active');
        modals.each(function(){
            closeModal(this)
            $('body, html').toggleClass('lock'); 
        })
    })
    
    function openModal(modal) {
        if(modal == null) {
            return
        }
        $(modal).addClass('active')
        overlay.addClass('active')
    }
    
    function closeModal(modal) {
        if(modal == null) {
            return
        }
        $(modal).removeClass('active')
        overlay.removeClass('active')
    }

});
