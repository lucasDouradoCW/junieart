function createPetPortraitPage(n) {
    let string = `<div class="pagesform" id="petportraitpage${n}">`   

    if(n != 1) {
        string += `<h3>Page ${n}</h3>`;
    } else {
        string += `<h3 id="petportraitheader1" class="invisible">Page 1</h3>`
    }

    string += `
        <div>
            <label for="npetportraitsubjects">Number of subjects on page:  </label>
            <select name="npetportraitsubjects${n}" id="npetportraitsubjects${n}" onchange="changePetSubjects(${n})">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <br>
        <label for="writinggroup">Choose what writing you want:  </label>
        <div class="writinggroup">
            <div id="none${n}" class="unselectedwriting" onclick="selectWriting('none', ${n})">
                <label for="none${n}">None</label>
                <img src="/images/petportraitvert/EddiePortrait.jpg" name="nothing">
            </div>
            <div id="name${n}" class="unselectedwriting" onclick="selectWriting('name', ${n})">
                <label for="name${n}">Name</label>
                <img src="/images/petportraitvert/LucyPortrait.jpeg" name="name">
            </div>
            <div id="phrase${n}" class="unselectedwriting" onclick="selectWriting('phrase', ${n})">
                <label for="phrase${n}">Phrase</label>
                <img src="/images/petportraitvert/levi.jpeg" name="phrase">
            </div>
            <br><br>
            <div>
                <div id="namediv${n}" class="invisible">
                    <label for="nameinput${n}" id="namelabel${n}" class="nameinput">Name<span id="nameplural${n}" class="invisible">s</span><span id="nameoptional${n}" class="invisible"> (optional)</span>: </label>
                    <input name="nameinput${n}" type="text" size="30" maxlength="100" id="nameinput${n}">
                </div>
                <div id="phrasediv${n}" class="invisible">
                    <label for="phraseinput${n}" class="phraseinput">Phrase: </label>
                    <input name="phraseinput${n}" type="text" size="30" maxlength="100" id="phraseinput${n}">
                </div>
            </div>
        </div>
        <br>
        <label for="colourgroup${n}">Choose paper colour below! If you want me to choose, then leave unselected! </label>
        <div class="colourgroup" name="colourgroup${n}" id="colourgroup${n}">
            <div id="white${n}" class="unselectedcolour" onclick="selectColour('white', ${n})">
                <label for="white${n}">White</label>
                <img src="/images/petportraitvert/sophie_hannah_1.jpeg" name="white">
            </div>
            <div id="yellow${n}" class="unselectedcolour" onclick="selectColour('yellow', ${n})">
                <label for="yellow">Yellow</label>
                <img src="/images/petportraitvert/EddiePortrait.jpg" name="yellow">
            </div>
            <div id="beige${n}" class="unselectedcolour" onclick="selectColour('beige', ${n})">
                <label for="beige">Beige</label>
                <img src="/images/petportraitvert/dudley_dec__2020.jpeg" name="beige">
            </div>
            <div id="pink${n}" class="unselectedcolour" onclick="selectColour('pink', ${n})">
                <label for="pink">Pink</label>
                <img src="/images/petportraitvert/buffy.jpeg" name="pink">
            </div>
            <div id="blue${n}" class="unselectedcolour" onclick="selectColour('blue', ${n})">
                <label for="blue">Blue</label>
                <img src="/images/petportraitvert/Clyde.jpg" name="blue">
            </div>
            <div id="brown${n}" class="unselectedcolour" onclick="selectColour('brown', ${n})">
                <label for="brown">Brown</label>
                <img src="/images/petportraitvert/levi.jpeg" name="brown">
            </div>
            <div id="grey${n}" class="unselectedcolour" onclick="selectColour('grey', ${n})">
                <label for="grey">Grey</label>
                <img src="/images/petportraitvert/Nala.jpg" name="grey">
            </div>
        </div>
        <br>
    </div>`

    return string;
}

