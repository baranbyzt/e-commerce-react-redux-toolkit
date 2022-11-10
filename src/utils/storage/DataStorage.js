let getData = window.localStorage.getItem("link-data");
let linkArr = [];
let check;

getData == null || undefined ? (check = true) : (check = false);

export let SaveData = (data) => {
  if (check) {
    linkArr.push(data);
    window.localStorage.setItem("link-data", JSON.stringify(linkArr));
  } else {
    linkArr = JSON.parse(window.localStorage.getItem("link-data"));
    linkArr.push(data);
    window.localStorage.setItem("link-data", JSON.stringify(linkArr));
  }
};
