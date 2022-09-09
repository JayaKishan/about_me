$( document ).ready(function() {
    console.log( "ready!" );
    $('div#about_me').removeClass('hide')
});

$('a.tabs').click(function(){
    var ids=$(this).attr('id');
    $('div.righty').addClass('hide');
    $('div#'+ids).removeClass('hide');
});

$('span.read_more').click(function(){
    $('section.underlay').removeClass('hide');
    $('section#blog_sec').removeClass('hide');
    $('h2.modal__header__title__text').text($(this).attr('title'));
});

$('article.close_btn').click(function(){
    $('section.underlay').addClass('hide');
    $('section.modal--blog').addClass('hide');
});