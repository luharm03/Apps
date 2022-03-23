import * as data from "./product/index.json";

const URL = ""; // server url

async function getProducts() {
  const products = fetch(URL)
    .then((res) => res.json())
    .then(() => data)
    .catch((e) => {
      console.error(e);
      return [];
    });
  return products;
}

async function submitCart(data = {}) {
  const response = await fetch(`${URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response;
}

export { getProducts, submitCart };
