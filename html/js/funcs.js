function populate(dirName, width, margin, toDisplay, displayDiv, cla){
    $.ajax({
        type: 'post',
        data: {dir: dirName},
        url: '/php/getFiles.php', 
        success: function (data){
            let files = JSON.parse(data);
            for (const i in files) {
                if (toDisplay){
                    $('#' + dirName + 'div').append('<img ' + cla + ' style= "margin: ' + margin + '; text-align: center; width: ' + width + '" src="/images/lowres/' + files[i] + '" onclick="display(\'' + displayDiv +  '\', \'/images/' + dirName + '/' + files[i] + '\')">');
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
    $('#' + div + 'info').html('');
    $('#' + div + 'display').html('<img style= "display: block; margin-left: auto; margin-right: auto; height: auto; width: auto; max-width: 75vw; max-height: 75vh;" src="' + img + '">');
    let name = img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.'));
    $.ajax({
        type: 'post',
        url: '/info/' + name + '.txt', 
        success: function (data){
            $('#' + div + 'info').html(data);
        },
        fail: function(error){
            console.log(error); 
        }
    });
}

function convert(cadVal, dest, d = 0, dollar = true){
    $.ajax({
        type: 'post',
        data: {value: cadVal, decimals: d},
        url: '/php/test.php', 
        success: function (data){
            console.log(data);
            if(dollar){
                $('#' + dest).html('$' + data);
            } else{
                $('#' + dest).html(data);
            }
            console.log(d);
        },
        fail: function(error){
            console.log(error);
            $('#' + dest).innerHTML('?'); 
        }
    });
}

function testMail(){
    console.log("TESTMAIL");
    $.ajax({
        type: 'post',
        url: '/php/testMail.php', 
        success: function (data){
            console.log("SUCCESS"); 
        },
        fail: function(error){
            console.log(error); 
        }
    });
}
