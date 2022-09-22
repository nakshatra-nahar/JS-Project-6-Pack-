zodiac = document.getElementById('zodiac');
console.log(zodiac.value)
body = document.body
console.log(body)
function changeBackground(){
    zodiac = document.getElementById('zodiac');
    value = zodiac.value;
    console.log(value)
    switch (value) {
        case "aries":
            body.style.backgroundColor="red"
            break;
        case "tarus":
            body.style.backgroundColor="black"
            break;      
        case "gemini":
            body.style.backgroundColor="green"
            break;      
        case "cancer":
            body.style.backgroundColor="crimson"
            break;
        case "leo":
            body.style.backgroundColor="#F0F8FF"
            break;        
        case "virgo":
            body.style.backgroundColor="#7FFF00"
            break;        
        case "libra":
            body.style.backgroundColor="cyan"
            break;        
        case "scorpio":
            body.style.backgroundColor="brown"
            break;
            
        case "scorpio":
            body.style.backgroundColor="yellow"
            break;        
        case "sagittarius":
            body.style.backgroundColor="purple"
            break;        
        case "capricorn":
            body.style.backgroundColor="voilet"
            break;
        case "aquarius":
            body.style.backgroundColor="indigo"
            break;
        case "pisces":
            body.style.backgroundColor="wheat"
            break;
        default:
            break;
    }
}