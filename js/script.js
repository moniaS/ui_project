/* Variables */
var definedGroups = [
    'Sieciowe Systemy Baz Danych',
    'Kryptografia',
    'Matematyka I',
    'Interfejsy',
    'Grafika',
    'Numerki'
];

var availableTags = [
    'POLI',
    'GRAFIKA',
    'OBWODY',
    'SHA'
];

// Event type for ... events
eventType = {
    PERSONAL : 0,
    GROUP : 1
};

$(document).ready( function() {
    /* Nothing to do here... */
});

function postLoaded() {
    $('.like-btn').off("click").on("click", function (e) {
        var element = $(this).closest('.row').find('.like-value');
        element.html(parseInt(element.html(), 10) + 1);
    });
    $('.dislike-btn').off("click").on("click", function (e) {
        var element = $(this).closest('.row').find('.dislike-value');
        element.html(parseInt(element.html(), 10) - 1);
    });
    $('.open-chat-btn').off("click").on("click", function (e) {
        console.log("pokaz czat");
        $('#chat-post1').show();
    });
}

function chatLoaded1() {
    $('.chat-close').on("click", function (e) {
        console.log("KLIK1");
        var element = $(this).closest('#chat-post1');
        element.hide();
    });

    showChat();
}


//***************************** ADDING NEW GROUP *****************************
function newGroupModalLoaded() {
    $('.btn-file :file').on('change', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        if(input.length) {
            input.val(log);
        }
    });

    $('#add-new-group-modal').on('shown.bs.modal', function () {
        $("#confirm-new-group-btn").off('click').on('click', function () {
            var groupName = $("#add-new-group-modal").find("#group-name").val();
            var inputFile = $("#group-icon-name");
            appendRowToGroupsList(inputFile, groupName);
        })
    });

    $('#add-new-group-modal').on('hidden.bs.modal', function (e) {
        $(this)
            .find("input[type='text'],input[type='file']")
            .val('');
    });
}

function appendRowToGroupsList(inputFile, groupName) {
    if (inputFile[0].files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(".sidebar-nav").append('<li><a href="#"><img class="group-img" src="' + e.target.result + '"/></span> ' + groupName + '</span></a></li>');
        };

        reader.readAsDataURL(inputFile[0].files[0]);
    } else {
        $(".sidebar-nav").append('<li><a href="#"><i class="fa fa-users"></i><span> ' + groupName + '</span></a></li>');
    }
}

// ********************* CALENDAR *********************
function rightSidebarLoaded() {
    $('#js-calendar-date-23').on('click', function() {
        $('#js-calendar-events-date-23').show();
        $('#js-calendar-events-date-25').hide();
    });

    $('#js-calendar-date-25').on('click', function() {
        $('#js-calendar-events-date-25').show();
        $('#js-calendar-events-date-23').hide();
    });

    $('.calendar-date').on('click', function() {
        $('.calendar-date-active').removeClass('calendar-date-active');
        $(this).addClass('calendar-date-active');
    });
}

function newEventModalLoaded() {
    $('.js-datepicker').datepicker();

    $('#group-event-group').autocomplete({
        source: definedGroups,
        appendTo: '#add-new-event-form'
    });

    $('.js-tags').tagit({
        availableTags: availableTags,
        placeholderText: ' Tagi'
    });

    var chosenEventType = eventType.GROUP;

    $('.js-add-event-type').on('click', function() {
        if ($(this).attr('href') == '#group') {
            chosenEventType = eventType.GROUP;

        } else {
            chosenEventType = eventType.PERSONAL;
        }

        console.log(chosenEventType);
    });

    $('#confirm-new-event-btn').on('click', function () {
        let eventName = null;
        let groupName = null;
        let tags = null;

        if (chosenEventType == eventType.GROUP) {
            eventName = $('#add-new-event-modal').find('#group-event-name').val();
            groupName = $('#add-new-event-modal').find('#group-event-group').val();
            tags = $('#group-event-tags').tagit('assignedTags');

        } else {
            eventName = $('#add-new-event-modal').find('#personal-event-name').val();
            tags = $('#personal-event-tags').tagit('assignedTags');
        }

        $('#js-target-date').addClass('date-with-event');
        let toAppend =
            '<div class="list-group">'
            + '<h5 class="text-center"><strong>Poniedziałek, 28 marca</strong></h5>'
            + '<a href="javascript:void(0)" class="list-group-item">'
            + '<h5 class="list-group-item-heading"><strong>' + eventName + '</strong></h5>';

        if (chosenEventType == eventType.GROUP) {
            toAppend += '<p class="list-group-item-text">' + groupName + '</p>';
        }

        for (let i = 0, len = tags.length; i < len; i++) {
            toAppend += '<span class="label label-success">' + tags[i] + '</span>';
        }

        toAppend += '</a></div>';

        $('#events-list').append(toAppend);
    })
}

function addNewPostLoaded() {
    $('#add-new-post-panel').hide();

    $('#add-new-post-tags').tagit({
        availableTags: availableTags,
        placeholderText: 'Tagi'
    });

    $('#add-new-post-group').autocomplete({
        source: definedGroups,
        appendTo: '#add-new-post-form'
    });

    var myDropzone = new Dropzone('#add-new-post-files', { 
        url: '/pages/index.html',
        addRemoveLinks: true,
        dictRemoveFile: 'Usuń plik'
    });

    $('#add-new-post-files').addClass('dropzone');

    $('#add-new-post-btn').on('click', function() {
        $(this).toggleClass('btn-success');
        $(this).toggleClass('btn-default');
        $('#add-new-post-panel').slideToggle();
    });
}

/** CHAT **/
function showChat() {
    $("#btn-chat1").off('click').on('click', function (e) {
        var chatWindow = $("#chat-post1");
        var content = chatWindow.find(".message-content").val();
        chatWindow.find("ul").append("<li class='left clearfix'><div class='row'><div class='col-md-12'><i class='fa fa-user-circle fa-lg'></i><label> Joanna Adamska</label> <a class='like-btn'><i class='fa fa-thumbs-up'></i></a><label class='like-value'>0</label><a class='dislike-btn'><i class='fa fa-thumbs-down'></i></a><label class='dislike-value'>0</label><small class='text-muted pull-right'><span class='glyphicon glyphicon-time'></span> Przed chwilą </small> </div> </div> <div class='row'> <div class='col-md-12'> <span class='comment-content'>" + content + "</span></div></div></li></ul></div> ");
        chatWindow.find(".message-content").val("");
        scrollToChatBottom(chatWindow)
    })
}

function scrollToChatBottom(chatWindowElem) {
    var elemToScroll = chatWindowElem.find('.panel-body');
    var height = elemToScroll[0].scrollHeight;
    elemToScroll.animate({ scrollTop:height }, 1000);
}
