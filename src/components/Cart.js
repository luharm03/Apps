import * as product from "../api/product/index.json";
import { useState, useEffect } from "react";
import { getProducts } from "../api/index";
const Cart = () => {
  let [list, setList] = useState([]);
  let [cart, setCart] = useState([]);
  let [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let productCart = [];
    product.items.map((p) => {
      if (p.stockLevel > 0) {
        productCart.push({ ...p, quantity: 1 });
      }
    });
    setCart(productCart);
  }, []);
  useEffect(() => {
    let products = [];
    let st = 0;
    cart.map((p, i) => {
      st += p.quantity * p.price;
      products.push(
        <tr key={"row_" + i}>
          <td>
            {p.name}, {p.size}
          </td>
          <td>${p.price}</td>
          <td>
            <button
              onClick={() => {
                updateCart("remove", i);
              }}
            >
              -
            </button>{" "}
            {p.quantity}{" "}
            <button
              onClick={() => {
                updateCart("add", i);
              }}
            >
              +
            </button>
          </td>
          <td>{p.quantity * p.price}</td>
          <td>
            {" "}
            <button
              onClick={() => {
                updateCart("delete", i);
              }}
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
    setSubTotal(st);
    setList(products);
  }, [cart]);
  const updateCart = (type, i) => {
    let tmpCart = [...cart];
    if (type === "delete") {
      tmpCart.splice(i, 1);
    } else if (type === "add") {
      tmpCart[i].quantity < cart[i].stockLevel ? tmpCart[i].quantity++ : "";
    } else if (type === "remove") {
      tmpCart[i].quantity > 0 ? tmpCart[i].quantity-- : "";
    }
    setCart(tmpCart);
  };
  return (
    <>
      <div className="main">
        <div className="list">
          <h4>Innovation and experience design agency</h4>
          <p>
            Apps is an innovation and experience design agency. We exist to
            create a better future with you
          </p>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list}
              <tr></tr>
              <tr></tr>
              <tr>
                <td>Subtotal</td>
                <td></td>
                <td></td>
                <td>{subTotal}</td>
                <td></td>
              </tr>
              <tr>
                <td>Vat at 20%</td>
                <td></td>
                <td></td>
                <td>{Number(subTotal * 0.2).toFixed(2)}</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td></td>
                <td></td>
                <td>{Number(subTotal + subTotal * 0.2).toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => {
              alert("Thank for shopping with us");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
