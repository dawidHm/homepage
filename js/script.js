{
    const welcome = () => {
        console.log("Whassup..?");
    }

    const onChangeBackgroundClick = () => {
        tresc.classList.toggle("trescEditable");
        przycisk.classList.toggle("przyciskChange");
    }

    welcome();

    let przycisk = document.querySelector(".przycisk");
    let tresc = document.querySelector(".tresc");

    przycisk.addEventListener("click", onChangeBackgroundClick);
}
