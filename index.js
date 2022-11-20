let kidsDied = 0;
let kidsNotDied = 0;
let year = +prompt("Введите колличество лет");
let month = 0;
let village = {};
let villageDied = 0;
let villageNotDied = 0;
let humans = 0;
let humansDied = 0;
let humansNotDied = 0;
let villageCount = 0;
let villageContent =
  '<p class="red">Красные убитые</p><br><p class="green"> Зеленые живые</p>';

function getVillageCount() {
    month = year * 12;
    villageCount = month * 2;
}
getVillageCount();

function getVillage() {
  for (let i = 0; i < villageCount; i++) {
    let numb = i + 1;
    let humans = getRandom();
    let kids = (humans / 100) * 20;
    kids = Math.round(kids);
    village[i] = {
      id: numb,
      humans,
      kids,
    };
    if (kids >= 15) {
      kidsDied += kids;
      villageDied++;
      humansDied += humans;
    } else {
      kidsNotDied += kids;
      villageNotDied++;
      humansNotDied += humans;
    }
    villageContent +=
      "<div class='card'><ul><li>Деревня №" +
      village[i].id +
      "</li><li>Людей в деревне:" +
      village[i].humans +
      "</li><li>Детей в деревне:" +
      village[i].kids +
      "</li></ul></div><hr>";
  }
}

function getRandom() {
  random = Math.random() * 100;
  random = Math.round(random);
  return random;
}
getVillage();
// console.log("                     СТАТИСТИКА");
// console.log("Лет:", year);
// console.log("Месяцев:", month);
// console.log("Пройдено деревень:", villageCount);
// console.log("");
// console.log("Детей убито:", kidsDied, "    Детей не убито:", kidsNotDied);
// console.log("Людей убито:", humansDied, "    Людей не убито:", humansNotDied);

// console.log(
//   "Деревень тронуто:",
//   villageDied,
//   "      Деревень не тронуто:",
//   villageNotDied
// );
// console.log(villageContent);

stats = document.querySelector(".stats");
villagehtml = document.querySelector(".village");

stats.innerHTML =
  "<h1>СТАТИСТИКА</h1>" +
  "<ul>" +
  "<li>Лет:<span>" +
  year +
  "</span></li><li>Месяцев:<span>" +
  month +
  "</span></li><li>Пройдено деревень:<span>" +
  villageCount +
  "</span></li><li>Детей убито:<span>" +
  kidsDied +
  "</span></li><li>    Детей не убито:<span>" +
  kidsNotDied +
  "</span></li><li>Людей убито:<span>" +
  humansDied +
  "</span></li><li>    Людей не убито:<span>" +
  humansNotDied +
  "</span></li><li>Деревень тронуто:<span>" +
  villageDied +
  "</span></li><li>      Деревень не тронуто:<span>" +
  villageNotDied +
  "</span></li></ul>";

villagehtml.innerHTML = villageContent;
let card = document.querySelectorAll(".card");

let getStatusVillage = function () {
  for (let index = 0; index < card.length; index++) {
    if (village[index].kids >= 15) {
      card[index].classList.add("red");
    } else {
      card[index].classList.add("green");
    }
  }
};
getStatusVillage();