function createPhysicalCharacterPage(n) {
    let string = `<div class="pagesform" id="physicalcharacterpage${n}">`   

    if(n != 1) {
        string += `<h3>Page ${n}</h3>`;
    } else {
        string += `<h3 id="physicalcharacterheader1" class="invisible">Page 1</h3>`
    }

    string += `
        <label for="physicalbodygroup${n}">Choose what kind of drawing you want:  </label>
        <div class="physicalbodygroup">
            <div id="headonlyphysical${n}" class="unselectedphysicalbody" onclick="selectPhysicalBody('headonlyphysical', ${n})">
                <label for="headonlyphysical">Head Only</label>
                <img src="/images/physicalcharacter/LeonPhys.png" name="headonlyphysical">
            </div>
            <div id="halfbodyphysical${n}" class="unselectedphysicalbody" onclick="selectPhysicalBody('halfbodyphysical', ${n})">
                <label for="halfbodyphysical">Half Body</label>
                <img src="/images/physicalcharacter/HildaPhys.png" name="halfbodyphysical">
            </div>
            <div id="fullbodyphysical${n}" class="unselectedphysicalbody" onclick="selectPhysicalBody('fullbodyphysical', ${n})">
                <label for="fullbodyphysical">Full Body</label>
                <img src="/images/physicalcharacter/Kaede2Phys.png" name="fullbodyphysical">
            </div>
        </div>
        <br>
        <div class="invisible" id="physicalsubjectsdiv${n}">
            <label for="nphysicalsubjects${n}">Number of subjects on page:  </label>
            <select name="nphysicalsubjects${n}" id="nphysicalsubjects${n}" onchange="changePhysicalSubjects(${n})">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <p>While I can draw characters without a reference image, it makes the process more difficult, so I ask for an extra $5 CAD ($4 USD) per character without a reference. Please look at the <a href="Terms.html">terms and conditions</a> for more information!</p>
            <label for="nphysicalref${n}">How many of these subjects have reference images you can send me?  </label>
            <select name="nphysicalrefs${n}" id="nphysicalrefs${n}">
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div class="invisible" id="physicalheadrefdiv${n}">
            <p>While I can draw characters without a reference image, it makes the process more difficult, so I ask for an extra $5 CAD ($4 USD) per character without a reference. Please look at the <a href="Terms.html">terms and conditions</a> for more information!</p>
            <input type="checkbox" id="physicalheadref${n}" name="physicalheadref${n}" value="physicalheadref${n}">
            <label for="physicalheadref${n}">I have a reference image for this character</label>
        </div>
        <br>
        <label for="outlinegroup${n}">Choose the outline you want! If you want me to choose, then leave unselected!  </label>
        <div class="outlinegroup" name="outlinegroup${n}" id="outlinegroup${n}">
            <div id="pencil${n}" class="unselectedoutline" onclick="selectOutline('pencil', ${n})">
                <label for="pencil">Pencil Crayon</label>
                <img src="/images/physicalcharacter/LeonPhys.png" name="pencil">
            </div>
            <div id="pen${n}" class="unselectedoutline" onclick="selectOutline('pen', ${n})">
                <label for="pen">Outline Pen</label>
                <img src="/images/physicalcharacter/BylethPhys.jpg" name="pen">
            </div>
        </div>
        <br>
    </div>`

    return string;
}

