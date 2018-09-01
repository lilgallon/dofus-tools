/**
 * This file contains the scripts needed to make forgemagie.html work.
 * Scripts needed (in order) :
 * - runes.js
 * - runecomplete.js
 * - sidebar.js
 */

$(document).ready(function() {

    // Rune auto complete list
    createRuneCompleteWidget();
    attachRuneCompleteWidget($("#rune-removed"));
    attachRuneCompleteWidget($("#rune-added"));
    attachRuneCompleteWidget($("#runes-to-add"));
    attachRuneCompleteWidget($("#rune-to-remove"));

    // Sidebar toggler
    addSideBarTrigger($(".hamburger"))

    // "Rune qui a sauté"
    $("#rune-removed").change(function(){
        updateButtonPui()
    });

    $("#rune-added").change(function(){
        updateButtonPui()
    });

});


function updateButtonPui(){
    if($("#rune-added").hasClass("is-valid") && $("#rune-removed").hasClass("is-valid")){
        ($("#calculate-pui")).addClass("btn-primary");
    }else{
        ($("#calculate-pui")).removeClass("btn-primary");
    }
}
