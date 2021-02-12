/**
 * This file contains the scripts needed to make forgemagie.html work.
 * Scripts needed (in order) :
 * - runes.js
 * - runecomplete.js
 */

var puit = 0;
$(document).ready(function() {

    // Rune auto complete list
    createRuneCompleteWidget();
    attachRuneCompleteWidget($("#rune-removed"));
    attachRuneCompleteWidget($("#rune-added"));
    attachRuneCompleteWidget($("#runes-to-add"));
    attachRuneCompleteWidget($("#rune-to-remove"));


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
            var rune_removed = $("#rune-removed").val();
            var rune_added = $("#rune-added").val();

            var rune_removed_puit = findPuit(rune_removed);
            var rune_added_puit = findPuit(rune_added);
            puit = rune_removed_puit - rune_added_puit;
            $("#puit-value").html("<span>" + rune_removed_puit + " - " + rune_added_puit + " = </span>" + puit);
            
            var rune_removed_icon = findIcon($("#rune-removed").val());
            var rune_added_icon = findIcon($("#rune-added").val());

            var currentHistory = $("#history").html();
            $("#history").html(
                `
                <div class="card mb-3" style="margin-bottom: 5px !important;">
                    <div class="row g-0">
                        <div class="col-md-1" style="margin-top: 5px;">
                            <img src="${rune_removed_icon}" width="40px">
                        </div>
                        <div class="col-md-1" style="margin-top: 5px;">
                            <img src="${rune_added_icon}" width="40px">
                        </div>
                        <div class="col-md-5" style="margin-left: 10px; padding-right: 0 !important;">
                            ${puit} puit généré
                            <p class="card-text">
                                <small class="text-muted">
                                    à ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </small>
                            </p>
                        </div>
                        <div class="col-lg-4" style="margin-top: 13px; text-align: right;">
                            Total: <b>${puit}</b>
                        </div>
                    </div>
                </div>
                ` + currentHistory
            );
        }
    })


    // Puit counter
    $("#minus-btn").on("click", function(){
        if(puit > 0){
            puit --;
            $("#puit-value").html(puit);

            var currentHistory = $("#history").html();
            $("#history").html(
                `
                <div class="card mb-3" style="margin-bottom: 5px !important;">
                    <div class="row g-0">
                        <div class="col-md-7" style="margin-left: 10px; padding-right: 0 !important;">
                            Retiré 1 puit
                            <p class="card-text">
                                <small class="text-muted">
                                    à ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </small>
                            </p>
                        </div>
                        <div class="col-md-4" style="margin-top: 13px; text-align: right;">
                            Total: <b>${puit}</b>
                        </div>
                    </div>
                </div>
                ` + currentHistory
            );
        }
    })

    $("#plus-btn").on("click", function(){
        puit ++;
        $("#puit-value").html(puit);

        var currentHistory = $("#history").html();
        $("#history").html(
            `
            <div class="card mb-3" style="margin-bottom: 5px !important;">
                <div class="row g-0">
                    <div class="col-md-7" style="margin-left: 10px; padding-right: 0 !important;">
                        Ajouté 1 puit
                        <p class="card-text">
                            <small class="text-muted">
                                à ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </small>
                        </p>
                    </div>
                    <div class="col-md-4" style="margin-top: 13px; text-align: right;">
                        Total: <b>${puit}</b>
                    </div>
                </div>
            </div>
            ` + currentHistory
        );
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

            // Update puit
            var old_puit = puit;
            var rune_puit = findPuit(rune_name);
            puit -= rune_puit;
            $("#puit-value").html("<span>" + old_puit + " - " + rune_puit + " = </span>" + puit);

            $("#last-rune-removed-name").html(rune_name + " (" + rune_puit + ")");
            $("#last-rune-removed-image").attr("src", findIcon(rune_name));

            var currentHistory = $("#history").html();
            $("#history").html(
                `
                <div class="card mb-3" style="margin-bottom: 5px !important;">
                    <div class="row g-0">
                        <div class="col-md-1" style="margin-top: 5px;">
                            <img src="${findIcon(rune_name)}" width="40px">
                        </div>
                        <div class="col-md-6" style="margin-left: 10px; padding-right: 0 !important;">
                            ${rune_puit} puit retiré
                            <p class="card-text">
                                <small class="text-muted">
                                    à ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (${rune_name})
                                </small>
                            </p>
                        </div>
                        <div class="col-md-4" style="margin-top: 13px; text-align: right;">
                            Total: <b>${puit}</b>
                        </div>
                    </div>
                </div>
                ` + currentHistory
            );
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