let forms = ['', '#petportraitform', '#physicalcharacterform', '#digitalcharacterform', '#emoteform'];
let generated = {'pet': false, 'physical': false, 'digital': false, 'emote': false};

$(document).ready(function() { 
    let petportraitpages = 1;
    let physicalcharacterpages = 1;
    let digitalcharacterpages = 1;
    
    //displays appropriate form upon selection
    $('#typecomm').on('change', function() {
        let selection = '#' + this.value + 'form';
        for(let form of forms) {
            if (form === selection) {
                $(form).show();
            } else {
                $(form).hide();
            }
        }

        if(selection === '#petportraitform' || selection === '#physicalcharacterform') {
            $('#deliverydiv').show();
        } else {
            $('#deliverydiv').hide();
        }

        if(selection === "#form"){
            $('#contactinfo').hide();
            $('#expressdiv').hide();
            $('#commentdiv').hide();
            $('#deliverytime').hide();
            $('#pricesub').hide();
            $('#calcdiv').hide();
            $('#cadspan').html('0.00');
            $('#usdspan').html('0.00');
            $('#deliveryspan').html('0');
            $('#agree').hide();
        } else {
            $('#contactinfo').show();
            $('#expressdiv').show();
            $('#commentdiv').show();
            $('#deliverytime').show();
            $('#pricesub').css('display', 'flex');
            $('#calcdiv').show();
            $('#cadspan').html('0.00');
            $('#usdspan').html('0.00');
            $('#deliveryspan').html('0');
            $('#agree').show();
        }

        switch(selection) {
            case '#petportraitform':
                if(!generated.pet) {   
                    $(selection + 'auto').html(createPetPortraitPage(1));
                    generated.pet = true;
                }
                break;
            case '#physicalcharacterform':
                if(!generated.physical){
                    $(selection + 'auto').html(createPhysicalCharacterPage(1));
                    generated.physical = true;
                }
                break;
            case '#digitalcharacterform':
                if(!generated.digital){
                    $(selection + 'auto').html(createDigitalCharacterPage(1));
                    generated.digital = true;
                }
                break;
        } 
    });

    $('#npetportraitpages').on('change', function() {
        let newpages = parseInt(this.value);
        if(petportraitpages == newpages){
            return;
        }
        
        if(petportraitpages == 1) {
            $('#petportraitheader1').show();
        }

        if(newpages == 1) {
            $('#petportraitheader1').hide();
        }

        if(newpages > petportraitpages) {
            for (let i = petportraitpages + 1; i <= newpages; i++) {
                $('#petportraitformauto').append(createPetPortraitPage(i));
            }
        } else {
            for (let i = newpages + 1; i <= petportraitpages; i++) {
                $('#petportraitpage' + i).remove();
            }
        }

        petportraitpages = newpages;
    });

    $('#nphysicalpages').on('change', function() {
        let newpages = parseInt(this.value);
        if(physicalcharacterpages == newpages){
            return;
        }
        
        if(physicalcharacterpages == 1) {
            $('#physicalcharacterheader1').show();
        }
    
        if(newpages == 1) {
            $('#physicalcharacterheader1').hide();
        }
    
        if(newpages > physicalcharacterpages) {
            for (let i = physicalcharacterpages + 1; i <= newpages; i++) {
                $('#physicalcharacterformauto').append(createPhysicalCharacterPage(i));
            }
        } else {
            for (let i = newpages + 1; i <= physicalcharacterpages; i++) {
                $('#physicalcharacterpage' + i).remove();
            }
        }
    
        physicalcharacterpages = newpages;
    });

    $('#ndigitalpages').on('change', function() {
        let newpages = parseInt(this.value);
        if(digitalcharacterpages == newpages){
            return;
        }
        
        if(digitalcharacterpages == 1) {
            $('#digitalcharacterheader1').show();
        }
    
        if(newpages == 1) {
            $('#digitalcharacterheader1').hide();
        }
    
        if(newpages > digitalcharacterpages) {
            for (let i = digitalcharacterpages + 1; i <= newpages; i++) {
                $('#digitalcharacterformauto').append(createDigitalCharacterPage(i));
            }
        } else {
            for (let i = newpages + 1; i <= digitalcharacterpages; i++) {
                $('#digitalcharacterpage' + i).remove();
            }
        }
    
        digitalcharacterpages = newpages;
    });
});

