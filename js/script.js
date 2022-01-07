{
    const welcome = () => {
        console.log("What are you looking for..?");
    }

    const toggleBackground = () => {
        const tresc = document.querySelector(".tresc");

        tresc.classList.toggle("trescEditable");
        przycisk.classList.toggle("przyciskChange");
    }

    const init = () => {
        przycisk.addEventListener("click", toggleBackground);

        welcome();
    }

    const przycisk = document.querySelector(".przycisk");

    init();

}