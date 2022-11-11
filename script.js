let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');

// function variable() {
//     let img1 = document.getElementById('img1');
//     let img2 = document.getElementById('img2');
//     let img3 = document.getElementById('img3');
//     let img4 = document.getElementById('img4');
//     let img5 = document.getElementById('img5');

//     return [img1,img2,img3,img4,img5];
// }

// function picture() {
//     let pic1 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg'];
//     let pic2 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg'];
//     let pic3 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg'];
//     let pic4 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg'];
//     let pic5 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg'];

//     return [pic1,pic2,pic3,pic4,pic5];
// }

let pic1 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg'];
let pic2 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg'];
let pic3 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg'];
let pic4 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg'];
let pic5 = ['http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg', 'http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg'];


//Khởi tạo
function init() {

    img1.src = pic1[Math.floor(Math.random() * 3)];
    img2.src = pic2[Math.floor(Math.random() * 3)];
    img3.src = pic3[Math.floor(Math.random() * 3)];
    img4.src = pic4[Math.floor(Math.random() * 3)];
    img5.src = pic5[Math.floor(Math.random() * 3)];

    // let img = variable();
    // let pic = picture();
    // for(let i = 0; i < 6; i++) {
    //     img[i].src = pic[i][Math.floor(Math.random() * 3)];
    //     console.log(img[i].src)
    // }
}

init();

//Thay đổi màn hình
function change(img, pic) {
    img.src = pic[Math.floor(Math.random() * 3)];
    check();
}

function check() {
    if (img1.src == pic1[0] && img2.src == pic2[0] && img3.src == pic3[0] && img4.src == pic4[0] && img5.src == pic5[0])    alert("You win!!")

    if (img1.src == pic1[1] && img2.src == pic2[1] && img3.src == pic3[1] && img4.src == pic4[1] && img5.src == pic5[1])    alert("You win!!")

    if (img1.src == pic1[2] && img2.src == pic2[2] && img3.src == pic3[2] && img4.src == pic4[2] && img5.src == pic5[2])    alert("You win!!")
}



