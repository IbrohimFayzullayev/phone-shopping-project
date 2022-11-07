import React from "react";
import "./sass/product.scss";
import { IoIosArrowForward } from "react-icons/io";
import Samsung from "../images/samsung img.svg";
import IconBundle from "../images/icon-bundle.svg";
import IconSale from "../images/Vector.svg";
import IconTrade from "../images/icon-trade in.svg";
import IconSaleGreen from "../images/icon-sale-green.svg";

const stocklist = [
  {
    id: 1,
    title: "Обменяй свой старый айфон и получи скидку на новый",
    subtitle: "-400 000 сум",
    icon: IconTrade,
    active: false,
  },
  {
    id: 2,
    title: "Наушники в подарок",
    subtitle: "Apple EarPods",
    icon: IconBundle,
    active: true,
  },
  {
    id: 3,
    title: "Скидка 20% на смартфоны",
    subtitle: "-10 000 сум",
    icon: IconSale,
    active: true,
  },
];
const Product = () => {
  return (
    <div className="product">
      <div className="mainnn">
        <div className="top__menu">
          <span>Заявки</span>
          <IoIosArrowForward />
          <p>Оформить заказ</p>
          <IoIosArrowForward />
          <p className="current">
            Смартфон Apple iPhone 11 128 Gb Slim Box черный
          </p>
        </div>
        <div className="info">
          <h2 className="title">
            Смартфон Apple iPhone 11 128 Gb Slim Box черный
          </h2>
          <div className="product__box">
            <div className="product__box--img">
              <div className="icons">
                <div className={"icon__trade"}>
                  <img src={IconTrade} alt="" />
                </div>
                <div className={"bundle__box"}>
                  <img src={IconBundle} alt="" />
                </div>
                <div className={"sale__box"}>
                  <img src={IconSale} alt="" />
                </div>
                <div className={"green__sale"}>
                  <img src={IconSaleGreen} alt="" />
                </div>
              </div>
              <img src={Samsung} alt="" />
              <div className="circle">
                <div className="circle__box circle__clicked"></div>
                <div className="circle__box"></div>
                <div className="circle__box"></div>
                <div className="circle__box"></div>
                <div className="circle__box"></div>
                <div className="circle__box"></div>
              </div>
            </div>
            <div className="product__box--info">
              <p className="price__name">Цена телефона</p>
              <p className="price__sum">6 000 000 сум </p>
              <div className="line"></div>
              <p className="price__name">Общая цена (с наценкой)</p>
              <div className="sale__price">
                <p className="price__sum">7 300 000 сум </p>
                <div className="price__month">
                  <h3>2 433 333 сум</h3>
                  <p>x3</p>
                </div>
              </div>
              <div className="month__prices">
                <div className="month__price price__active">3 мес</div>
                <span></span>
                <div className="month__price price__noactive">6 мес</div>
                <span></span>
                <div className="month__price price__noactive">12 мес</div>
                <span></span>
                <div className="month__price price__noactive">24 мес</div>
              </div>
              <div className="percent">
                <span>Наценка:</span>
                <p>5%</p>
              </div>
              <div className="line"></div>
              <p className="price__name">Общие характеристики</p>
              <p className="text">
                Тип: моноблок (классический) <br /> Стандарт: 2G, 3G, 4G (LTE),
                5G <br />
                Операционная система: iOS 14
              </p>
              <div className="sub__info">
                <p>Показать все</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="stock">
            <h2 className="stock__title">Акции</h2>
            <div className="stock__list">
              {stocklist.map((item) => {
                return (
                  <div key={item.id} className="stock__box">
                    <div className="stock__left">
                      <div
                        className={
                          item.id === 1
                            ? "icon__trade"
                            : item.id === 2
                            ? "bundle__box"
                            : "sale__box"
                        }
                      >
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="stock__info">
                        <h4 className="stock__name">{item.title}</h4>
                        <p className="stock__subtitle">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="wrapper">
                      <input
                        type="checkbox"
                        defaultChecked={item.active ? "checked" : ""}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="stock__box stock__sub">
                <div className="stock__left">
                  <div className="green__sale">
                    <img src={IconSaleGreen} alt="" />
                  </div>
                  <div className="stock__info">
                    <h4 className="stock__name">Скидка на айфоны</h4>
                    <p className="stock__imei">IMEI 012345678901234</p>
                    <p className="stock__subtitle">-10 000 сум</p>
                  </div>
                </div>
                <div className="wrapper">
                  <input type="checkbox" checked />
                </div>
              </div>
            </div>
            <button className="add__cart">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