function selectWriting(type, n) {
    let subjects = $('#npetportraitsubjects' + n).val();
    for(let iter of ['none', 'name', 'phrase']) {
        if(iter == type){
            $('#' + iter + n).removeClass("unselectedwriting");
            $('#' + iter + n).addClass("selectedwriting");
        } else {
            $('#' + iter + n).removeClass("selectedwriting");
            $('#' + iter + n).addClass("unselectedwriting");
        }
    }

    $('#namediv' + n).hide();
    $('#nameplural' + n).hide();
    $('#nameoptional' + n).hide();
    $('#phrasediv' + n).hide();

    switch(type){
        case 'name':
            $('#namediv' + n).show();
            $('#namelabel' + n).attr('class', 'namesinput');
            if(subjects > 1) {
                $('#nameplural' + n).show();
                $('#namelabel' + n).attr('class', 'nameinput');
            }
            break;
        case 'phrase':
            $('#namediv' + n).show();
            $('#nameoptional' + n).show();
            $('#namelabel' + n).attr('class', 'name2input');    
            $('#phrasediv' + n).show();
            if(subjects > 1) {
                $('#nameplural' + n).show();
                $('#namelabel' + n).attr('class', 'names2input');
            }
            break;
    }
}

function changePetSubjects(n){
    let subjects = $('#npetportraitsubjects' + n).val();
    if($('#name' + n).attr('class') == 'selectedwriting'){
        if(subjects == 1){
            $('#nameplural' + n).hide();
            $('#namelabel' + n).attr('class', 'nameinput');
        } else {
            $('#nameplural' + n).show();
            $('#namelabel' + n).attr('class', 'namesinput');
        }
    } else if($('#phrase' + n).attr('class') == 'selectedwriting') {
        if(subjects == 1){
            $('#nameplural' + n).hide();
            $('#namelabel' + n).attr('class', 'name2input');
        } else {
            $('#nameplural' + n).show();
            $('#namelabel' + n).attr('class', 'names2input');
        }
    }
}

function selectColour(colour, n) {
    for(let iter of ['white', 'yellow', 'beige', 'pink', 'blue', 'brown', 'grey']) {
        if(iter == colour){
            $('#' + iter + n).toggleClass("unselectedcolour");
            $('#' + iter + n).toggleClass("selectedcolour");
        } else {
            $('#' + iter + n).removeClass("selectedcolour");
            $('#' + iter + n).addClass("unselectedcolour");
        }
    }
}

function selectPhysicalBody(type, n) {
    for(let iter of ['headonlyphysical', 'halfbodyphysical', 'fullbodyphysical']) {
        if(iter == type){
            $('#' + iter + n).removeClass("unselectedphysicalbody");
            $('#' + iter + n).addClass("selectedphysicalbody");
    }   else {
            $('#' + iter + n).removeClass("selectedphysicalbody");
            $('#' + iter + n).addClass("unselectedphysicalbody");
        }
    }

    $('#physicalsubjectsdiv' + n).hide();
    $('#physicalheadrefdiv' + n).hide();
    if(type == "headonlyphysical") {
        $('#physicalheadrefdiv' + n).show();
    } else {
        $('#physicalsubjectsdiv' + n).show();
    }
}

function changePhysicalSubjects(n){
    let subjects = $('#nphysicalsubjects' + n).val();
    $('#nphysicalrefs' + n).empty();
    for(let i = 0; i <= subjects; i++){
        $('#nphysicalrefs' + n).append(`<option value="${i}">${i}</option>`);
    }

    return;
}

function selectOutline(outline, n) {
    for(let iter of ['pencil', 'pen']) {
        if(iter == outline){
            $('#' + iter + n).toggleClass("unselectedoutline");
            $('#' + iter + n).toggleClass("selectedoutline");
        } else {
            $('#' + iter + n).removeClass("selectedoutline");
            $('#' + iter + n).addClass("unselectedoutline");
        }
    }
}

