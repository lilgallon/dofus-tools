/**
 * This file contains the code of the custom JQuery UI autocomplete widget. It is used to show
 * a list of runes.
 */

 /**
  * It creates the custom widget to display the autocomplete list for runes. The widgets inherits from
  * the AutoComplete widget from JQuery UI.
  */
function createRuneCompleteWidget(){
    // It creates a new widget that inherits of ui.autocomplete that is called catcomplet
    $.widget("custom.runecomplete", $.ui.autocomplete, {
        _create: function(){
            this._super();
            this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        // It changes the way the menu is generated to add categories
        _renderMenu: function( ul, items ) {
            var self = this, currentCategory = "";
            $.each( items, function( index, item ) {
                var li;
                if ( item.category != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.category;
                }
                li = self._renderItemData( ul, item );
                if (item.category) {
                    li.attr( "aria-label", item.category + " : " + item.label );
                }
            });
        },
        // It changes the way items are written to add the icon
        _renderItemData(ul, item){
            var result = this._super(ul, item);
            result.html("<img src=\"" + item.icon + "\"></img>" + item.label + " (" + item.weight + " puit)");
            return result;
        }
    });
}

/**
 * It adds the rune autocomplete widget to the specified {container}. There should be a <div> container next to the input one.
 * Position fix : https://stackoverflow.com/questions/28285813/style-jquery-autocomplete-in-a-bootstrap-input-field
 * 
 * Example :
 * <div class="form-group">
 *      <input id="rune-searching" class="form-control" placeholder="Sélectionnez la rune">
 *      <div></div>
 * </div>
 * 
 * In this example, we need to call attachRuneCompleteWidget($("#rune-searching")).
 * 
 * @param {container} container the input,
 */
var hasFocused = false;
var counter = 1;
function attachRuneCompleteWidget(container){
    neighboor_id = "widget-attachment-" + counter;
    counter ++;

    container.next().attr("id", neighboor_id)
    container.next().css("display", "block")
    container.next().css("position", "relative")

    neighboor_id = "#" + neighboor_id

    container.runecomplete({
        delay: 0,
        source: runes,
        appendTo: neighboor_id,
        minLength: 0,
        autoFocus: true,
        change: function(event, ui){
            // Here goes the validation code
            if(ui.item == null){
                // It means that the item wasn't selected from the menu
                // We will autocorrect the input
                autocorrectContainer(container);
            }else{
                // It means that the item was selected from the menu, so it's okay
                container.addClass("is-valid")
                container.removeClass("is-invalid")
            }
            container.change(); // force change event to be called
        },
        focus: function(event, ui){
            hasFocused = true;
        }
    });

    container.on("click", function(){
        container.runecomplete("search", "");
    })

    container.keydown(function(event){
        if(event.keyCode == 13) {
            // Since autoFocus: True doesn't work (wtf ?), we need to do the auto focus here
            // If no element is focused, then we will take the first item
            if(!hasFocused){
                var rune = container.runecomplete("widget").find("li").next().html();
                rune = rune.split(">")[1];
                rune = rune.split("(")[0];
                rune = rune.substring(0, rune.length - 1);
                container.val(rune);
                container.change(); // force change event to be called
                container.runecomplete("close");
            }

            hasFocused = false;
        }
    });

    container.on('input', function() { 
        if(container.val() == ""){
            container.removeClass("is-valid");
            container.addClass("is-invalid");
        }
    });
}


function autocorrectContainer(container){
    autocorr = autocorrect(container.val(), 2);

    if(autocorr.success){
        container.addClass("is-valid");
        container.removeClass("is-invalid");
        container.val(autocorr.val);
    }else{
        container.removeClass("is-valid");
        container.addClass("is-invalid");
    }
}


/**
 * It will autocorrect the value if it is close enough to an existing one (according to score).
 * @param {*} value the value to autocorrect,
 * @param {*} max_gap the max gap with an actual value.
 */
function autocorrect(value, max_gap){
    if(value == ""){
        return {
            val : value,
            success : false
        };
    }

    var min_gap_found = 1000;
    var closest_rune = "undefined";

    for(var i=0; i < runes.length ; i++){
        var rune = runes[i];
        var gap = compareStrings(refactoStr(rune.label), refactoStr(value));
        if(gap < min_gap_found){
            min_gap_found = gap;
            closest_rune = rune.label;
        }
    }

    if(min_gap_found <= max_gap){
        return {
            val : closest_rune,
            success : true
        };
    }else{
        return {
            val : value,
            success : false
        };
    }
}

function refactoStr(str){
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');
    // We don't care if it is written "rune" or not since every word of the dic contains "rune" in it
    str = str.replace("rune", "");
    str = str.replace(/é+/g, "e");
    // remove everything that is not a letter from a to z
    str = str.replace(/[^a-z]/g, "")
    return str;
}

/**
 * It compare two strings by returning a number that represent the character difference between these two.
 * The returned value is an absolute one.
 * @param {*} str1
 * @param {*} str2
 */
function compareStrings(str1, str2){
    var str1_occ = getLettersOcc(str1);
    var str2_occ = getLettersOcc(str2);

    diff = 0;
    for(var i=0 ; i < 26; i++){
        diff += Math.abs(str1_occ[i] - str2_occ[i]);
    }

    return diff;
}

/**
 * It retruns an array containing the occurence of each letters from a to z.
 * @param {*} str string to analyse.
 */
function getLettersOcc(str){
    var occ = Array(26).fill(0);
    for(var i=0; i < str.length; i++){
        var char_code = str.charCodeAt(i) - 97;
        if(char_code < 0 || char_code > 26){
            console.log("[getLettersOcc/Warning] character " + str.charAt(i) + " is to recognized. It will be ignored");
        }else{
            occ[char_code] ++;
        }
    }
    return occ;
}