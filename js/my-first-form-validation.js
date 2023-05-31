/* 
    Vorbereitungen: 
        !) Neue Datei my-first-form-validation.html (ohne Bootstrap)
        a) <form> mit zwei input Feldern vom Typ 'text'.
        b) Ein input Feld vom Typ 'number'
        c) <button> mit der Beschriftung "Validieren" ausserhalb <form>
        d) <p> für eine Fehlermeldung unterhalb dem Button

    Validierungen mit JavaScript (inkl. Fehlermeldung): 
        1) das erste input Feld darf nicht leer sein
        2) beide input Felder dürfen nicht leer sein
        3) das zweite input Feld muss ein '@' enthalten
        4) der Wert n im Nummernfeld erfüllt 0 <= n <= 10

    https://www.w3schools.com/html/html_form_input_types.asp

    document.getElementById('blah');
    document.querySelectorAll('input[type="text"]');
    forEach(myFunction);
*/
function validateForm() {
    // knock-out falls notwendig: Formular nicht abschicken wenn false zurück kommt.
    if (!validateFirstName()) return false; 
    if (!validateLastName()) return false;

    /*
        validateAge kann entweder true, false und undefined zurück geben.

        Bei !validateAge() mit !undefined (NOT undefined) interpretiert 
        Javascript ein false.

        Exkurs: Wenn die Funktion eine 0 (Zahl Null) zurückgeben würde, 
                dann interpretiert Javascript !0 (NOT 0) mit false.

                Zusammengefasst:

                x = false;
                x = undefined;
                x = null;
                x = 0;
                x = '';

                if (!x) => true => { // do something }


                x = true;
                x = 1;
                x = 'Hallo';
                x = ['hallo', 'velo'];
                x = [];
                x = {name: 'Chris'};
                x = {};

                if (x) => true => { // do something }
    */
    if (!validateAge()) return false;

    return true; // Formular wurde korrekt ausgefüllt.
}

function validateFirstName() {
    let inputElement = document.getElementById("fname");
    let value = inputElement.value;

    if (!value) { 
        // Bsp. '', null, undefined
        setMessage1('Bitte den Vornamen eingeben.');
        return false;
    }
    // Ab hier enthält value einen nicht leeren String.
    // indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf?retiredLocale=de
    else if (value.indexOf('@') === -1) { 
        // value enthält KEIN '@' Symbol.
        setMessage1('Bitte im Vornamen ein "@" einfügen.');
        return false;
    }
    else {
        setMessage1(value);
        return true; 
    }
}

function validateLastName() {
    let inputElement = document.getElementById("lname");
    let value = inputElement.value;

    if (!value) { 
        // Bsp. '', null, undefined
        setMessage2('Bitte den Nachnamen eingeben.');
        return false;
    }
    else {
        setMessage2(value); 
        return true;
    }
}

function validateAge() {
    let inputElement = document.getElementById("age");
    let value = inputElement.value;

    if (!value) { 
        // Bsp. '', null, undefined
        setMessage3('Bitte das Alter eingeben.');
        return false;
    }
    else if (value < 0 || value > 10) { // NOT (0 <= n <= 10)
        // Entweder ist die Zahl kleiner Null oder grösser 10.
        setMessage3('Entweder ist die Zahl kleiner Null oder grösser 10.');

        // Wenn hier kein return-Wert steht, dann gibt die Funktion 'undefined' zurück.
        // return false;
    }
    else {
        setMessage3(value); 
        return true;
    }
}

function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}

function setMessage2(value) {
    document.getElementById("message-2").innerText = value;
}

function setMessage3(value) {
    document.getElementById("message-3").innerText = value;
}


// VALIDATE ANSWERS ----------------------------------------------

function validateAnswers() {
    // knock-out pattern: Mit false wird das Formular nicht abgeschickt.
    if (!validateRadio()) return false;
    if (!validateCheckboxes()) return false;
    
alert('Alles gut.');
    return true;
}

function validateRadio() {
    let radioElementJa = document.getElementById('ja');
    let radioElementNein = document.getElementById('nein');

    if (!(radioElementJa.checked || radioElementNein.checked)) {
        // Fehlerfall
        setMessage1('Bitte wähle "ja" oder "nein" aus.');
        return false; // optional
    }
    else {
        // Erfolgsfall
        let radioButtons = document.getElementsByName("radio-mood");
        let value;

        for (let b = 0; b < radioButtons.length; ++b) {
            let button = radioButtons[b];

            if (button.checked) {
                value = button.value;
                break;
            }
        }

        setMessage1('Du hast "' + value + '" gewählt.');
        return true; // mandatory, zwingend, sonst wird Formular nicht abgeschickt.
    }
}

function validateCheckboxes() {
    let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

console.log('checkedCheckboxes =', checkedCheckboxes);

    let redSelected = false;
    let whiteSelected = false;
    let wrongColorSelected = false;

    for (let c = 0; c < checkedCheckboxes.length; ++c) {
        let checkbox = checkedCheckboxes[c];

        if (checkbox.value === 'rot') redSelected = true;
        else if (checkbox.value === 'weiss') whiteSelected = true;
        else wrongColorSelected = true;
    }

console.log('redSelected =', redSelected);
console.log('whiteSelected =', whiteSelected);
console.log('wrongColorSelected =', wrongColorSelected);

    // if ( (! ( redSelected && whiteSelected ) ) || wrongColorSelected) {
    if ( !(redSelected && whiteSelected && !wrongColorSelected) ) {
        // Fehlerfall
        setMessage2('Hmm, echt, das weisst du nicht? Versuchs nochmals!');
        return false;
    }
    else {
        // Erfolgsfall
        setMessage2('Hmm gut. War ja auch leicht.');
        return true;
    }
}