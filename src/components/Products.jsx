import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./sass/products.scss";
import Samsung from "../images/image 21.svg";
import Iphone from "../images/image 22.svg";
import Naushnik from "../images/image 23.svg";
import Galaxy from "../images/image 26.svg";
import IconBundle from "../images/icon-bundle.svg";
import IconSale from "../images/Vector.svg";
import IconTrade from "../images/icon-trade in.svg";

const products = [
  {
    id: 1,
    name: "Смартфон Samsung G...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Samsung,
    top_icon: IconBundle,
    bottom_icon: IconSale,
  },
  {
    id: 2,
    name: "Смартфон Apple iphon...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Iphone,
    top_icon: IconTrade,
    bottom_icon: "",
  },
  {
    id: 3,
    name: "Наушники Apple Airpo...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Naushnik,
    top_icon: IconTrade,
    bottom_icon: "",
  },
  {
    id: 4,
    name: "Samsung Galaxy Z Fold",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Galaxy,
    top_icon: IconBundle,
    bottom_icon: IconSale,
  },
  {
    id: 5,
    name: "Смартфон Apple iphon...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Iphone,
    top_icon: IconTrade,
    bottom_icon: "",
  },
  {
    id: 6,
    name: "Смартфон Samsung G...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Samsung,
    top_icon: IconBundle,
    bottom_icon: IconSale,
  },
  {
    id: 7,
    name: "Смартфон Apple iphon...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Iphone,
    top_icon: IconTrade,
    bottom_icon: "",
  },
  {
    id: 8,
    name: "Наушники Apple Airpo...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Naushnik,
    top_icon: IconTrade,
    bottom_icon: "",
  },
  {
    id: 9,
    name: "Samsung Galaxy Z Fold",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Galaxy,
    top_icon: IconBundle,
    bottom_icon: IconSale,
  },
  {
    id: 10,
    name: "Смартфон Apple iphon...",
    price: "7 300 000 сум ",
    subprice: "от 2 435 000 сум",
    img: Iphone,
    top_icon: IconTrade,
    bottom_icon: "",
  },
];
const numbers = [
  { id: 1, item: 1, active: false },
  { id: 2, item: 2, active: true },
  { id: 3, item: 3, active: false },
  { id: 4, item: 4, active: false },
  { id: 5, item: 5, active: false },
  { id: 6, item: "...", active: false },
  { id: 7, item: 10, active: false },
];
const Products = () => {
  return (
    <div className="products">
      <div className="mainnn">
        <div className="top__menu">
          <span>Заявки</span>
          <IoIosArrowForward />
          <p>Оформить заказ</p>
        </div>
        <h3 className="title">Оформить заказ</h3>
        <form className="search__bar">
          <input type="text" placeholder="Поиск по названию товара" />
          <button type="submit" className="search__btn">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <h4 className="sub__title">Все товары (121)</h4>
        <div className="products__menu">
          {products.map((item) => {
            return (
              <div key={item.id} className="product">
                <NavLink to="/product">
                  <div className="product__img">
                    <img src={item.img} alt="" />
                    <div
                      className={
                        item.top_icon === IconBundle
                          ? "bundle__box"
                          : "icon__trade"
                      }
                    >
                      <img src={item.top_icon} alt="" className="img__bundle" />
                    </div>
                    {item.bottom_icon ? (
                      <div className="sale__box">
                        <img
                          src={item.bottom_icon}
                          alt=""
                          className="img__sale"
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </NavLink>
                <div className="product__info">
                  <p className="product__name">{item.name}</p>
                  <p className="product__price">{item.price}</p>
                  <div className="viki__box">
                    <p className="product__monthprice">{item.subprice}</p>
                    <p className="product__month">x24</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <IoIosArrowBack />
          <div className="numbers">
            {numbers.map((num) => {
              return (
                <div className={num.active ? "num_active" : "num"} key={num.id}>
                  {num.item}
                </div>
              );
            })}
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Products;
