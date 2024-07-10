import "./index.css";
//
import { Logo } from "../src/assets/logo";
import { HeaderIcon } from "./assets/header-icon";
import { HeaderBox } from "./assets/header-box";
// component
import { ProductCard } from "../src/component/product-card";
import { MainCard } from "../src/component/main-card";

import { nanoid } from "nanoid";

function App() {
  return (
    <>
      <section className="header">
        {" "}
        <div className="container pt-[20px] flex">
          <Logo />
          <i className="text-gray-500 w-[180px] text-sm/[14px] ml-[15px] pt-[9px] ">
            Колбасы и мясные деликатесы
          </i>
          <span className="flex ml-[500px]">
            <HeaderIcon />
            <div className="ml-[15px]">
              <i className="text-gray-500 text-sm/[15px]">Товаров: 3 </i>
              <b className="text-blue-950 flex text-sm">6 540 ₽</b>
            </div>
          </span>
        </div>
        {/* <div className=" ">
          <ul className="container flex gap-[30px]">
            <li>О ресноте </li>
            <li> Каталог </li>
            <li> Наши магазины </li>
            <li> Контакты</li>
          </ul>
        </div> */}
        <div
          style={{ backgroundImage: `url(/banner.png)` }}
          className="w-[1518px] h-[540px] bg-cover bg-center bg-no-repeat mt-[20px]"
        >
          <div className="container">
            <h1 className="text-white text-3xl pt-[100px] pb-[20px]">
              Истина в качестве
            </h1>

            <p className="text-white font-sm/[18px] w-[325px] font-serif">
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>
            <button className="mt-[60px] rounded-none bg-blue-950 text-white px-[50px] py-[10px]">
              Купить
            </button>
          </div>
        </div>
      </section>
      <section className="main-card">
        <div className=" pt-[30px]">
          <MainCard />
        </div>
      </section>
    </>
  );
}

export default App;
