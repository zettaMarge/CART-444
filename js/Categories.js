class Categories {
    static #_NONE = "NONE";
    static #_ABOUT = "ABOUT";
    static #_DEMOS = "DEMOS";

    static get NONE() { return this.#_NONE; }
    static get ABOUT() { return this.#_ABOUT; }
    static get DEMOS() { return this.#_DEMOS; }

    static displayHtmlContent(current) {
        switch(current) {
            case this.#_ABOUT : {
                displayBio();
                break;
            }

            case this.#_DEMOS : {
                displayDemos();
                break;
            }

            default : {
                displayBio();
                break;
            }
        }
    }
}

function displayBio() {
    const txtZone = document.createElement('div');
    txtZone.innerHTML = "zettaMarge [they || any] is a game developer, ceramist, and digital artist. They've obtained their computer science college degree in Saint-Jean-sur-Richelieu in 2022, later attending Concordia University and receiving their B.S. of computer science in conjunction with the computation arts program in 2027. They hold a particular attention to character and level design, working in both 2D and 3D across a variety of game environments. They draw inspiration from many retro RPGs and farming sims, and sometimes their own pottery practice.<br><br>In 2022 they participated in the Valleyfield Intercollegiate Game Jam Competition, where their team and them made it to third place. While their bigger game projects are developing at a slower pace, they are currently focused on prototyping and publishing some of their smaller concepts; They're currently working on an engine update for their small RPG prototype “Pottery Goblin,” originally made with Bitsy.<br><br>As a ceramist, they like to mix both throwing and various hand-building techniques, working with vibrant glazes to create whimsical pieces. Many of their projects can be found on sale at studio La Girelle in Saint-Jean-sur-Richelieu, and they often take on commissions.";
    txtZone.setAttribute("class", "txt-zone");

    const txtBox = document.createElement('div');
    txtBox.setAttribute("class", "txt-box tab");
    txtBox.appendChild(txtZone);

    const displayHeading = document.createElement('h1');
    displayHeading.setAttribute("class", "display-heading");
    displayHeading.innerText = "ARTIST BIO";

    const divCont = document.createElement('div');
    divCont.appendChild(displayHeading);
    divCont.appendChild(txtBox);

    const divEmpty = document.createElement('div');

    const divBio = document.createElement('div');
    divBio.setAttribute("id", "bio");
    divBio.appendChild(divEmpty);
    divBio.appendChild(divCont);

    const contentZone = document.getElementById('content-zone');
    const contentZoneInner = document.createElement('div');
    contentZoneInner.setAttribute("id", "content-zone-inner");
    contentZoneInner.appendChild(divBio);
    contentZone.appendChild(contentZoneInner);
}

function displayDemos() {
    const txtZone = document.createElement('div');
    txtZone.innerHTML = "A 100% accurate ceramist life simulator.<br>*Note: you may leave the studio at any time*<br><br>- - - - -&nbsp;&nbsp;&nbsp;&nbsp;- - - - -&nbsp;&nbsp;&nbsp;&nbsp;- - - - -&nbsp;&nbsp;&nbsp;&nbsp;- - - - -<br><h2 class=\"h2-heading white-txt\">DESKTOP CONTROLS</h2><br>Arrows / WASD: movement / interact<br>Any key: advance text<br><br><h2 class=\"h2-heading white-txt\">MOBILE CONTROLS</h2><br>Swipe: movement / interact<br>Tap: advance text<br>- - - - -&nbsp;&nbsp;&nbsp;&nbsp;- - - - -&nbsp;&nbsp;&nbsp;&nbsp;- - - - -&nbsp;&nbsp;&nbsp;&nbsp;- - - - -<br><button id=\"PG-start\" class=\"start\" onclick=\"checkStart()\">START</button>";
    txtZone.setAttribute("class", "txt-zone centered-text");

    const divPregame = document.createElement('div');
    divPregame.setAttribute("class", "txt-box tab");
    divPregame.appendChild(txtZone);

    const divCont = document.createElement("div");
    divCont.setAttribute("id", "pre-game");
    const displayHeading = document.createElement("h1");
    displayHeading.setAttribute("class", "display-heading");
    displayHeading.innerText = "POTTERY GOBLIN (1.0)";
    divCont.appendChild(displayHeading);
    divCont.appendChild(divPregame);

    const gameCanvas = document.createElement("canvas");
    gameCanvas.setAttribute("id", "game");
    gameCanvas.setAttribute("class", "square img tab");

    const divEmpty = document.createElement('div');

    const divDemo = document.createElement('div');
    divDemo.setAttribute("id", "demo");
    divDemo.appendChild(divEmpty);
    divDemo.appendChild(divCont);
    divDemo.appendChild(gameCanvas);

    const contentZone = document.getElementById('content-zone');
    const contentZoneInner = document.createElement('div');
    contentZoneInner.setAttribute("id", "content-zone-inner");
    contentZoneInner.appendChild(divDemo);
    contentZone.appendChild(contentZoneInner);
}