function selectDigitalBody(type, n) {
    for(let iter of ['headonlydigital', 'simpledigital', 'halfbodydigital', 'fullbodydigital', 'referencedigital']) {
        if(iter == type){
            $('#' + iter + n).removeClass("unselecteddigitalbody");
            $('#' + iter + n).addClass("selecteddigitalbody");
    }   else {
            $('#' + iter + n).removeClass("selecteddigitalbody");
            $('#' + iter + n).addClass("unselecteddigitalbody");
        }
    }

    $('#digitalsubjectsdiv' + n).hide();
    $('#digitalposesdiv' + n).hide();
    $('#digitalheadrefdiv' + n).hide();
    $('#backgroundgroup' + n).hide();
    $('#backgroundlabel' + n).hide();
    if(type == "headonlydigital") {
        $('#digitalheadrefdiv' + n).show();
        $('#backgroundgroup' + n).show();
        $('#backgroundlabel' + n).show();
    } else if(type == "referencedigital") {
        $('#digitalposesdiv' + n).show();
    } else {
        $('#digitalsubjectsdiv' + n).show();
        $('#backgroundgroup' + n).show();
        $('#backgroundlabel' + n).show();
    }
}

function selectBackground(type, n) {
    for(let iter of ['nobackground', 'simplebackground', 'detailedbackground']) {
        if(iter == type){
            $('#' + iter + n).removeClass("unselectedbackground");
            $('#' + iter + n).addClass("selectedbackground");
    }   else {
            $('#' + iter + n).removeClass("selectedbackground");
            $('#' + iter + n).addClass("unselectedbackground");
        }
    }
}

function changeDigitalSubjects(n){
    let subjects = $('#ndigitalsubjects' + n).val();
    $('#ndigitalrefs' + n).empty();
    for(let i = 0; i <= subjects; i++){
        $('#ndigitalrefs' + n).append(`<option value="${i}">${i}</option>`);
    }

    return;
}

function validate(){
    let validation = "";

    switch($('#typecomm').val()){
        case 'petportrait':
            validation += validatePetPortrait();
            break;
        case 'physicalcharacter':
            validation += validatePhysical();
            break;
        case 'digitalcharacter':
            validation += validateDigital();
            break;
        case 'emote':
            validation += validateEmote();
            break;
    }

    if(!$('#commname').val()) {
        validation += "Please provide a contact name.\n";
    }
    if(!$('#commemail').val()) {
        validation += "Please provide a contact email.\n";
    }
    return validation;
}

function validatePetPortraitPage(n){
    if($('#none' + n).attr('class') == 'selectedwriting') {
        return "";
    } else if($('#name' + n).attr('class') == 'selectedwriting') {
        if(!$('#nameinput' + n).val()) {
            return ("Please provide name(s) on page " + n + ".\n");
        }
        return "";
    } else if($('#phrase' + n).attr('class') == 'selectedwriting') {
        if(!$('#phraseinput' + n).val()) {
            return ("Please provide phrase on page " + n + ".\n");
        }
        return "";
    } else {
        return ("Please select a writing type on page " + n + ".\n");
    }
}

function validatePetPortrait(){
    let pages = $('#npetportraitpages').val();
    let string = "";

    for(let i = 1; i <= pages; i++){
        string += validatePetPortraitPage(i);
    }
    if(!$('input[name="deliveryoption"]:checked').val()){
        string += 'Please select a delivery option.\n';
    }

    return string;
}

function calculatePetPortrait(){
    let price = 0;
    let pages = $('#npetportraitpages').val();
    let days = 7 + 2*(pages - 1);
    console.log('pages = ' + pages);

    for(let i = 1; i <= pages; i++){
        let subjects = $('#npetportraitsubjects' + i).val();
        price += 75 + (50*(subjects - 1));
    }

    if($('#express').is(':checked')){
        price *= 1.3;
        days = Math.ceil(days/2);
    }
    return {'price': price, 'delivery': days};

}

function validatePhysicalPage(n){
    for(let iter of ['headonly', 'halfbody', 'fullbody']) {
        if($('#' + iter + 'physical' + n).attr('class') == 'selectedphysicalbody'){
            return "";
        }
    }
    return ("Please select a drawing type on page " + n + ".\n");
}

function validatePhysical(){
    let pages = $('#nphysicalpages').val();
    let string = "";

    for(let i = 1; i <= pages; i++){
        string += validatePhysicalPage(i);
    }
    if(!$('input[name="deliveryoption"]:checked').val()){
        string += 'Please select a delivery option.\n';
    }

    return string;
}

function calculatePhysical(){
    let price = 0;
    let pages = $('#nphysicalpages').val();
    let days = 7 + 2*(pages - 1);

    for(let i = 1; i <= pages; i++){
        price += calculatePhysicalPage(i);
    }

    if($('#express').is(':checked')){
        price *= 1.3;
        days = Math.ceil(days/2);
    }
    return {'price': price, 'delivery': days};

}

