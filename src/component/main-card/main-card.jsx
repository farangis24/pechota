import React from "react";

export const MainCard = () => {
  return (
    <>
      <div className="container pb-[20px] flex gap-[10px]">
        <div
          style={{ backgroundImage: `url(/main-img1.png)` }}
          className="w-full  bg-no-repeat "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[88px]  ml-[10px] mb-[20px]">
              Колбасные и мясные изделия
            </p>
            <p className="text-white text-[16px] ml-[10px]">
              Цена от 150 ₽ <br />
              <i> 56 товаров</i>
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/main-img2.png)` }}
          className="w-full bg-no-repeat "
        >
          <div>
            <p className="font-semibold text-[18px] w-[200px] text-white pt-[50px]  ml-[10px] mb-[20px]">
              Молочные продукты
            </p>
            <p className="text-white w-[220px] text-[16px] ml-[10px]">
              <br />
              <i>
                {" "}
                Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко,
                Сметана, Творог, Творожная масса
              </i>
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/main-img3.png)` }}
          className="w-full bg-no-repeat "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[18px]  ml-[10px] mb-[20px]">
              Морепродукты
            </p>
            <p className="text-white text-[16px] ml-[10px]">
              <i> Рыба, Икра, Креветки</i>
            </p>
          </div>
        </div>
      </div>
      <div className="container flex">
        <div
          style={{ backgroundImage: `url(/main-img4.png)` }}
          className="w-full bg-no-repeat h-[260px] "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[18px]  ml-[10px] mb-[20px]">
              Пиво
            </p>
            <p className="text-white text-[16px] ml-[10px]">
              <i> Крафтовое пиво</i>
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/main-img5.png)` }}
          className="w-full bg-no-repeat h-[260px] "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[28px]  ml-[25px] mb-[20px]">
              Замороженные продукты
            </p>
            <p className="text-white  text-[16px] w-[225px] ml-[25px]">
              Замороженные овощи, Замороженные фркуты
            </p>
          </div>
        </div>
      </div>
      <div className="container flex pt-[20px]">
        <div
          style={{ backgroundImage: `url(/main-img6.png)` }}
          className="w-full bg-no-repeat h-[260px] "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[35px]  ml-[25px] mb-[20px]">
              Мёд{" "}
            </p>
            <p className="text-white  text-[16px] w-[225px] ml-[25px]">
              Мед горный 0,25 кг, Мед с облепихой 0,25 кг, Мед с черникой 0,25
              кг, Мед с разнотравья 0,25 кг, Мед цветочный 0,25 кг
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/main-img7.png)` }}
          className="w-full bg-no-repeat h-[260px] "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[40px]  ml-[25px] mb-[20px]">
              Свежие овощи{" "}
            </p>
            <p className="text-white  text-[16px] w-[225px] ml-[25px]">
              Картофель, Огурцы, Помидоры{" "}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/main-img8.png)` }}
          className="w-full bg-no-repeat h-[260px] "
        >
          <div>
            <p className="font-semibold text-[23px] w-[200px] text-white pt-[35px]  ml-[25px] mb-[20px]">
              Свежие фрукты{" "}
            </p>
            <p className="text-white  text-[16px] w-[225px] ml-[25px]">
              Сезонные яблоки{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
