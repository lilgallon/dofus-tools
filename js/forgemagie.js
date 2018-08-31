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

    // Sidebar toggler
    addSideBarTrigger($(".hamburger"))
});
