let lang = "ru";

if (lang == "ru") {
  console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
} else if (lang == "en") {
  console.log("mn", "ts", "wd", "th", "fr", "st", "sn");
}

let language = "en";

switch (language) {
  case "ru":
    console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
    break;
  case "en":
    console.log("mn", "ts", "wd", "th", "fr", "st", "sn");
    break;
}

let Arr = [];
Arr.ru = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
Arr.en = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
console.log(Arr[lang]);

let namePerson = "Александр";
console.log(
  namePerson == "Артем"
    ? "Директор"
    : namePerson === "Александр"
    ? "Преподователь"
    : "Студент"
);
