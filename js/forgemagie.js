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
        updateButtonPui();
        updateInputImage($(this));
    });

    $("#rune-added").change(function(){
        updateButtonPui();
        updateInputImage($(this));
    });

    $("#calculate-pui").on("click", function(){
        if($(this).hasClass("btn-primary")){
            var rune_removed_pui = findPui($("#rune-removed").val());
            var rune_added_pui = findPui($("#rune-added").val());
            var diff = rune_removed_pui - rune_added_pui;
            $("#pui-value").html("<span>" + rune_removed_pui + " - " + rune_added_pui + " = </span>" + diff);
        }
    })

});

function updateButtonPui(){
    if($("#rune-added").hasClass("is-valid") && $("#rune-removed").hasClass("is-valid")){
        ($("#calculate-pui")).addClass("btn-primary");
    }else{
        ($("#calculate-pui")).removeClass("btn-primary");
    }
}

/**
 * It finds the pui of the rune.
 * @param {*} rune_name rune name.
 */
function findPui(rune_name){
    for(var i=0; i < runes.length; i ++){
        rune = runes[i];
        if(rune.label == rune_name){
            return rune.weight;
        }
    }
    return 0;
}

function findIcon(rune_name){
    for(var i=0; i < runes.length; i ++){
        var rune = runes[i];
        if(rune.label == rune_name){
            return rune.icon;
        }
    }
    return "";
}

function updateInputImage(container){
    var rune = container.val();
    icon = findIcon(rune);

    container.css("padding-left", "4px");
    container.css("background-image", "");
    if(icon != ""){
        container.css("background-image", "url('" + icon + "')");
        container.css("padding-left", "40px");
    }
}