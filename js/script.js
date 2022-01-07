{
    const welcome = () => {
        console.log("Whassup, broo...?");
    }

    welcome();

    let przycisk = document.querySelector(".przycisk");
    let tresc = document.querySelector(".tresc");

    przycisk.addEventListener("click", () => {
        tresc.classList.toggle("trescEditable");
        przycisk.classList.toggle("przyciskChange");
    })


    let convert = number => number * 4.5;

    let myNumber = 45;

    console.log(convert(myNumber));
}