function createDigitalCharacterPage(n) {
    let string = `<div class="pagesform" id="digitalcharacterpage${n}">`   

    if(n != 1) {
        string += `<h3>Drawing ${n}</h3>`;
    } else {
        string += `<h3 id="digitalcharacterheader1" class="invisible">Drawing 1</h3>`
    }

    string += `
        <label for="digitalbodygroup">Choose what kind of drawing you want:  </label>
        <div class="digitalbodygroup">
            <div id="headonlydigital${n}" class="unselecteddigitalbody" onclick="selectDigitalBody('headonlydigital', ${n})">
                <label for="headonlydigital">Head Only</label>
                <img src="/images/digitalcharactersquare/1Irispfp2023.png" name="headonlydigital" class="digitalbig">
            </div>
            <div id="simpledigital${n}" class="unselecteddigitalbody" onclick="selectDigitalBody('simpledigital', ${n})">
                <label for="simpledigital">Simple</label>
                <img src="/images/digitalcharactersquare/Swablu.png" name="simpledigital" class="digitalbig">
            </div>
            <div id="halfbodydigital${n}" class="unselecteddigitalbody" onclick="selectDigitalBody('halfbodydigital', ${n})">
                <label for="halfbodydigital">Half Body</label>
                <img src="/images/digitalcharacterrectangle/IvyHB2.png" name="halfbodydigital" class="digitalsmall">
            </div>
            <div id="fullbodydigital${n}" class="unselecteddigitalbody" onclick="selectDigitalBody('fullbodydigital', ${n})">
                <label for="fullbodydigital">Full Body</label>
                <img src="/images/digitalcharacterrectangle/SaffronPride.png" name="fullbodydigital" class="digitalsmall">
            </div>
            <div id="referencedigital${n}" class="unselecteddigitalbody" onclick="selectDigitalBody('referencedigital', ${n})">
                <label for="referencedigital">Reference</label>
                <img src="/images/digitalcharacterref/Mira2023.png" name="referencedigital" class="digitalref">
            </div>
        </div>
        <br>
        <div class="invisible" id="digitalsubjectsdiv${n}">
            <label for="ndigitalsubjects${n}">Number of characters on drawing:  </label>
            <select name="ndigitalsubjects${n}" id="ndigitalsubjects${n}" onchange="changeDigitalSubjects(${n})">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <p>While I can draw characters without a reference image, it makes the process more difficult, so I ask for an extra $5 CAD ($4 USD) per character without a reference. Please look at the <a href="Terms.html">terms and conditions</a> for more information!</p>
            <label for="ndigitalrefs${n}">How many of those characters have reference images you can send me?  </label>
            <select name="ndigitalrefs${n}" id="ndigitalrefs${n}">
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div class="invisible" id="digitalposesdiv${n}">
            <label for="ndigitalposes${n}">Number of poses on reference:  </label>
            <select name="ndigitalposes${n}" id="ndigitalposes${n}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div class="invisible" id="digitalheadrefdiv${n}">
            <p>While I can draw characters without a reference image, it makes the process more difficult, so I ask for an extra $5 CAD ($4 USD) per character without a reference. Please look at the <a href="Terms.html">terms and conditions</a> for more information!</p>
            <input type="checkbox" id="digitalheadref${n}" name="digitalheadref${n}" value="digitalheadref${n}">
            <label for="digitalheadref${n}">I have a reference image for this character</label>
        </div>
        <br>
        <label for="backgroundgroup" id="backgroundlabel${n}" class="invisible">Choose what kind of background you want:  </label>
        <div class="backgroundgroup invisible" id="backgroundgroup${n}">
            <div id="nobackground${n}" class="unselectedbackground" onclick="selectBackground('nobackground', ${n})">
                <label for="nobackground">None/Gradient</label>
                <img src = "/images/digitalcharacterrectangle/Priscilla.png" name="nobackground">
            </div>
            <div id="simplebackground${n}" class="unselectedbackground" onclick="selectBackground('simplebackground', ${n})">
                <label for="simplebackground">Simple</label>
                <img src = "/images/digitalcharacterrectangle/MiraAnaHug.png" name="simplebackground">
            </div>
            <div id="detailedbackground${n}" class="unselectedbackground" onclick="selectBackground('detailedbackground', ${n})">
                <label for="detailedbackground">Detailed</label>
                <img src = "/images/digitalcharacterrectangle/SaffronCrochet.png" name="detailedbackground">
            </div>
        </div>
        <br>
    </div>`

    return string;
}
