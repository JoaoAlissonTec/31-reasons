let reasons = [
    "Teu sorriso", 
    "Teu olhar", 
    "Tua boca",
    "Teu corpo",
    "Teu jeitinho",
    "Tua voz",
    "Teu cheiro",
    "Teu abraço",
    "Teu cuidado",
    "Tua força",
    "Teu empenho",
    "Tua beleza",
    "Tua companhia",
    "Tua comida",
    "Teus gostos",
    "Tua inteligência",
    "Sua visão de futuro",
    "Teu parceirismo",
    "Tua paciência comigo",
    "Tua alegria",
    "Tua agitação",
    "Sabe me escutar",
    "Cuida tão bem de mim",
    "Me faz feliz",
    "Me ajuda sempre",
    "Nunca desistiu de mim",
    "Tua atenção",
    "Mesmo quando algo dá erro você pensa um lado positivo",
    "Quando estou com você todos os problemas se vão",
    "Você topa minhas doidices",
    "Você é doidinha igual eu"
]

const reason_button = document.getElementById("reason_button")
const result = document.getElementById("result")
const warning = document.getElementById("warning")
const count = document.getElementById("count")

window.onload = function() {
    const reasonsCookie = JSON.parse(localStorage.getItem("reasons"))
    if(reasonsCookie != undefined || reasonsCookie != null) {
        reasons = reasonsCookie
    }
    setCount(reasons.length)
}

reason_button.addEventListener("click", () => {
    warning.textContent = ""
    const last_date = getCookie("last_date")
    if(dateVerify(last_date)){
        warning.textContent = "Espere até amanhã 😊💖"
        return
    }
    setResult(sortReason())
    localStorage.setItem("reasons", JSON.stringify(reasons))
    addCookie("last_date", formatedDate(Date.now()))
})

function setCount(value) {
    count.textContent = "Restam: " + value
}

function setResult(value){
    result.textContent = value
}

function sortReason(){
    const index = randomNumberByList(reasons)
    const value = reasons[index]

    reasons.splice(index, 1);
    setCount(reasons.length)

    return value
}

function randomNumberByList(list){
    min = Math.ceil(0);
    max = Math.floor(list.length-1)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dateVerify(date){
    return date === formatedDate(Date.now())
}

function formatedDate(date){
    const format = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return format.format(date)
}

function addCookie(key, value){
    document.cookie = key + "=" + value + ";expires=Thu, 31 Jul 2025 23:59:59";
}

function getCookie(key) {
    const keyEQ = key + "=";
    const cookie = document.cookie.split(";");
    for(let i = 0; i < cookie.length; i++){
        let c = cookie[i];
        while(c.charAt(0) === ' ') c = c.substring(1, c.length);
        if(c.indexOf(keyEQ) === 0) {
            return c.substring(keyEQ.length, c.length);
        }
    }
    return null;
}