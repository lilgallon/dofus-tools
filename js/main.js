var runes = [
    { label: "Rune Age", category: "Runes de type simple", icon: "images/runes/Rune Age (1).png", weight: "1"},
    { label: "Rune Cha", category: "Runes de type simple", icon: "images/runes/Rune Cha (1).png", weight: "1"},
    { label: "Rune Cri", category: "Runes de type simple", icon: "images/runes/Rune Cri (10).png", weight: "10"},
    { label: "Rune de chasse", category: "Runes de type simple", icon: "images/runes/Rune de chasse (-1).png", weight: "-1"},
    { label: "Rune Do", category: "Runes de type simple", icon: "images/runes/Rune Do (20).png", weight: "20"},
    { label: "Rune Do Air", category: "Runes de type simple", icon: "images/runes/Rune Do Air (5).png", weight: "5"},
    { label: "Rune Do Cri", category: "Runes de type simple", icon: "images/runes/Rune Do Cri (5).png", weight: "5"},
    { label: "Rune Do Eau", category: "Runes de type simple", icon: "images/runes/Rune Do Eau (5).png", weight: "5"},
    { label: "Rune Do Feu", category: "Runes de type simple", icon: "images/runes/Rune Do Feu (5).png", weight: "5"},
    { label: "Rune Do Neutre", category: "Runes de type simple", icon: "images/runes/Rune Do Neutre (5).png", weight: "5"},
    { label: "Rune Do Per Ar", category: "Runes de type simple", icon: "images/runes/Rune Do Per Ar (15).png", weight: "15"},
    { label: "Rune Do Per Di", category: "Runes de type simple", icon: "images/runes/Rune Do Per Di (15).png", weight: "15"},
    { label: "Rune Do Per Mé", category: "Runes de type simple", icon: "images/runes/Rune Do Per Mé (15).png", weight: "15"},
    { label: "Rune Do Per So", category: "Runes de type simple", icon: "images/runes/Rune Do Per So (15).png", weight: "15"},
    { label: "Rune Do Pou", category: "Runes de type simple", icon: "images/runes/Rune Do Pou (5).png", weight: "5"},
    { label: "Rune Do Ren", category: "Runes de type simple", icon: "images/runes/Rune Do Ren (10).png", weight: "10"},
    { label: "Rune Do Terre", category: "Runes de type simple", icon: "images/runes/Rune Do Terre (5).png", weight: "5"},
    { label: "Rune Fo", category: "Runes de type simple", icon: "images/runes/Rune Fo (1).png", weight: "1"},
    { label: "Rune Fui", category: "Runes de type simple", icon: "images/runes/Rune Fui (4).png", weight: "4"},
    { label: "Rune Ga Pa", category: "Runes de type simple", icon: "images/runes/Rune Ga Pa (100).png", weight: "100"},
    { label: "Rune Ga Pme", category: "Runes de type simple", icon: "images/runes/Rune Ga Pme (90).png", weight: "90"},
    { label: "Rune Ine", category: "Runes de type simple", icon: "images/runes/Rune Ine (1).png", weight: "1"},
    { label: "Rune Ini", category: "Runes de type simple", icon: "images/runes/Rune Ini (1).png", weight: "1"},
    { label: "Rune Invo", category: "Runes de type simple", icon: "images/runes/Rune Invo (30).png", weight: "30"},
    { label: "Rune Pa Age", category: "Runes de type Pa", icon: "images/runes/Rune Pa Age (3).png", weight: "3"},
    { label: "Rune Pa Cha", category: "Runes de type Pa", icon: "images/runes/Rune Pa Cha (3).png", weight: "3"},
    { label: "Rune Pa Do Air", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Air (15).png", weight: "15"},
    { label: "Rune Pa Do Cri", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Cri (15).png", weight: "15"},
    { label: "Rune Pa Do Eau", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Eau (15).png", weight: "15"},
    { label: "Rune Pa Do Feu", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Feu (15).png", weight: "15"},
    { label: "Rune Pa Do Neutre", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Neutre (15).png", weight: "15"},
    { label: "Rune Pa Do Pou", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Pou (15).png", weight: "15"},
    { label: "Rune Pa Do Terre", category: "Runes de type Pa", icon: "images/runes/Rune Pa Do Terre (15).png", weight: "15"},
    { label: "Rune Pa Fo", category: "Runes de type Pa", icon: "images/runes/Rune Pa Fo (3).png", weight: "3"},
    { label: "Rune Pa Fui", category: "Runes de type Pa", icon: "images/runes/Rune Pa Fui (12).png", weight: "12"},
    { label: "Rune Pa Ine", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ine (3).png", weight: "3"},
    { label: "Rune Pa Ini", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ini (3).png", weight: "3"},
    { label: "Rune Pa Pi", category: "Runes de type Pa", icon: "images/runes/Rune Pa Pi (15).png", weight: "15"},
    { label: "Rune Pa Pi Per", category: "Runes de type Pa", icon: "images/runes/Rune Pa Pi Per (6).png", weight: "6"},
    { label: "Rune Pa Pod", category: "Runes de type Pa", icon: "images/runes/Rune Pa Pod (7.5).png", weight: "7.5"},
    { label: "Rune Pa Prospe", category: "Runes de type Pa", icon: "images/runes/Rune Pa Prospe (9).png", weight: "9"},
    { label: "Rune Pa Pui", category: "Runes de type Pa", icon: "images/runes/Rune Pa Pui (6).png", weight: "6"},
    { label: "Rune Pa Ret Pa", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ret Pa (21).png", weight: "21"},
    { label: "Rune Pa Ret Pme", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ret Pme (21).png", weight: "21"},
    { label: "Rune Pa Ré Air", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Air (6).png", weight: "6"},
    { label: "Rune Pa Ré Cri", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Cri (6).png", weight: "6"},
    { label: "Rune Pa Ré Eau", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Eau (6).png", weight: "6"},
    { label: "Rune Pa Ré Feu", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Feu (6).png", weight: "6"},
    { label: "Rune Pa Ré Neutre", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Neutre (6).png", weight: "6"},
    { label: "Rune Pa Ré Pa", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Pa (21).png", weight: "21"},
    { label: "Rune Pa Ré Pme", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Pme (21).png", weight: "21"},
    { label: "Rune Pa Ré Pou", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Pou (6).png", weight: "6"},
    { label: "Rune Pa Ré Terre", category: "Runes de type Pa", icon: "images/runes/Rune Pa Ré Terre (6).png", weight: "6"},
    { label: "Rune Pa Sa", category: "Runes de type Pa", icon: "images/runes/Rune Pa Sa (9).png", weight: "9"},
    { label: "Rune Pa So", category: "Runes de type Pa", icon: "images/runes/Rune Pa So (30).png", weight: "30"},
    { label: "Rune Pa Tac", category: "Runes de type Pa", icon: "images/runes/Rune Pa Tac (12).png", weight: "12"},
    { label: "Rune Pa Vi", category: "Runes de type Pa", icon: "images/runes/Rune Pa Vi (3).png", weight: "3"},
    { label: "Rune Pi", category: "Runes de type simple", icon: "images/runes/Rune Pi (5).png", weight: "5"},
    { label: "Rune Pi Per", category: "Runes de type simple", icon: "images/runes/Rune Pi Per (2).png", weight: "2"},
    { label: "Rune Po", category: "Runes de type simple", icon: "images/runes/Rune Po (51).png", weight: "51"},
    { label: "Rune Pod", category: "Runes de type simple", icon: "images/runes/Rune Pod (2.5).png", weight: "2.5"},
    { label: "Rune Prospe", category: "Runes de type simple", icon: "images/runes/Rune Prospe (3).png", weight: "3"},
    { label: "Rune Pui", category: "Runes de type simple", icon: "images/runes/Rune Pui (2).png", weight: "2"},
    { label: "Rune Ra Age", category: "Runes de type Ra", icon: "images/runes/Rune Ra Age (10).png", weight: "10"},
    { label: "Rune Ra Cha", category: "Runes de type Ra", icon: "images/runes/Rune Ra Cha (10).png", weight: "10"},
    { label: "Rune Ra Fo", category: "Runes de type Ra", icon: "images/runes/Rune Ra Fo (10).png", weight: "10"},
    { label: "Rune Ra Ine", category: "Runes de type Ra", icon: "images/runes/Rune Ra Ine (10).png", weight: "10"},
    { label: "Rune Ra Ini", category: "Runes de type Ra", icon: "images/runes/Rune Ra Ini (10).png", weight: "10"},
    { label: "Rune Ra Pi Per", category: "Runes de type Ra", icon: "images/runes/Rune Ra Pi Per (20).png", weight: "20"},
    { label: "Rune Ra Pod", category: "Runes de type Ra", icon: "images/runes/Rune Ra Pod (25.0).png", weight: "25.0"},
    { label: "Rune Ra Pui", category: "Runes de type Ra", icon: "images/runes/Rune Ra Pui (20).png", weight: "20"},
    { label: "Rune Ra Sa", category: "Runes de type Ra", icon: "images/runes/Rune Ra Sa (30).png", weight: "30"},
    { label: "Rune Ra Vi", category: "Runes de type Ra", icon: "images/runes/Rune Ra Vi (10).png", weight: "10"},
    { label: "Rune Ret Pa", category: "Runes de type simple", icon: "images/runes/Rune Ret Pa (7).png", weight: "7"},
    { label: "Rune Ret Pme", category: "Runes de type simple", icon: "images/runes/Rune Ret Pme (7).png", weight: "7"},
    { label: "Rune Ré Air", category: "Runes de type simple", icon: "images/runes/Rune Ré Air (2).png", weight: "2"},
    { label: "Rune Ré Cri", category: "Runes de type simple", icon: "images/runes/Rune Ré Cri (2).png", weight: "2"},
    { label: "Rune Ré Eau", category: "Runes de type simple", icon: "images/runes/Rune Ré Eau (2).png", weight: "2"},
    { label: "Rune Ré Feu", category: "Runes de type simple", icon: "images/runes/Rune Ré Feu (2).png", weight: "2"},
    { label: "Rune Ré Neutre", category: "Runes de type simple", icon: "images/runes/Rune Ré Neutre (2).png", weight: "2"},
    { label: "Rune Ré Pa", category: "Runes de type simple", icon: "images/runes/Rune Ré Pa (7).png", weight: "7"},
    { label: "Rune Ré Per Air", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Air (6).png", weight: "6"},
    { label: "Rune Ré Per Di", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Di (15).png", weight: "15"},
    { label: "Rune Ré Per Eau", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Eau (6).png", weight: "6"},
    { label: "Rune Ré Per Feu", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Feu (6).png", weight: "6"},
    { label: "Rune Ré Per Mé", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Mé (15).png", weight: "15"},
    { label: "Rune Ré Per Neutre", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Neutre (6).png", weight: "6"},
    { label: "Rune Ré Per Terre", category: "Runes de type simple", icon: "images/runes/Rune Ré Per Terre (6).png", weight: "6"},
    { label: "Rune Ré Pme", category: "Runes de type simple", icon: "images/runes/Rune Ré Pme (7).png", weight: "7"},
    { label: "Rune Ré Pou", category: "Runes de type simple", icon: "images/runes/Rune Ré Pou (2).png", weight: "2"},
    { label: "Rune Ré Terre", category: "Runes de type simple", icon: "images/runes/Rune Ré Terre (2).png", weight: "2"},
    { label: "Rune Sa", category: "Runes de type simple", icon: "images/runes/Rune Sa (3).png", weight: "3"},
    { label: "Rune So", category: "Runes de type simple", icon: "images/runes/Rune So (10).png", weight: "10"},
    { label: "Rune Tac", category: "Runes de type simple", icon: "images/runes/Rune Tac (4).png", weight: "4"},
    { label: "Rune Vi", category: "Runes de type simple", icon: "images/runes/Rune Vi (1).png", weight: "1"}
];


$(document).ready(function() {

    /* start Autocomplete inputs */
    // It creates a new widget that inherits of ui.autocomplete that is called catcomplet
    $.widget("custom.catcomplete", $.ui.autocomplete, {
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
            result.html("<img src=\"" + item.icon + "\"></img>" + item.label)
            return result;
        }
    });

    // Position fix : https://stackoverflow.com/questions/28285813/style-jquery-autocomplete-in-a-bootstrap-input-field
    // It add the custom autocomplete widget (catcomplete) to the container having the id "rune-searching"
    $("#rune-searching").catcomplete({
        delay: 0,
        source : runes,
        appendTo : "#container-rune-searching"
    });
    /* end Autocomplete inputs */

    /* start Sidebar toggler */
    var trigger = $('.hamburger'), isClosed = true;

    trigger.click(function () {
        hamburger_toggle();      
    });

    function hamburger_toggle() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
        $('#wrapper').toggleClass('toggled');
    }
  /* end Sidebar toggler */
});
