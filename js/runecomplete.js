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
            result.html("<img src=\"" + item.icon + "\"></img>" + item.label + " (" + item.weight + " pui)");
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
        change: function(event, ui){
            // Here goes the validation code
            if(ui.item == null){
                // It means that the item wasn't selected from the menu
                container.removeClass("is-valid")
                container.addClass("is-invalid")
            }else{
                // It means that the item was selected from the menu, so it's okay
                container.addClass("is-valid")
                container.removeClass("is-invalid")
            }
        }
    });
    container.on("click", function(){
        container.runecomplete("search", "");
    })
}