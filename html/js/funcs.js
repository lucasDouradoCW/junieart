function populate(dirName, width, margin, toDisplay, displayDiv, cla){
    $.ajax({
        type: 'post',
        data: {dir: dirName},
        url: '/php/getFiles.php', 
        success: function (data){
            let files = JSON.parse(data);
            for (const i in files) {
                console.log(files[i]);
                if (toDisplay){
                    $('#' + dirName + 'div').append('<img ' + cla + ' style= "margin: ' + margin + '; text-align: center; width: ' + width + '" src="/images/' + dirName + '/' + files[i] + '" onclick="display(\'' + displayDiv +  '\', \'/images/' + dirName + '/' + files[i] + '\')">');
                } else {
                    $('#' + dirName + 'div').append('<img ' + cla + ' style= "margin: ' + margin + '; text-align: center; width: ' + width + '" src="/images/' + dirName + '/' + files[i] + '">');
                }
            } 
        },
        fail: function(error){
            console.log(error); 
        }
    });
}

function display(div, img){
    $('#' + div).html('<img style= "display: block; margin-left: auto; margin-right: auto; height: 75vh; max-width: 75vw;" src="' + img + '">');
}