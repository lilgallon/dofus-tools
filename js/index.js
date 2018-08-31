/**
 * This file contains the scripts needed to make index.html work.
 * Scripts needed (in order) :
 * - sidebar.js
 */

$(document).ready(function() {
    // Sidebar toggler
    addSideBarTrigger($(".hamburger"))

    // Spoiler
    $('.spoiler-text').hide();
    $('.spoiler-toggle').click(function(){
        $(this).next().animate({height: 'toggle'});
        if($(this).html() == '<i class="fas fa-minus"></i> Hide changelog'){
            $(this).html('<i class="fas fa-plus"></i> Show changelog');
        }else{
            $(this).html('<i class="fas fa-minus"></i> Hide changelog');
        }
    });
});
