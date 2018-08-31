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
    attachRuneCompleteWidget($("#rune-searching"), "#container-rune-searching");

    // Sidebar toggler
    addSideBarTrigger($(".hamburger"))
});
