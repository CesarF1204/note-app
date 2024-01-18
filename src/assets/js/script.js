$(document).ready(() => {
    /* add note */
    $('#note_form').on('submit', function() {
        const title = $(this).find('input[name="title"]').val();
        const content = $(this).find('input[name="content"]').val();

        if(!title || !content){
            alert('Title and content cannot be empty.');
            return false; // Prevent form submission
        }

        $.post($(this).attr('action'), $($(this)).serialize(), (data) => {
            $("#note_data").append(`<div class="note">
                                        <p>Title: ${data.title} content: ${data.content}</p>
                                        <form id="delete_form" action="/notes/${data._id}" method="post">
                                            <input type="hidden" name="id" value="${data._id}">
                                            <input type="submit" value="Delete">
                                        </form>
            </div>                        
            `);
            window.location.href = "/notes";
        }, 'json');

        return false;
    });

    /* delete note */
    $('.delete_form').on('submit', function() {
        $.post($(this).attr('action'), $($(this)).serialize(), (data) => {
            $(`.note_${data.id}`).remove();
            window.location.href = "/notes";
            
        }, 'json');
        return false;
    });

    /* edit note */
    $(document).on("click", '.edit_note', function() {
        const noteId = $(this).data('id');
        const note_title_value = $(`td.note_title[data-id="${noteId}"]`).text();
        const note_content_value = $(`td.note_content[data-id="${noteId}"]`).text();

        $(`#actions_${noteId}`).html(`
                                    <form id="update_form" action="/notes/${noteId}" method="post">
                                        <input type="text" name="title" value="${note_title_value}">
                                        <input type="text" name="content" value="${note_content_value}">
                                        <input type="submit" value="Update">
                                    </form>
        `);

        $('#update_form').on('submit', function() {
            const title = $(this).find('input[name="title"]').val();
            const content = $(this).find('input[name="content"]').val();

            if(!title || !content){
                alert('Title and content cannot be empty.');
                return false; // Prevent form submission
            }

            $.post($(this).attr('action'), $($(this)).serialize(), (data) => {
                window.location.href = "/notes";
            }, 'json');
            return false;
        });
    });
});