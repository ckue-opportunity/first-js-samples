console.log("Hello there - I come from an external file.");


function helloWorld() {
    let hello = "Hello World!!!!!!!!!!!!!!!!!!!";
    const drei = 3;

    document.write("<p>" + hello + " " + drei + "</p>");
}

function mToKm(miles) {
    return miles * 1.609;
}

function getPizzaOrder(name, ingredient) {
    return name + " wants to order pizza with " + ingredient + '.';
}

function toUppercase(text) {
    // see also https://www.w3schools.com/js/js_string_methods.asp
    return text.toUpperCase();
}

function circumference(radius) {
    return radius * 2 * Math.PI;
}

function logWeatherData() {
    let weatherData = {
        date: '2012-08-21',
        temperature: 30,
        humidity: 10
    };

    console.log(weatherData.date);
    console.log(weatherData['temperature']);

    weatherData.temperature = 40;
    console.log(weatherData.temperature);

    let propertyName = "humidity";
    weatherData[propertyName] = 99;
    console.log(weatherData[propertyName]);
}

function logUsers() {
    const users = [
        {
            firstName: "Peter",
            lastName: "Towers",
            age: 86,
            country: "USA"
        },
        {
            firstName: "Paul",
            lastName: "Miller",
            age: 54,
            country: "USA"
        },
        {
            firstName: "Fritz",
            lastName: "Kleiner",
            age: 24,
            country: "Schweiz"
        },
        {
            firstName: "Hans",
            lastName: "Müller",
            age: 14,
            country: "Lichtenstein"
        },
        {
            firstName: "Jolanda",
            lastName: "Frankfurter",
            age: 36,
            country: "Deutschland"
        },
        {
            firstName: "Karl",
            lastName: "Keller",
            age: 30,
            country: "Deutschland"
        },
        {
            firstName: "Hanspeter",
            lastName: "Schröder",
            age: 42,
            country: "Deutschland"
        },
        {
            firstName: "Emilio",
            lastName: "Sottorno",
            age: 40,
            country: "Italien"
        },
        {
            firstName: "Robert",
            lastName: "Graveur",
            age: 54,
            country: "Frankreich"
        }
    ];

   /* Vorlage
    document.write('<h5>Liste aller Benutzer</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) { // Schleife (loop)
        document.write('<li>');

        document.write(
            users[i].firstName + ' ' + users[i].name + ', ' + users[i].age
        );

        document.write('</li>');
    }

    document.write('</ul>');
    */

    // a) b) c) ALLE BENUTZER
    document.write('<h5>Liste aller Benutzer</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) {
        document.write('<li>');

        document.write(
            i + ': ' + users[i].lastName + ' ' + users[i].firstName + ', ' + users[i].age + ', ' + users[i].country
        );

        document.write('</li>');
    }

    document.write('</ul>');

    // d) Liste nur diejenigen Benutzer auf, welche jünger oder gleich 40 Jahre alt sind.
    document.write('<h5>d) Liste nur diejenigen Benutzer auf, welche jünger oder gleich 40 Jahre alt sind.</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        if (user.age <= 40) {
            document.write('<li>');

            document.write(
                i + ': ' + user.lastName + ' ' + user.firstName + ', ' + user.age + ', ' + user.country
            );

            document.write('</li>');
        }
    }

    document.write('</ul>');

    // e) Liste nur diejenigen Benutzer auf, welche älter oder gleich 30 Jahre alt sind.
    document.write('<h5>e) Liste nur diejenigen Benutzer auf, welche älter oder gleich 30 Jahre alt sind.</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 30) writeToListItem(users[i], i);
    }

    document.write('</ul>');

    // f) Liste nur diejenigen Benutzer auf, welche in der Schweiz oder in Deutschland geboren wurden.
    document.write('<h5>f) Liste nur diejenigen Benutzer auf, welche in der Schweiz oder in Deutschland geboren wurden.</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.country === "Schweiz" || user.country === "Deutschland") writeToListItem(user, i);
    }

    document.write('</ul>');

    // g) Liste diejenigen Benutzer auf, welche nicht in der Schweiz geboren wurden und jünger als 30 sind.
    document.write('<h5>g) Liste diejenigen Benutzer auf, welche nicht in der Schweiz geboren wurden und jünger als 30 sind.</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.country !== "Schweiz" && user.age < 30) writeToListItem(user, i);
    }

    document.write('</ul>');

    // FREIWILLIG :-)
    writeFilteredUsers(
        'g2) Liste diejenigen Benutzer auf, welche nicht in der Schweiz geboren wurden und jünger als 30 sind.', 
        users, 
        isNotSwissAndJoungerThan30
    );
}

function writeToListItem(user, i) { // freiwillig
    document.write('<li>');

    document.write(
        i + ': ' + user.lastName + ' ' + user.firstName + ', ' + user.age + ', ' + user.country
    );

    document.write('</li>');
}

/*
    Erweiterungen

    a) Lege 9 Benutzerobjekte an.
    b) Füge jedem Benutzerobjekt den Namen des Geburtslandes (country) hinzu.
    c) Schreibe jeden Benutzer in die HTML-Seite und zwar im Format
        i ': ' name ', ' firstName ', ' age ', ' country
    d) Liste nur diejenigen Benutzer auf, welche jünger oder gleich 40 Jahre alt sind.
    e) Liste nur diejenigen Benutzer auf, welche älter oder gleich 30 Jahre alt sind.
    f) Liste nur diejenigen Benutzer auf, welche in der Schweiz oder in Deutschland geboren wurden.
    g) Liste diejenigen Benutzer auf, welche nicht in der Schweiz geboren wurden und jünger als 30 sind.

    Tipp: Falls in den 'users' bei d) bis g) keine Treffer gefunden werden: Werte von Benutzereigenschaften anpassen!
*/

// FÜR FORTGESCHRITTENE / FOR THE ADVANCED / FREIWILLIG ----------------------------------------------------------------------

function writeFilteredUsers(task, users, evaluateConditionFunction) {
    document.write('<h5>' + task + '</h5>');
    document.write('<ul>');

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (evaluateConditionFunction(user)) writeToListItem(user, i);
    }

    document.write('</ul>');
}

function isNotSwissAndJoungerThan30(user) {
    return (user.country !== "Schweiz" && user.age < 30);
}