function calculatePhysicalPage(n){
    let base;
    let extra;
    let subjects;
    let refs;
    if($('#headonlyphysical' + n).attr('class') == 'selectedphysicalbody'){
        extra = 0;
        base = 45;
        subjects = 1;
        if($('#physicalheadref' + n).is(':checked')) {
            refs = 1;
        } else {
            refs = 0;
        }
    } else if($('#halfbodyphysical' + n).attr('class') == 'selectedphysicalbody'){
        extra = 40;
        base = 60;
        subjects = $('#nphysicalsubjects' + n).val();
        refs = $('#nphysicalrefs' + n).val();
    } else {
        extra = 50;
        base = 75;
        subjects = $('#nphysicalsubjects' + n).val();
        refs = $('#nphysicalrefs' + n).val();
    }
    return (base + (subjects - 1)*extra + (subjects - refs)*5);
}

function validateDigitalPage(n){
    let match = "";
    for(let iter of ['headonly', 'simple', 'halfbody', 'fullbody', 'reference']) {
        if($('#' + iter + 'digital' + n).attr('class') == 'selecteddigitalbody'){
            match = iter;
            break;
        }
    }
    if(match == ""){
        return ("Please select a drawing type on drawing " + n + ".\n");
    } else if(match == 'reference'){
        return "";
    }

    for(let iter of ['nobackground', 'simplebackground', 'detailedbackground']) {
        if($('#' + iter + + n).attr('class') == 'selectedbackground'){
            return "";
        }
    }
    return ("Please select a background type on drawing " + n + ".\n");
}

function validateDigital(){
    let pages = $('#ndigitalpages').val();
    let string = "";

    for(let i = 1; i <= pages; i++){
        string += validateDigitalPage(i);
    }

    return string;
}

function calculateDigital(){
    let price = 0;
    let pages = $('#ndigitalpages').val();
    let days = 7 + 2*(pages - 1);

    for(let i = 1; i <= pages; i++){
        let temp = calculateDigitalPage(i);
        price += temp.price;
        days += temp.delivery;
    }

    if($('#express').is(':checked')){
        price *= 1.3;
        days = Math.ceil(days/2);
    }
    return {'price': price, 'delivery': days};

}

function calculateDigitalPage(n){
    let base;
    let extra;
    let subjects;
    let refs;
    if($('#headonlydigital' + n).attr('class') == 'selecteddigitalbody'){
        extra = 0;
        base = 45;
        subjects = 1;
        if($('#digitalheadref' + n).is(':checked')) {
            refs = 1;
        } else {
            refs = 0;
        }
    } else if($('#halfbodydigital' + n).attr('class') == 'selecteddigitalbody'){
        extra = 40;
        base = 60;
        subjects = $('#ndigitalsubjects' + n).val();
        refs = $('#ndigitalrefs' + n).val();
    } else if($('#fullbodydigital' + n).attr('class') == 'selecteddigitalbody'){
        extra = 50;
        base = 75;
        subjects = $('#ndigitalsubjects' + n).val();
        refs = $('#ndigitalrefs' + n).val();
    } else if($('#simpledigital' + n).attr('class') == 'selecteddigitalbody'){
        extra = 30;
        base = 45;
        subjects = $('#ndigitalsubjects' + n).val();
        refs = $('#ndigitalrefs' + n).val();
    } else {
        extra = 20;
        base = 30;
        subjects = $('#ndigitalposes' + n).val();
        refs = subjects;
    }
    let price = (base + (subjects - 1)*extra + (subjects - refs)*5);
    let days = subjects - 1;
    if($('#referencedigital' + n).attr('class') == 'unselecteddigitalbody'){
        if($('#simplebackground' + n).attr('class') == 'selectedbackground'){
            price += 10;
            days += 1;
        } else if($('#detailedbackground' + n).attr('class') == 'selectedbackground'){
            price += 20;
            days += 2;
        }
    }
    return {'price': price, 'delivery': days};
}

function validateEmote(){
    let n = $('#nemotes').val();
    if(n == ""){
        return "Please provide a value for the number of emotes you want.\n";
    }
    n = parseInt(n);
    if(!(Number.isInteger(n))){
        return "Value provided for number of emotes is not a number.\n";
    }
    if(n > 25){
        return "For commissions larger than 25 emotes, please contact me directly so we can discuss the details!\n";
    } 
    if(n <= 0){
        return "Number of commissions must be greater than 0.\n";
    }
    return "";
}

