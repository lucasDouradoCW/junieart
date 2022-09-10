<?php
    //Code adapted from https://stackoverflow.com/questions/3282578/currency-conversion-using-php
    
    $req_url = 'https://api.exchangerate-api.com/v4/latest/CAD';
    $response_json = file_get_contents($req_url);

    if(false !== $response_json) {
        try {
            $response_object = json_decode($response_json);
            $base_price = $_POST['value'];
            $decimals = $_POST['decimals'];
            $USD_price = round(($base_price * $response_object->rates->USD), $decimals);
        }
        catch(Exception $e) {
            $USD_price = "?";
        }
    } else {
        $USD_price = "?";
    }
    echo ($USD_price);
?>
