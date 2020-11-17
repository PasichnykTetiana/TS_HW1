
let size = prompt('Стакан размера S или M?', "S");
let choko = prompt('Добавляем шоколад?', "+");
let candy = prompt('Добавляем карамель?', "+");
let berry = prompt('Добавляем ягоды?', "+");

function getFullName(num1: string, num2: string, num3: string, num4: string): string { 
    let capital: number;
    if (num1 === "M" || num1 === null) {
        capital = 25;
    }
    else {
        capital = 10
    }
    console.log(choko, candy, berry);
    if(choko ===null && candy === null && berry === null){
       alert("Нужно выбрать минимум одну начинку");
       window.location.reload();
    }
    if(num2 === "+"){
        capital +=5;
    }
    if(num3 === "+"){
        capital += 6;
    }
    if(num4 === "+"){
capital+=10;
    }
    return capital
}

let fullNmae1: number = getFullName(size, choko, candy, berry);
console.log(fullNmae1);