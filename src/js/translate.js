const select = document.querySelector(".change-lang");
const allLang = ["en", "ua"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;

  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  let placeholder = "";
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;

  for (let key in langArr) {
    document.querySelector(".lng-" + key).innerHTML = langArr[key][hash];
  }
}

changeLanguage();
