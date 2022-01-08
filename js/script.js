{
    const welcome = () => {
        console.log("What are you looking for..?");
    }

    const toggleBackground = (przycisk) => {
        const tresc = document.querySelector(".tresc");

        tresc.classList.toggle("trescEditable");
        przycisk.classList.toggle("przyciskChange");
    }

    const init = () => {
        const przycisk = document.querySelector(".przycisk");
        przycisk.addEventListener("click", () => {
            toggleBackground(przycisk);
        });
        welcome();
    }

    init();
    
}