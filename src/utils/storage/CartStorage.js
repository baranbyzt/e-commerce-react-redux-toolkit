export let SaveProduct = (data) => {
  let makingString = JSON.stringify(data);
  window.localStorage.setItem("products", makingString);
};

export let GetProduct = () => {
  let getProductsData = window.localStorage.getItem("products");
  return getProductsData;
};

export let SaveDisposbleMoney = (data) => {
  window.localStorage.setItem("disposableMoney", data);
};

export let GetDisposbleMoney = () => {
  let getMoneyData = window.localStorage.getItem("disposableMoney");
  return getMoneyData;
};

export let SaveAddToCart = (data) => {
  window.localStorage.setItem("addToCart", data);
};

export let GetAddToCart = () => {
  let getCartData = window.localStorage.getItem("addToCart");
  return getCartData;
};

export let SaveTotalSpend = (data) => {
  window.localStorage.setItem("totalSpend", data);
};

export let GetTotalSpend = () => {
  let getTotalSpendData = window.localStorage.getItem("totalSpend");
  return getTotalSpendData;
};
