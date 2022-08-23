var myForm = document.querySelector(".myForm");
var myInput = document.querySelector(".myInput");
var mySelect = document.querySelector(".mySelect");
var myBtn = document.querySelector(".myBtn");
var result = document.querySelector(".result");

myForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const converter = {
        sum:myInput.value,
        currency:mySelect.value,
        // result:
    }
    if(converter.currency == "usd"){
        converter.result = Number(converter.sum / 10922.99).toFixed(1);
        result.textContent = converter.result + " " + "$";
    }else if(converter.currency == "rub"){
        converter.result = Number(converter.sum / 180.36).toFixed(1);
        result.textContent = converter.result + " " + "₽";
    }else if(converter.currency == "eur"){
        converter.result = Number(converter.sum / 10949.13).toFixed(1);
        result.textContent = converter.result + " " + "€";
    }else{
        alert("Check your spelling!")
    }
})
