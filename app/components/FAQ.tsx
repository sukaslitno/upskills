"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Где взять трек-номер?",
    answer:
      "Трек-номер выдает продавец или служба доставки после отправки заказа. Обычно он доступен в личном кабинете или в письме с подтверждением",
  },
  {
    question: "Почему посылка не отслеживается?",
    answer:
      "Возможно, данные ещё не обновились в системе. Попробуйте проверить позже — иногда это занимает до 24 часов после отправки",
  },
  {
    question: "Что означает статус «В пути»?",
    answer:
      "Статус «В пути» означает, что посылка покинула точку отправления и находится в процессе доставки к следующему пункту обработки",
  },
  {
    question: "Как узнать, какая служба доставляет посылку?",
    answer:
      "Наш сервис автоматически определяет службу доставки по формату трек-номера. Также эту информацию можно найти в подтверждении заказа",
  },
  {
    question: "Сколько времени идет посылка?",
    answer:
      "Сроки доставки зависят от службы и маршрута. Внутренние отправления — 2–7 дней, международные — от 7 до 30 дней",
  },
  {
    question: "Можно ли отслеживать международные отправления?",
    answer:
      "Да, наш сервис поддерживает отслеживание посылок из более чем 200 стран мира через 1000+ служб доставки",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="faq" className="flex flex-col gap-[36px] items-start px-4 py-12 w-full lg:px-20 lg:py-[86px] lg:gap-12 scroll-mt-4">
      <h2 className="font-bold text-[28px] leading-none text-[#161616] w-full lg:text-[56px]">
        Частые вопросы
      </h2>
      <div className="flex flex-col gap-4 items-start w-full">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col gap-3 items-start overflow-hidden p-6 rounded-3xl w-full lg:rounded-[36px]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="flex gap-3 items-center w-full cursor-pointer text-left"
            >
              <p className="flex-1 font-bold text-lg leading-[1.1] text-[#161616] lg:text-2xl lg:leading-normal">
                {item.question}
              </p>
              <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                {openIndex === index ? (
                  <img src="/icons/X.svg" alt="" className="w-6 h-6" />
                ) : (
                  <img src="/icons/Plus.svg" alt="" className="w-6 h-6" />
                )}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden w-full"
                >
                  <p className="font-medium text-base leading-[1.4] text-[#161616]/65">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
