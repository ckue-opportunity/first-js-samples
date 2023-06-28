function validateForm() {
    // if (false) return false;
    // if (!true) return false;
    if (!validateFirstName()) return false; // Formular hat Fehler.
    if (!validateLastName()) return false;

    return true; // Formular wurde korrekt ausgefüllt.
}

function validateFirstName() {
    let value = document.getElementById("fname").value;

    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage1("Bitte den Vornamen eingeben.");
        return false;
    }

    sessionStorage.setItem("fname", value);

    return true; // korrekte Eingabe
}

function validateLastName() {
    let value = document.getElementById("lname").value;

    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage2("Bitte den Nachnamen eingeben.");
        return false;
    }

    sessionStorage.setItem("lname", value);

    return true; // korrekte Eingabe
}

function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}

function setMessage2(value) {
    document.getElementById("message-2").innerText = value;
}

// ------------------------------------------------------------------------

function generateConfirmation() {
    // Vornamen einfüllen (in <span> Tag)
    document.getElementById("fname").innerText = sessionStorage.getItem("fname");

    // Nachnamen einfüllen ...
}

