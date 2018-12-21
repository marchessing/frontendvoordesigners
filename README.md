# frontendvoordesigners
Vak Front end voor Designers
Hieronder lees je de readme van de door Marc Hessing geschreven code voor het vak FrontEnd voor Designer - opdracht 3.

Link:
https://marchessing.github.io/frontendvoordesigners/


ReadMe

Regel 1 t/m 8:
Hier worden de variabelen aangemaakt waar later de content in geplaatst gaat worden. Ook halen we hier de JSON data binnen via “request”.

Regel 11 t/m 16:
Hier staat de functie die ervoor zorgt dat de JSON data die hierboven wordt opgehaald ook daadwerkelijk wordt ingeladen. Ook wordt hier de functie showHeroes geactiveerd.

V.a. regel 18:
Hier wordt de functie showHeroes geschreven.

Regel 22 t/m 44:
Deze for loop kijkt naar de lengte van het aantal ingeladen JSON data sets. Ook wordt hier de inhoud van deze data sets geplaatst in verschillende HTML types als: article, img, h2 en p.

Daarna wordt deze data die opgehaald wordt samengevoegd tot HTML. Zodat deze getoond wordt in de browser.

_______

Regel 46 t/m 51:
Hier worden de elementen die ik zal gebruiken in de code vastgesteld. Zodat deze in de code die volgt herbruikt kan worden.

regel 56 t/m 77:
Hier staan de functies die 1 optellen of aftrekken bij de counter. Beide functies laten de classAdd en currentImage functie draaien

regel: 80 t/m 97:
De classAdd functie voegt een class toe bij verschillende counter hoeveelheden

regel 100 t/m 111:
deze functie laat de functies arrowNext en arrowPrev draaien wanneer er pijltje naar links of rechts wordt gedrukt op het toetsenbord.

regel 115 t/m 121:
deze functie laat de functies arrowNext en arrowPrev draaien wanneer je op de button net of previous klikt.

regel 125 t/m 182:
De functie currentImage haalt op basis van de counter verschillende classes van de HTML elementen af en voegt er 1 toe.

regel 186 t/m 195:
de functie clearclasses, haalt de positie classes van de JSON content af. dit zorgt ervoor dat er geen dubbele classes worden toegevoegd. Deze functie wordt dan ook bij de functie arrowPrev en arrowNext gestart.
