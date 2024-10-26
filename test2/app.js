// 1
function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]

//2
function fibonacciWithDelay(n, limit, prev = 0, next = 1) {
    if (prev > limit) return;
    console.log(prev);
    setTimeout(() => fibonacciWithDelay(n, limit, next, prev + next), 1000);
}

fibonacciWithDelay(0, 144);

//3
const api = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(data => {
            console.log(data.title);
        })
    }catch (e) {
        console.error(e);
    }
}
api()
//4
const red = document.querySelector('#red')
const blue = document.querySelector('#blue')
const green = document.querySelector('#green')
const yellow = document.querySelector('#yellow')
const purple = document.querySelector('#purple')
const click = (w, e) => {
    w.onclick = () => {
        document.body.style.backgroundColor = e    }
}
click(red, "red")
click(blue, "blue")
click(green, "green")
click(yellow, "yellow")
click(purple, "purple")
// 5
const ii = document.querySelector('.ii')
const div = document.querySelector('.ww')
ii.onclick= ()=> {
    if (div.classList.contains("none")) {
        div.classList.remove("none");
    }else {
        div.classList.add("none")
    }
}
//6
const counter = document.querySelector('.counter')
let count = 0;
const f = () => {
    count++
    counter.innerHTML = `${count}`
}
const int =setInterval(() => {
    f()
}, 1000)
setTimeout(() => {
    clearInterval(int)
}, 100000)


//7
const json = document.querySelector("#json")
json.onclick = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}