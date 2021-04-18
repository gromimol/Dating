$(document).ready(function () {
    // fake select
    $('html').on('click', function () {
        $('.select').removeClass('is-open');
        $('.user-authorized').removeClass('active')
    })
    $('.select').on('click','.placeholder',function(e){
        e.stopPropagation();
        let parent = $(this).closest('.select');
        if ( ! parent.hasClass('is-open')){
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        }else{
            parent.removeClass('is-open');
        }
    }).on('click','ul>li',function(){
        let parent = $(this).closest('.select');
        let src = $(this).find('img').attr('src')
        parent.removeClass('is-open').find('.placeholder').find('img').attr('src', src );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
    });

    // search in header
    $('.search-btn').on('click', function () {
        let block = $('.header__center')
        let mobileBlock = $('.search-top--mobile')
        $('body').removeClass('open-menu');
        block.toggleClass('open-search');
        mobileBlock.toggleClass('open-search');
        if (block.hasClass('open-search')) {
            $('.search-btn span').removeClass('icon-search').addClass('icon-close')
        } else {
            $('.search-btn span').removeClass('icon-close').addClass('icon-search')
        }

        if (mobileBlock.hasClass('open-search')) {
            $('.search-btn span').removeClass('icon-search').addClass('icon-close')
        } else {
            $('.search-btn span').removeClass('icon-close').addClass('icon-search')
        }
    })

    // mobile menu
    $('.mobile-btn').on('click', function () {
        $('body').toggleClass('open-menu');
        $('.search-top--mobile').removeClass('open-search');
        $('.search-btn span').removeClass('icon-close').addClass('icon-search')
    })

    $('.menu a').on('click', function (e){
        e.preventDefault();
        $(this).parent().toggleClass('open-submenu')
    })

    // user-authorized menu
    $('.user-authorized').on('click', function (e){
        e.stopPropagation();
    })
    $('.user-authorized__top').on('click', function () {
        $('body').removeClass('open-menu')
        $('.search-top--mobile').removeClass('open-search')
        $('.user-authorized').toggleClass('active')
        $('.search-btn span').removeClass('icon-close').addClass('icon-search')
    })

    // close block
    $('.js--close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.js--close-container').slideUp('fast');
    })

    // slider
    $('.models-slider').slick({
        prevArrow: '<span class="prev-arrow icon-arrow_left"></span>',
        nextArrow: '<span class="next-arrow icon-arrow_right"></span>',
        variableWidth: true,
    })

    $('.models-circle-slider').slick({
        variableWidth: true,
        prevArrow: '<span class="prev-arrow icon-arrow_left"></span>',
        nextArrow: '<span class="next-arrow icon-arrow_right"></span>',
    })

    $('.news-slider').slick({
        prevArrow: '<span class="prev-arrow icon-arrow_left"></span>',
        nextArrow: '<span class="next-arrow icon-arrow_right"></span>',
        variableWidth: true,
    })

    $('.unslick').slick('unslick')

    // tab
    $('.tab-list li').on('click', function () {
       let index = $(this).index()
        $(this).addClass('active').siblings('li').removeClass('active')
        $(this).closest('.tabs-wrapper').children('.tab-content').removeClass('active')
        $(this).closest('.tabs-wrapper').children('.tab-content').eq(index).addClass('active')
    })

    // input file
    $('.file input:file').change(
        function(e){
            $(this).parent().find('.file-name').text(e.target.files[0].name)
    });

    // delete label
    $('.label .delete').on('click', function () {
        $(this).parent().remove();
    })

    // accordeon
    $('.js--accordeon-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.js--accordeon-content').slideToggle();
    })

});
