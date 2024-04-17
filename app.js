// 1 задание
const numbers = /^\d+$/.test('12345')
console.log(numbers)


// 2 задание
const time = () => {
    console.log("прошла секунда")
}
setInterval(time, 1000)


// 3 задание
const intUser = (a,b) => {
    let i = setInterval(() => {
        console.log(a++);
        if (a > b) clearInterval(i);
    }, 1000)
}
intUser(1, 10);


// 5 задание
let xhr = new XMLHttpRequest();
xhr.open("GET", "json.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log("Полученные данные:", response);
    }
};
xhr.send();








