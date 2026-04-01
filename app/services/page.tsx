"use client";

import { useState } from "react";
import Link from "next/link";
import TrackInput from "../components/TrackInput";

const categories = ["Все", "Почтовые службы", "Маркетплейсы", "Логистические компании"];

const services = [
  { name: "Почта России", logo: "/logos/russian-post.svg", size: 65, desktopSize: 128, slug: "/pochta-rossii", category: "Почтовые службы" },
  { name: "СДЭК", logo: "/logos/sdek.svg", size: 64, desktopSize: 128, slug: null, category: "Логистические компании" },
  { name: "EMS", logo: "/logos/china-ems.svg", size: 64, desktopSize: 128, slug: null, category: "Почтовые службы" },
  { name: "Cainiao", logo: "/logos/cainiao.svg", size: 64, desktopSize: 128, slug: null, category: "Логистические компании" },
  { name: "DHL", logo: "/logos/dhl.svg", size: 64, desktopSize: 128, slug: null, category: "Логистические компании" },
  { name: "Wildberries", logo: "/logos/wildberries.svg", size: 64, desktopSize: 128, slug: null, category: "Маркетплейсы" },
  { name: "ОЗОН", logo: "/logos/ozon.svg", size: 64, desktopSize: 128, slug: null, category: "Маркетплейсы" },
  { name: "Яндекс Маркет", logo: "/logos/yandex-market.svg", size: 64, desktopSize: 128, w: 77, slug: null, category: "Маркетплейсы" },
  { name: "Авито", logo: "/logos/avito.svg", size: 32, desktopSize: 128, w: 126, slug: null, category: "Маркетплейсы" },
  { name: "AliExpress", logo: "/logos/aliexpress.svg", size: 64, desktopSize: 128, slug: null, category: "Маркетплейсы" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) => {
    const matchCategory = activeCategory === "Все" || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#ecf6fa] flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[768px] lg:max-w-none">
        {/* Hero */}
        <section className="px-4 pt-6 pb-12 flex flex-col gap-[86px] lg:px-[72px] lg:pt-14 lg:pb-[86px]">
          {/* Header */}
          <div className="flex items-center justify-between w-full lg:h-[50px]">
            <Link href="/" className="h-6 w-[117px] relative lg:h-8 lg:w-[154px]">
              <img src="/logos/logo.svg" alt="Up-Skills" className="w-full h-full" />
            </Link>
            <button className="w-6 h-6 flex items-center justify-center lg:hidden">
              <img src="/icons/Доставка.svg" alt="Меню" className="w-6 h-6" />
            </button>
            <nav className="hidden lg:flex bg-white gap-9 items-center px-6 py-4 rounded-2xl">
              <Link href="/services" className="font-semibold text-base leading-[1.1] text-[#161616]">
                Службы доставки
              </Link>
              <span className="font-semibold text-base leading-[1.1] text-[#161616]">Каталог</span>
              <span className="font-semibold text-base leading-[1.1] text-[#161616]">FAQ</span>
            </nav>
          </div>

          {/* Title + Input */}
          <div className="flex flex-col gap-6 w-full">
            <h1 className="font-bold text-[32px] leading-none text-[#161616] lg:text-[86px] lg:max-w-[912px]">
              Все службы доставки
            </h1>
            <TrackInput />
          </div>
        </section>

        {/* Services Grid */}
        <section className="flex flex-col gap-9 px-4 py-12 lg:px-20 lg:py-[86px] lg:gap-12">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-[28px] leading-none text-[#161616] lg:text-[56px]">
              Мы отслеживаем отправления следующих почтовых служб
            </h2>

            {/* Filters + Search row */}
            <div className="flex flex-col gap-4 w-full lg:flex-row lg:gap-9">
              {/* Category tabs */}
              <div className="bg-white flex gap-0.5 h-[50px] items-center p-1 rounded-2xl overflow-x-auto scrollbar-hide shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex h-full items-center justify-center px-[15px] rounded-xl shrink-0 transition-colors cursor-pointer ${
                      activeCategory === cat ? "bg-[#d8ff74]" : ""
                    }`}
                  >
                    <span className="font-semibold text-base leading-[1.1] text-[#161616] whitespace-nowrap">
                      {cat}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="flex gap-4 items-center w-full lg:flex-1">
                <div className="bg-white flex h-[50px] items-center px-6 py-2.5 rounded-2xl w-full flex-1">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Поиск службы доставки"
                    className="w-full bg-transparent outline-none text-base font-semibold text-[#161616] placeholder:text-[#161616]/25"
                  />
                </div>
                {/* Desktop search button */}
                <button className="hidden lg:flex bg-[#d8ff74] gap-4 h-[50px] items-center pl-6 pr-1 py-1 rounded-2xl shrink-0 hover:bg-[#c8ef64] transition-colors cursor-pointer">
                  <span className="font-semibold text-base text-[#161616]">Поиск</span>
                  <div className="bg-white rounded-xl w-[42px] h-[42px] flex items-center justify-center shrink-0">
                    <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile list */}
          <div className="flex flex-col gap-2 w-full lg:hidden">
            {filtered.map((service) => {
              const card = (
                <div className="bg-white flex gap-4 items-center overflow-hidden px-6 py-4 rounded-3xl w-full">
                  <p className="flex-1 font-bold text-2xl leading-normal text-[#161616]">
                    {service.name}
                  </p>
                  <div
                    className="relative shrink-0"
                    style={{
                      width: service.w ?? service.size,
                      height: service.size,
                    }}
                  >
                    <img src={service.logo} alt={service.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              );
              return service.slug ? (
                <Link key={service.name} href={service.slug} className="w-full">{card}</Link>
              ) : (
                <div key={service.name}>{card}</div>
              );
            })}
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:flex flex-wrap gap-4 w-full">
            {filtered.map((service) => {
              const card = (
                <div className="bg-white flex flex-col h-[280px] items-start justify-between overflow-hidden p-6 rounded-[36px] w-[243px] shrink-0">
                  <p className="font-bold text-2xl leading-normal text-[#161616] w-full">
                    {service.name}
                  </p>
                  <div className="relative shrink-0 w-[128px] h-[128px]">
                    <img src={service.logo} alt={service.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              );
              return service.slug ? (
                <Link key={service.name} href={service.slug}>{card}</Link>
              ) : (
                <div key={service.name}>{card}</div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <section className="px-4 pb-12 pt-6 lg:p-4">
          <div className="bg-white flex flex-col gap-9 items-start p-4 rounded-3xl w-full lg:px-16 lg:py-12 lg:rounded-[36px] lg:gap-6">
            <div className="flex flex-col gap-6 items-start w-full lg:flex-row lg:justify-between lg:items-start">
              <div className="flex flex-col gap-6 items-start w-full lg:gap-9 lg:w-auto lg:flex-1">
                <div className="flex flex-col gap-6 items-start">
                  <Link href="/" className="h-8 w-[154px] relative block">
                    <img src="/logos/logo.svg" alt="Up-Skills" className="w-full h-full" />
                  </Link>
                  <div className="flex items-center justify-between rounded-2xl w-full lg:justify-start lg:gap-2">
                    <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl lg:hidden">
                      <span className="font-semibold text-base leading-[1.1] text-[#161616]">Курсы</span>
                    </div>
                    <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl lg:hidden">
                      <span className="font-semibold text-base leading-[1.1] text-[#161616]">Отзывы</span>
                    </div>
                    <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl lg:hidden">
                      <span className="font-semibold text-base leading-[1.1] text-[#161616]">Блог</span>
                    </div>
                    <div className="hidden lg:flex gap-2 items-center">
                      <Link href="/services" className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl">
                        <span className="font-semibold text-base leading-[1.1] text-[#161616]">Службы доставки</span>
                      </Link>
                      <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl">
                        <span className="font-semibold text-base leading-[1.1] text-[#161616]">Каталог</span>
                      </div>
                      <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl">
                        <span className="font-semibold text-base leading-[1.1] text-[#161616]">FAQ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-[10px] leading-normal text-[#161616]/65 w-full">
                  Дисклеймер: Up-Skills предоставляет материалы только в образовательных целях и не гарантирует их точность, полноту или пригодность для принятия решений. Сервис не является образовательным учреждением и не несёт ответственности за последствия использования информации. Контент проходит модерацию и публикуется при соблюдении авторских прав; правообладатели могут запросить{" "}
                  <a href="https://up-skills.ru/wp-content/themes/upskills/documents/pravoobladatelam.pdf" target="_blank" className="underline">удаление</a>
                  . Используя сайт, вы соглашаетесь с{" "}
                  <a href="https://up-skills.ru/wp-content/themes/upskills/documents/politika_konfedencialnosti.pdf" target="_blank" className="underline">Политикой конфиденциальности</a>
                  {" "}и Пользовательским соглашением
                </p>
                <div className="flex items-start justify-between w-full lg:justify-start lg:gap-12">
                  <div className="h-5 w-[62px] lg:h-8 lg:w-[99px]"><img src="/logos/visa.svg" alt="Visa" className="w-full h-full" /></div>
                  <div className="h-5 w-[112px] lg:h-8 lg:w-[179px]"><img src="/logos/mastercard.svg" alt="Mastercard" className="w-full h-full" /></div>
                  <div className="h-5 w-[73px] lg:h-8 lg:w-[117px]"><img src="/logos/mir.svg" alt="Мир" className="w-full h-full" /></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start text-[#161616] lg:items-end lg:gap-[83px] lg:shrink-0">
                <div className="flex flex-col gap-2 items-start lg:items-end">
                  <p className="font-bold text-2xl leading-normal">Контакты</p>
                  <a href="mailto:info@up-skills.ru" className="font-medium text-base leading-[1.4]">info@up-skills.ru</a>
                </div>
                <div className="flex flex-col gap-2 items-start lg:items-end">
                  <p className="font-bold text-2xl leading-normal lg:hidden">Адрес</p>
                  <p className="hidden lg:block font-bold text-2xl leading-normal">Реквизиты</p>
                  <p className="font-medium text-base leading-[1.4] w-[219px] lg:text-right">
                    ООО &quot;ГСЦИФРА&quot;<br />ИНН 1650405447<br />КПП 165001001<br />ОГРН 1211600061573
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium text-base leading-normal text-[#161616] w-full">
              <span className="opacity-65">&copy; 2026</span>
              <span className="opacity-65">krivo studio</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
