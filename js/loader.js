$(document).ready(function() {
    /* Load left sidebar */
    $('#block-left-sidebar-standard').load('../blocks/left-sidebar/standard.html', function () {
        $("#group-math-I").on('click', function () {
            console.log('clicked')
            $('#block-content-homepage').load('../blocks/main-content/group-view/math1.html', function() {
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
                $('#block-post-crypto1').load('../blocks/main-content/posts/crypto1.html', function () {
                    postLoaded();
                });
                $('#block-post-crypto2').load('../blocks/main-content/posts/crypto2.html', function () {
                    postLoaded();
                });
            })
        })
    });


    /* Content */
    $('#block-content-homepage').load('../blocks/main-content/homepage.html', function() {
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


    $('#block-content-add-new-post').load('../blocks/main-content/add-new-post/general.html', function() {
        addNewPostLoaded();
    });

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
