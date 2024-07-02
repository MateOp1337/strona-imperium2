document.addEventListener("DOMContentLoaded", async function() {
    const splashTexts = [
        "Polskie Imperium",
        "Najlepszy serwer Discord w Polsce!",
        "Dołącz już teraz!"
    ];
    let textIndex = 0;
    let isDeleting = false;
    let delay = 140;
    let text = splashTexts[textIndex];
    let index = 0;

    function writeText(){
        document.getElementById("writing-text").textContent = text.substring(0,index);

        if (isDeleting) {
            index--;
            delay = 70;
        } else {
            index++;
            delay = 140;
        }
        if ( isDeleting && index===0 ) {
            isDeleting = false;
            textIndex = (textIndex + 1) %splashTexts.length;
            text = splashTexts[textIndex];
        } else if (!isDeleting && index===text.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 500 );
        }
        setTimeout(writeText, delay);
    }
    writeText();
});