function calculateEmote(){
    let n = $('#nemotes').val();
    n = parseInt(n);
    let price;
    if(n <= 3){
        price = 20*n;
    } else {
        price = 60 + 17*(n - 3);
    }
    let days = n + 3;

    if($('#express').is(':checked')){
        price *= 1.3;
        days = Math.ceil(days/2);
    }
    return {'price': price, 'delivery': days};
}

function calculate(){
    switch($('#typecomm').val()){
        case 'petportrait':
            return calculatePetPortrait();
        case 'physicalcharacter':
            return calculatePhysical();
        case 'digitalcharacter':
            return calculateDigital();
        case 'emote':
            return calculateEmote();
    }
}

function update(){
    let validation = validate();
    if(validation != ""){
        $('#cadspan').html('0.00');
        $('#usdspan').html('0.00');
        $('#deliveryspan').html('0');
        alert(validation);
        return;
    }

    let result = calculate();
    $('#cadspan').html(result.price.toFixed(2));
    convert(result.price, 'usdspan', 2, false);
    $('#deliveryspan').html(result.delivery);
}

function submit() {
    let validation = validate();
    if(validation != ""){
        alert("Please press the \"Calculate\" button before submitting your commission!");
        return;
    }

    let result = calculate();
    if(result.price != $('#cadspan').html() || result.delivery != $('#deliveryspan').html()) {
        alert("Please press the \"Calculate\" button before submitting your commission!");
        return;
    }

    let string = "";
    let subject = "";
    switch($('#typecomm').val()){
        case 'petportrait':
            string += stringifyPetPortrait();
            subject += 'Pet Portrait for ';
            break;
        case 'physicalcharacter':
            string += stringifyPhysical();
            subject += 'Physical Art for ';
            break;
        case 'digitalcharacter':
            string += stringifyDigital();
            subject += 'Digital Art for ';
            break;
        case 'emote':
            string += stringifyEmote();
            subject += 'Emote for ';
            break;
    }

    if($('#typecomm').val() == 'petportrait' || $('#typecomm').val() == 'physicalcharacter'){
        if($('input[name="deliveryoption"]:checked').val() == 'canada'){
            string += 'Deliver to Canada (I will ask for the address once the commission is finished!)\n';
        } else if($('input[name="deliveryoption"]:checked').val() == 'us'){
            string += 'Deliver to the US (I will ask for the address once the commission is finished!)\n';
        } else if($('input[name="deliveryoption"]:checked').val() == 'international'){
            string += 'Deliver to somewhere outside Canada and the US (I will ask for the address once the commission is finished!)\n';
        } else {
            string += "No delivery (I will send you a high quality scan of the finished piece!)\n";
        }
    }

    string += 'Contact name: ' + $('#commname').val() + '\n';
    subject += $('#commname').val();
    string += 'Contact email: ' + $('#commemail').val() + '\n';

    if($('#express').is(':checked')){
        string += 'Express delivery: Yes\n\n';
    } else {
        string += "Express delivery: No\n\n";
    }

    if($('#commentarea').val() == ''){
        string += "No additional comments.\n\n";
    } else {
        string += 'Additional comments: "' + $('#commentarea').val() + '"\n\n';
    }

    string += 'Price: $' + $('#cadspan').html() + ' CAD ($' + $('#usdspan').html() + ' USD)\n';
    string += 'Expected delivery time: ' + $('#deliveryspan').html() + ' days\n';

    sendMail(subject, string);
}

