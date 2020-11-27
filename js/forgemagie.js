/**
 * This file contains the scripts needed to make forgemagie.html work.
 * Scripts needed (in order) :
 * - runes.js
 * - runecomplete.js
 * - sidebar.js
 */

var puit = 0;
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
        updateButtonPuit();
        updateInputImage($(this));
    });

    $("#rune-added").change(function(){
        updateButtonPuit();
        updateInputImage($(this));
    });

    $("#calculate-puit").on("click", function(){
        if($(this).hasClass("btn-primary")){
            var rune_removed_puit = findPuit($("#rune-removed").val());
            var rune_added_puit = findPuit($("#rune-added").val());
            puit = rune_removed_puit - rune_added_puit;
            $("#puit-value").html("<span>" + rune_removed_puit + " - " + rune_added_puit + " = </span>" + puit);
        }
    })


    // Puit counter
    $("#minus-btn").on("click", function(){
        if(puit > 0){
            puit --;
            $("#puit-value").html(puit);
        }
    })

    $("#plus-btn").on("click", function(){
        puit ++;
        $("#puit-value").html(puit);
    })

    // "Retirer une rune au puit"
    $("#rune-to-remove").change(function(){
        updateInputImage($(this));
        if($(this).hasClass("is-valid")){
            $("#substract-puit").addClass("btn-primary");
        }else{
            $("#substract-puit").removeClass("btn-primary");
        }
    })

    $("#substract-puit").on("click", function(){
        if($(this).hasClass("btn-primary")){
            // Update last rune removed
            var rune_name = $("#rune-to-remove").val();
            $("#last-rune-removed-name").html(rune_name);
            $("#last-rune-removed-image").attr("src", findIcon(rune_name));

            // Update puit
            var old_puit = puit;
            var rune_puit = findPuit(rune_name);
            puit -= rune_puit;
            $("#puit-value").html("<span>" + old_puit + " - " + rune_puit + " = </span>" + puit);
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

            var rune_puit = findPuit(rune_name);
            var number = Math.floor(puit / rune_puit);
            $('#rune-to-add-number').html(number + "x");

            if(puit%rune_puit != 0){
                $("#rune-to-add-comments").html("Il restera " + puit%rune_puit + " de puit.");
            }else{
                $("#rune-to-add-comments").html("");
            }
        }
    })

});

function updateButtonPuit(){
    if($("#rune-added").hasClass("is-valid") && $("#rune-removed").hasClass("is-valid")){
        ($("#calculate-puit")).addClass("btn-primary");
    }else{
        ($("#calculate-puit")).removeClass("btn-primary");
    }
}

/**
 * It finds the puit of the rune.
 * @param {string} rune_name rune name.
 */
function findPuit(rune_name){
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