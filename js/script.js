$(document).ready( function() {
    /* For now I'm empty */
});

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

    $('#add_new_group_modal').on('shown.bs.modal', function () {
        $("#confirm_new_group_btn").off('click').on('click', function () {
            var groupName = $("#add_new_group_modal").find("#group_name").val();
            var inputFile = $("#group_icon_name");
            appendRowToGroupsList(inputFile, groupName);
        })
    });

    $('#add_new_group_modal').on('hidden.bs.modal', function (e) {
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