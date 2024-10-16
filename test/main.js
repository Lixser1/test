// 1


const containsOnlyDigits = (str) => {
    const regExp = /^[0-9]+$/
    return regExp.test(str)
}
num = 12345
num2 = "12a45"
console.log(containsOnlyDigits(num)); // Выведет true
console.log(containsOnlyDigits(num2)); // Выведет false
// 2
setInterval(() => {
    console.log("прошла секунда");
}, 1000)

//3
let log = 0
const int=setInterval(() => {
    log++
    console.log(log)
}, 1000)
setTimeout(() => { clearInterval(int) }, 10001)
// 4
const button = document.querySelector("button")
button.onclick = () => {
    if (button.classList.contains("green")) {
        button.classList.remove("green")
    }else {
        button.classList.add("green")
    }
}
// 5
const json = new XMLHttpRequest()
json.open("GET", "data.json")
json.setRequestHeader("GET", "data.json")
json.send()
json.onload = () => {
    const arrayJson = JSON.parse(json.response)
    console.log(arrayJson)
}
