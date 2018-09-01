/**
 * This file contains the scripts needed to make forgemagie.html work.
 * Scripts needed (in order) :
 * - runes.js
 * - runecomplete.js
 * - sidebar.js
 */

var pui = 0;
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
            pui = rune_removed_pui - rune_added_pui;
            $("#pui-value").html("<span>" + rune_removed_pui + " - " + rune_added_pui + " = </span>" + pui);
        }
    })


    // Pui counter
    $("#minus-btn").on("click", function(){
        if(pui > 0){
            pui --;
            $("#pui-value").html(pui);
        }
    })

    $("#plus-btn").on("click", function(){
        pui ++;
        $("#pui-value").html(pui);
    })

    // "Retirer une rune au pui"
    $("#rune-to-remove").change(function(){
        updateInputImage($(this));
        if($(this).hasClass("is-valid")){
            $("#substract-pui").addClass("btn-primary");
        }else{
            $("#substract-pui").removeClass("btn-primary");
        }
    })

    $("#substract-pui").on("click", function(){
        if($(this).hasClass("btn-primary")){
            // Update last rune removed
            var rune_name = $("#rune-to-remove").val();
            $("#last-rune-removed-name").html(rune_name);
            $("#last-rune-removed-image").attr("src", findIcon(rune_name));

            // Update pui
            var old_pui = pui;
            var rune_pui = findPui(rune_name);
            pui -= rune_pui;
            $("#pui-value").html("<span>" + old_pui + " - " + rune_pui + " = </span>" + pui);
        }
    })

    // "Nombre de runes à passer"
    $("#runes-to-add").change(function(){
        updateInputImage($(this));
        if($(this).hasClass("is-valid")){
            $("#how-many-runes").addClass("btn-primary");
        }else{
            $("#how-many-runes").removeClass("btn-primary");
        }
    })

    $("#how-many-runes").on("click", function(){
        if($(this).hasClass("btn-primary")){
            var rune_name = $("#runes-to-add").val();
            $("#rune-to-add-name").html(rune_name);
            $("#rune-to-add-image").attr("src", findIcon(rune_name));

            var rune_pui = findPui(rune_name);
            var number = Math.floor(pui / rune_pui);
            $('#rune-to-add-number').html(number + "x");

            if(pui%rune_pui != 0){
                $("#rune-to-add-comments").html("Il restera " + pui%rune_pui + " de pui.");
            }else{
                $("#rune-to-add-comments").html("");
            }
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
 * @param {string} rune_name rune name.
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
        container.css("padding-left", "30px");
    }
}