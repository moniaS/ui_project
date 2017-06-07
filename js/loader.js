$(document).ready(function() {
    /* Load left sidebar */
    $('#block-left-sidebar-standard').load('../blocks/left-sidebar/standard.html', function () {
        /* Load left sidebar */
        $('#block-left-sidebar-search-options').load('../blocks/left-sidebar/search-options.html', function() {
            leftSidebarSearchOptionsLoaded();
        });
        $('#block-left-sidebar-group-list').load('../blocks/left-sidebar/group-list.html', function() {
            $("#group-math-I").on('click', function () {
                $('#block-content-homepage').load('../blocks/main-content/group-view/math1.html', function() {
                    $('#block-content-add-new-post').load('../blocks/main-content/add-new-post/general.html', function() {
                        addNewPostLoaded();
                        prepareAddNewPostOnGroup('Matematyka I');
                    });
                    $('#block-content-add-new-post').show();
                    $('#block-post-math1').load('../blocks/main-content/posts/math1.html', function () {
                        postLoaded();
                    });
                    $('#block-post-math2').load('../blocks/main-content/posts/math2.html', function () {
                        postLoaded();
                    });
                })
            });

            $("#group-crypto").on('click', function () {
                $('#block-content-homepage').load('../blocks/main-content/group-view/cryptography.html', function() {
                    $('#block-content-add-new-post').load('../blocks/main-content/add-new-post/general.html', function() {
                        addNewPostLoaded();
                        prepareAddNewPostOnGroup('Kryptografia I');
                    });
                    $('#block-content-add-new-post').show();
                    $('#block-post-crypto1').load('../blocks/main-content/posts/crypto1.html', function () {
                        postLoaded();
                    });
                    $('#block-post-crypto2').load('../blocks/main-content/posts/crypto2.html', function () {
                        postLoaded();
                    });
                })

            })
        });
    });


    /* Content */
    $('#block-content-homepage').load('../blocks/main-content/homepage.html', function() {
        $('#block-content-add-new-post').load('../blocks/main-content/add-new-post/general.html', function() {
            addNewPostLoaded();
        });

        $('#block-content-add-new-post').show();

        $('#block-post-crypto1').load('../blocks/main-content/posts/crypto1.html', function () {
            postLoaded();
        });
        $('#block-post-crypto2').load('../blocks/main-content/posts/crypto2.html', function () {
            postLoaded();
        });
        $('#block-post-math1').load('../blocks/main-content/posts/math1.html', function () {
            postLoaded();
        });
        $('#block-post-math2').load('../blocks/main-content/posts/math2.html', function () {
            postLoaded();
        });
        $('#chat-post1').load('../blocks/main-content/chat/chat1.html', function () {
            postLoaded();
            chatLoaded();
            addMessageOnChatHandler();
        });
    });

    $('#block-content-search').load('../blocks/main-content/search-results.html', function() {
        $('#block-search-post-crypto1').load('../blocks/main-content/posts/crypto1.html', function () {
            postLoaded();
        });
        $('#block-search-post-crypto2').load('../blocks/main-content/posts/crypto2.html', function () {
            postLoaded();
        });
        $('#block-search-post-math1').load('../blocks/main-content/posts/math1.html', function () {
            postLoaded();
        });
        $('#block-search-post-math2').load('../blocks/main-content/posts/math2.html', function () {
            postLoaded();
        });
        $('#block-search-groups').load('../blocks/main-content/groups-list.html');
        searchResultsLoaded();
    });


    /* Load right sidebar */
    $('#block-right-sidebar-calendar-standard').load('../blocks/right-sidebar/calendar-standard.html', function() {
        rightSidebarCalendarLoaded();
    });


    /* Modals */
    $('#block-modal-add-new-group').load('../blocks/modal/add-new-group.html', function() {
        newGroupModalLoaded();
    });

    $('#block-modal-add-new-event').load('../blocks/modal/add-new-event.html', function() {
        newEventModalLoaded();
    });

    $('#block-modal-download-files').load('../blocks/modal/download-files.html', function() {
        downloadsLoaded();
    });

    /* Navbars */
    $('#block-navbar-standard').load('../blocks/navbar/standard.html', function() {
        navbarLoaded();
        notificationsLoaded();
    });
});
