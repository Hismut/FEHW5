//!                                         LEVEL 1
//1. Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.

// let arr = ["apple", "pear", "banana", "pineapple", "orange", "peach"];

// for (let i = 0; i < arr.length; i++) {
//   let newP = document.createElement("p");
//   newP.innerText = arr[i];
//   document.body.append(newP);
// }

// let par = document.querySelectorAll("p");
// for (let i = 0; i < par.length; i++) {
//   par[i].addEventListener("click", function () {
//     par[i].innerText = "********";
//   });
// }
//-----------------------------------------------------------------------------------------

//?           другое решение(короче)

// let arr = ["apple", "pear", "banana", "pineapple", "orange", "peach"];

// for (let i = 0; i < arr.length; i++) {
//   let newP = document.createElement("p");
//   newP.innerText = arr[i];
//   document.body.append(newP);
//   newP.addEventListener("click", function () {
//     newP.innerText = "********";
//   });
// }

//----------------------------------------------------------------------------------------------------------------------------
// 2.\Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
//----------------------------------------------------------------------------------------------------------------------------
// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.

// for (let i = 0; i < 10; i++) {
//   let card = document.createElement("div");
//   card.innerText = i;
//   document.body.append(card);
//   card.addEventListener("click", function () {
//     card.classList.toggle("active");
//   });
// }

//----------------------------------------------------------------------------------------------------------------------------
// 3. В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение
// в большем размере.

// let pics = [
//   "https://i2-prod.walesonline.co.uk/news/uk-news/article25483139.ece/ALTERNATES/s615/0_cat-1285634_1920.png",
//   "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/96b0f8c1fc7546deab323b0f6ba9f33a.jpg",
//   "https://m.media-amazon.com/images/I/71+mDoHG4mL.png",
//   "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
// ];

// let icons = document.createElement("div");
// let preview = document.createElement("img");

// icons.className = "icons";
// preview.className = "preview";

// document.body.append(icons);
// document.body.append(preview);

// for (i = 0; i < pics.length; i++) {
//   let smallPic = document.createElement("img");
//   smallPic.src = pics[i];
//   icons.appendChild(smallPic);
//   smallPic.addEventListener("click", function () {
//     preview.src = smallPic.src;
//   });
// }

//----------------------------------------------------------------------------------------------------------------------------
