/**
 * This files contains all the code related to the sidebar.
 */

var isClosed = true;

/**
 * Should not be called from anywhere else than the sidebar.js file.
 * @param {container} container the container that toggles the sidebar.
 */
function hamburgerToggle(container) {
    if (isClosed == true) {
        container.removeClass('is-open');
        container.addClass('is-closed');
        isClosed = false;
    } else {
        container.removeClass('is-closed');
        container.addClass('is-open');
        isClosed = true;
    }
    $('#wrapper').toggleClass('toggled');
}

/**
 * Clicking on the specified {container} toggles the sidebar.
 * @param {container} container the container that toggles the sidebar.
 */
function addSideBarTrigger(container){
    container.click(function () {
        hamburgerToggle(container);      
    });
}