alert("Welcome to javascript testing website")

let user = prompt("Tên của bạn là gì ?")
console.log(user);
alert("Chào mừng " + user)
let color = prompt("Enter Color Name");
document.body.style.background = color;
let gender = prompt("Bạn là nam/nữ ?")
gender == 'nam' 
console.log(gender);
if (gender == 'nam') {
    alert("Giới tính của bạn là nam");
    console.log("Tôi là nam");
}
else {
    alert("Giới của bạn là nữ");
    console.log("Tôi là nữ");
}
function changecolor() {
    let color = document.getElementById('colorInputText').value;
    document.body.style.backgroundColor = color;

}
