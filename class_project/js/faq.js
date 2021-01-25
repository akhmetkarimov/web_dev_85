$('.faq_item').click(function(){
    $(this).find('.faq_answer').slideToggle()
    $(this).find('.faq_icon').toggleClass('active')
})