var runes = [
    { label: "rune pa age", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_age.png"},
    { label: "rune pa cha", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_cha.png"},
    { label: "rune pa do air", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_air.png"},
    { label: "rune pa do cri", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_cri.png"},
    { label: "rune pa do eau", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_eau.png"},
    { label: "rune pa do feu", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_feu.png"},
    { label: "rune pa do neutre", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_neutre.png"},
    { label: "rune pa do pou", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_pou.png"},
    { label: "rune pa do terre", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_do_terre.png"},
    { label: "rune pa fo", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_fo.png"},
    { label: "rune pa fui", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_fui.png"},
    { label: "rune pa ine", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ine.png"},
    { label: "rune pa ini", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ini.png"},
    { label: "rune pa pi", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_pi.png"},
    { label: "rune pa pi per", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_pi_per.png"},
    { label: "rune pa pod", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_pod.png"},
    { label: "rune pa prospe", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_prospe.png"},
    { label: "rune pa pui", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_pui.png"},
    { label: "rune pa ret pa", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ret_pa.png"},
    { label: "rune pa ret pme", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ret_pme.png"},
    { label: "rune pa ré air", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_air.png"},
    { label: "rune pa ré cri", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_cri.png"},
    { label: "rune pa ré eau", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_eau.png"},
    { label: "rune pa ré feu", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_feu.png"},
    { label: "rune pa ré neutre", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_neutre.png"},
    { label: "rune pa ré pa", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_pa.png"},
    { label: "rune pa ré pme", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_pme.png"},
    { label: "rune pa ré pou", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_pou.png"},
    { label: "rune pa ré terre", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_ré_terre.png"},
    { label: "rune pa sa", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_sa.png"},
    { label: "rune pa so", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_so.png"},
    { label: "rune pa tac", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_tac.png"},
    { label: "rune pa vi", category: "Runes de type pa", icon: "images/runes/pa/rune_pa_vi.png"},
    { label: "rune ra age", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_age.png"},
    { label: "rune ra cha", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_cha.png"},
    { label: "rune ra fo", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_fo.png"},
    { label: "rune ra ine", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_ine.png"},
    { label: "rune ra ini", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_ini.png"},
    { label: "rune ra pi per", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_pi_per.png"},
    { label: "rune ra pod", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_pod.png"},
    { label: "rune ra pui", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_pui.png"},
    { label: "rune ra sa", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_sa.png"},
    { label: "rune ra vi", category: "Runes de type ra", icon: "images/runes/ra/rune_ra_vi.png"},
    { label: "rune age", category: "Runes de type simple", icon: "images/runes/simple/rune_age.png"},
    { label: "rune cha", category: "Runes de type simple", icon: "images/runes/simple/rune_cha.png"},
    { label: "rune cri", category: "Runes de type simple", icon: "images/runes/simple/rune_cri.png"},
    { label: "rune de chasse", category: "Runes de type simple", icon: "images/runes/simple/rune_de_chasse.png"},
    { label: "rune do", category: "Runes de type simple", icon: "images/runes/simple/rune_do.png"},
    { label: "rune do air", category: "Runes de type simple", icon: "images/runes/simple/rune_do_air.png"},
    { label: "rune do cri", category: "Runes de type simple", icon: "images/runes/simple/rune_do_cri.png"},
    { label: "rune do eau", category: "Runes de type simple", icon: "images/runes/simple/rune_do_eau.png"},
    { label: "rune do feu", category: "Runes de type simple", icon: "images/runes/simple/rune_do_feu.png"},
    { label: "rune do neutre", category: "Runes de type simple", icon: "images/runes/simple/rune_do_neutre.png"},
    { label: "rune do per ar", category: "Runes de type simple", icon: "images/runes/simple/rune_do_per_ar.png"},
    { label: "rune do per di", category: "Runes de type simple", icon: "images/runes/simple/rune_do_per_di.png"},
    { label: "rune do per mé", category: "Runes de type simple", icon: "images/runes/simple/rune_do_per_mé.png"},
    { label: "rune do per so", category: "Runes de type simple", icon: "images/runes/simple/rune_do_per_so.png"},
    { label: "rune do pou", category: "Runes de type simple", icon: "images/runes/simple/rune_do_pou.png"},
    { label: "rune do ren", category: "Runes de type simple", icon: "images/runes/simple/rune_do_ren.png"},
    { label: "rune do terre", category: "Runes de type simple", icon: "images/runes/simple/rune_do_terre.png"},
    { label: "rune fo", category: "Runes de type simple", icon: "images/runes/simple/rune_fo.png"},
    { label: "rune fui", category: "Runes de type simple", icon: "images/runes/simple/rune_fui.png"},
    { label: "rune ga pa", category: "Runes de type simple", icon: "images/runes/simple/rune_ga_pa.png"},
    { label: "rune ga pme", category: "Runes de type simple", icon: "images/runes/simple/rune_ga_pme.png"},
    { label: "rune ine", category: "Runes de type simple", icon: "images/runes/simple/rune_ine.png"},
    { label: "rune ini", category: "Runes de type simple", icon: "images/runes/simple/rune_ini.png"},
    { label: "rune invo", category: "Runes de type simple", icon: "images/runes/simple/rune_invo.png"},
    { label: "rune pi", category: "Runes de type simple", icon: "images/runes/simple/rune_pi.png"},
    { label: "rune pi per", category: "Runes de type simple", icon: "images/runes/simple/rune_pi_per.png"},
    { label: "rune po", category: "Runes de type simple", icon: "images/runes/simple/rune_po.png"},
    { label: "rune pod", category: "Runes de type simple", icon: "images/runes/simple/rune_pod.png"},
    { label: "rune prospe", category: "Runes de type simple", icon: "images/runes/simple/rune_prospe.png"},
    { label: "rune pui", category: "Runes de type simple", icon: "images/runes/simple/rune_pui.png"},
    { label: "rune ret pa", category: "Runes de type simple", icon: "images/runes/simple/rune_ret_pa.png"},
    { label: "rune ret pme", category: "Runes de type simple", icon: "images/runes/simple/rune_ret_pme.png"},
    { label: "rune ré air", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_air.png"},
    { label: "rune ré cri", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_cri.png"},
    { label: "rune ré eau", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_eau.png"},
    { label: "rune ré feu", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_feu.png"},
    { label: "rune ré neutre", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_neutre.png"},
    { label: "rune ré pa", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_pa.png"},
    { label: "rune ré per air", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_air.png"},
    { label: "rune ré per di", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_di.png"},
    { label: "rune ré per eau", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_eau.png"},
    { label: "rune ré per feu", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_feu.png"},
    { label: "rune ré per mé", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_mé.png"},
    { label: "rune ré per neutre", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_neutre.png"},
    { label: "rune ré per terre", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_per_terre.png"},
    { label: "rune ré pme", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_pme.png"},
    { label: "rune ré pou", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_pou.png"},
    { label: "rune ré terre", category: "Runes de type simple", icon: "images/runes/simple/rune_ré_terre.png"},
    { label: "rune sa", category: "Runes de type simple", icon: "images/runes/simple/rune_sa.png"},
    { label: "rune signature", category: "Runes de type simple", icon: "images/runes/simple/rune_signature.png"},
    { label: "rune so", category: "Runes de type simple", icon: "images/runes/simple/rune_so.png"},
    { label: "rune tac", category: "Runes de type simple", icon: "images/runes/simple/rune_tac.png"},
    { label: "rune vi", category: "Runes de type simple", icon: "images/runes/simple/rune_vi.png"}
];


$(document).ready(function() {

    // Categories https://jqueryui.com/autocomplete/#categories
    // We create a new widget that inherits of ui.autocomplete that is called catcomplet
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
            this._super();
            this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
        },
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
        _renderItemData(ul, item){
            return $("<li>")
                .attr("data-value", item.label)
                .append("<img src=\"" + item.icon + "\"></img>")
                .append(item.label)
                .appendTo(ul);
        }
    });

    // https://stackoverflow.com/questions/28285813/style-jquery-autocomplete-in-a-bootstrap-input-field
    $("#rune-searching").catcomplete({
        delay: 0,
        source : runes,
        appendTo : "#container-rune-searching"
    });

    // Menu Toggle Script
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});
