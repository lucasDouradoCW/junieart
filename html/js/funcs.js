function populate(dirName, width){
    $.ajax({
        type: 'post',
        data: {dir: dirName},
        url: '/php/getFiles.php', 
        success: function (data){
            let files = JSON.parse(data);
            for (const i in files) {
                console.log(files[i]);
                $('#' + dirName + 'div').append('<img style= "text-align: center; width: ' + width + '" src="/images/' + dirName + '/' + files[i] + '">');
            } 
        },
        fail: function(error){
            console.log(error); 
        }
    });
}