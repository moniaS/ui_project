$(document).ready(function() {
    /* Load left sidebar */
    $('#block-left-sidebar-standard').load('../blocks/left-sidebar/standard.html');

    /* Content */
    $('#block-content-homepage').load('../blocks/main-content/homepage.html');

    /* Load right sidebar */
    $('#block-right-sidebar-standard').load('../blocks/right-sidebar/standard.html', function() {
        rightSidebarLoaded();
    });

    /* Modals */
    $('#block-modal-add-new-group').load('../blocks/modal/add-new-group.html', function() {
        newGroupModalLoaded();
    });

    $('#block-modal-add-new-event').load('../blocks/modal/add-new-event.html', function() {
        newEventModalLoaded();
    });

    /* Navbars */
    $('#block-navbar-standard').load('../blocks/navbar/standard.html');
});