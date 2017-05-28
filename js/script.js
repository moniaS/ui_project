$(document).ready( function() {
});

function postLoaded() {
    $('.like-btn').on("click", function (e) {
        var element = $(this).closest('.row').find('.like-value');
        element.html(parseInt(element.html(), 10) + 1);
    });
    $('.dislike-btn').on("click", function (e) {
        var element = $(this).closest('.row').find('.dislike-value');
        element.html(parseInt(element.html(), 10) - 1);
    });
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
    $('#event-date').datepicker();

    $('#event-group').autocomplete({
        source: [
            'Sieciowe Systemy Baz Danych',
            'Kryptografia',
            'Matematyka I',
            'Interfejsy',
            'Grafika',
            'Numerki'
        ],
        appendTo: '#add-new-event-form'
    });

    $('#event-tags').tagit();

    $('#confirm-new-event-btn').on('click', function () {
        var eventName = $('#add-new-event-modal').find('#event-name').val();
        var groupName = $('#add-new-event-modal').find('#event-group').val();
        var tags = $('#event-tags').tagit('assignedTags');

        $('#js-target-date').addClass('date-with-event');
        var toAppend =
            '<div class="list-group">'
            + '<h5 class="text-center"><strong>Poniedziałek, 28 marca</strong></h5>'
            + '<a href="javascript:void(0)" class="list-group-item">'
            + '<h5 class="list-group-item-heading"><strong>' + eventName + '</strong></h5>'
            + '<p class="list-group-item-text">' + groupName + '</p>';

        for (var i = 0, len = tags.length; i < len; i++) {
            toAppend += '<span class="label label-success">' + tags[i] + '</span>';
        }

        toAppend += '</a></div>';

        $('#events-list').append(toAppend);
    })
}