function stringifyPetPortrait(){
    let pages = $('#npetportraitpages').val();
    let string = "Pet Portrait Commission\n\n";
    string += "Pages: " + pages + "\n\n";

    for(let i = 1; i <= pages; i++){
        string += "Page " + i + ":\n";
        let subjects = $('#npetportraitsubjects' + i).val();
        string += "Number of subjects: " + subjects + "\n";
        
        if($('#none' + i).attr('class') == 'selectedwriting'){
            string += 'No writing\n';
        } else if($('#name' + i).attr('class') == 'selectedwriting'){
            string += 'Name(s): ' + $('#nameinput' + i).val() + '\n';
        } else {
            if($('#nameinput' + i).val() == ''){
                string += 'No name\n';
            } else {
                string += "Name(s): " + $('#nameinput' + i).val() + '\n';
            }
            string += 'Phrase: ' + $('#phraseinput' + i).val() + '\n';
        }

        //Colour
        if($('#white' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: White\n';
        } else if($('#yellow' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: Yellow\n';
        } else if($('#beige' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: Beige\n';
        } else if($('#pink' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: Pink\n';
        } else if($('#blue' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: Blue\n';
        } else if($('#brown' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: Brown\n';
        } else if($('#grey' + i).attr('class') == 'selectedcolour') {
            string += 'Paper colour: Grey\n';
        } else {
            string += "No paper colour selected (I'll choose what I think looks best!)\n";
        }
        string += '\n';
    }

    return string;
}

function stringifyPhysical(){
    let pages = $('#nphysicalpages').val();
    let string = "Physical Art Commission\n\n";
    string += "Pages: " + pages + "\n\n";

    for(let i = 1; i <= pages; i++){
        string += "Page " + i + ":\n";
        
        //drawing type
        if($('#headonlyphysical' + i).attr('class') == 'selectedphysicalbody'){
            string += 'Head Only\n';
            if($('#physicalheadref' + i).is(':checked')){
                string += 'Reference: Yes\n';
            } else {
                string += 'Reference: No\n';
            }
        } else {
            if($('#halfbodyphysical' + i).attr('class') == 'selectedphysicalbody') {
                string += 'Half Body\n';
            } else {
                string += 'Full Body\n';
            }
            string += 'Subjects: ' + $('#nphysicalsubjects' + i).val() + '\n';
            string += 'References: ' + $('#nphysicalrefs' + i).val() + '\n';
        }

        //Outline
        if($('#pencil' + i).attr('class') == 'selectedoutline') {
            string += 'Outline: Pencil Crayon\n';
        } else if($('#pen' + i).attr('class') == 'selectedoutline') {
            string += 'Outline: Outline Pen\n';
        } else {
            string += "No outline selected (I'll choose what I think looks best!)\n";
        }
        string += '\n';
    }

    return string;
}

function stringifyDigital(){
    let pages = $('#ndigitalpages').val();
    let string = "Digital Art Commission\n\n";
    string += "Pages: " + pages + "\n\n";

    for(let i = 1; i <= pages; i++){
        string += "Page " + i + ":\n";
        
        //drawing type
        if($('#headonlydigital' + i).attr('class') == 'selecteddigitalbody'){
            string += 'Head Only\n';
            if($('#digitalheadref' + i).is(':checked')){
                string += 'Reference: Yes\n';
            } else {
                string += 'Reference: No\n';
            }
        } else if($('#referencedigital' + i).attr('class') == 'selecteddigitalbody'){
            string += 'Reference Sheet\n';
            string += 'Poses: ' + $('#ndigitalposes' + i).val() + '\n';
        } else {
            if($('#halfbodydigital' + i).attr('class') == 'selecteddigitalbody') {
                string += 'Half Body\n';
            } else if($('#simpledigital' + i).attr('class') == 'selecteddigitalbody') {
                string += 'Simple Character\n';
            } else {
                string += 'Full Body\n';
            }
            string += 'Subjects: ' + $('#ndigitalsubjects' + i).val() + '\n';
            string += 'References: ' + $('#ndigitalrefs' + i).val() + '\n';
        }

        if($('#referencedigital' + i).attr('class') == 'unselecteddigitalbody'){
            if($('#nobackground' + i).attr('class') == 'selectedbackground'){
                string += 'Background: None/Gradient\n';
            } else if($('#simplebackground' + i).attr('class') == 'selectedbackground'){
                string += 'Background: Simple\n';
            } else {
                string += 'Background: Detailed\n';
            }
        }

        string += '\n';
    }

    return string;
}

function stringifyEmote(){
    let string = "Emote Commission\n\n";
    string += 'Number of emotes: ' + $('#nemotes').val() + '\n';

    return string;
}

function sendMail(subject, string){
    let message = string.replace(/(?:\r\n|\r|\n)/g, '<br>');
    $.ajax({
        type: 'post',
        url: '/php/sendMail.php',
        data: {subject: subject, message: message}, 
        success: function (data){
            alert("Success! I'll get back to you shortly, but if you don't hear back from me within the week, feel free to contact me directly!"); 
        },
        fail: function(error){
            alert("Something went wrong... try contacting me directly instead if the issue doesn't fix itself soon!"); 
        }
    });
}
