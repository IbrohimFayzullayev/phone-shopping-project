import React, { useState } from "react";
import "./sass/menu.scss";

const menujson = [
  {
    id: 1,
    icon: "bi-house",
    name: "Главная",
  },
  {
    id: 2,
    icon: "bi-menu-up",
    name: "Заказы",
  },
  {
    id: 3,
    icon: "bi-bag-dash",
    name: "Товары",
  },
  {
    id: 4,
    icon: "bi-star",
    name: "Отзывы",
  },
  {
    id: 5,
    icon: "bi-cart-dash",
    name: "Оформить заказ",
  },
];

const Menu = () => {
  const [active, setActive] = useState(5);
  return (
    <div className="menu">
      {menujson.map((menu) => {
        return (
          <div
            className={`menu__item  ${menu.id === active && "click__item"}`}
            key={menu.id}
            onClick={(e) => {
              setActive(menu.id);
            }}
          >
            <i className={`bi ${menu.icon}`}></i>
            <p>{menu.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
