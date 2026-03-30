"use client";

import { useRef } from "react";

const newsItems = [
  {
    date: "20 марта",
    title: "Задержки доставки из Китая в Европу",
    text: "Из-за перегрузки портов и изменения маршрутов посылки могут задерживаться на 1–5 дней",
  },
  {
    date: "12 марта",
    title: "AliExpress ускорил доставку в Европу",
    text: "Средний срок доставки сократился до 10–14 дней благодаря новым логистическим маршрутам",
  },
  {
    date: "8 марта",
    title: "Почта России обновила статусы отслеживания",
    text: "Добавлены более точные этапы доставки и улучшена детализация перемещений",
  },
  {
    date: "5 марта",
    title: "Задержки на границе Китая",
    text: "Из-за сезонной нагрузки возможны задержки отправлений до 5 дней",
  },
];

export default function NewsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-[36px] items-start px-4 py-12 w-full lg:px-20 lg:py-[86px] lg:gap-12">
      {/* Title + button row */}
      <div className="flex flex-col gap-[36px] w-full lg:flex-row lg:items-center lg:gap-4">
        <h2 className="font-bold text-[28px] leading-none text-[#161616] w-full lg:text-[56px] lg:flex-1">
          Новости доставки и логистики
        </h2>
        {/* Desktop button next to title */}
        <button className="hidden lg:flex bg-[#d8ff74] gap-4 h-[50px] items-center pl-6 pr-1 py-1 rounded-2xl shrink-0 hover:bg-[#c8ef64] active:bg-[#b8df54] transition-colors cursor-pointer">
          <span className="font-semibold text-base text-[#161616] whitespace-nowrap">
            Все службы
          </span>
          <div className="bg-white rounded-xl w-[42px] h-[42px] flex items-center justify-center shrink-0">
            <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        <div
          ref={scrollRef}
          className="flex gap-6 items-start w-full overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible lg:items-stretch"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="border-[6px] border-[#64d3ff] flex flex-col items-start justify-between p-6 rounded-[36px] shrink-0 w-[285px] min-h-[300px] lg:shrink lg:flex-1 lg:w-auto lg:h-auto lg:min-h-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="bg-white flex items-center px-4 py-2 rounded-lg">
                  <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                    {item.date}
                  </span>
                </div>
                <p className="font-bold text-2xl leading-normal text-[#161616] w-full">
                  {item.title}
                </p>
              </div>
              <p className="font-medium text-base leading-[1.4] text-[#161616]/65 w-full mt-6 lg:mt-auto">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        {/* Mobile button */}
        <button className="bg-[#d8ff74] flex gap-4 h-[50px] items-center justify-center px-6 py-1 rounded-2xl w-full hover:bg-[#c8ef64] active:bg-[#b8df54] transition-colors cursor-pointer lg:hidden">
          <span className="font-semibold text-base text-[#161616]">
            Все службы
          </span>
        </button>
      </div>
    </div>
  );
}
