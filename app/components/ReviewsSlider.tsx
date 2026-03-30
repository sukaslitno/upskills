"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Юлия Пронина",
    date: "30.03.2026",
    region: "Регион Москва",
    rating: 5,
    text: "Посылка нашлась сразу, статус показался без задержек. Очень удобно, что всё в одном месте",
    image: "/images/Reviewer Image.png",
  },
  {
    name: "Алексей Смирнов",
    date: "28.03.2026",
    region: "Санкт-Петербург",
    rating: 5,
    text: "Отличный сервис! Отследил посылку из Китая за секунду. Рекомендую всем, кто заказывает с AliExpress",
    image: "/images/Profile Image.png",
  },
  {
    name: "Мария Козлова",
    date: "25.03.2026",
    region: "Новосибирск",
    rating: 4,
    text: "Удобный интерфейс, всё понятно. Статусы обновляются быстро, посылка пришла вовремя",
    image: "/images/Profile Image-1.png",
  },
  {
    name: "Дмитрий Волков",
    date: "22.03.2026",
    region: "Екатеринбург",
    rating: 5,
    text: "Пользуюсь постоянно для отслеживания заказов с маркетплейсов. Все службы в одном месте — очень удобно",
    image: "/images/Profile Image-2.png",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  if (filled) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8.00004 1.33337L10.06 5.50671L14.6667 6.18004L11.3334 9.42671L12.12 14.0134L8.00004 11.8467L3.88004 14.0134L4.66671 9.42671L1.33337 6.18004L5.94004 5.50671L8.00004 1.33337Z"
          fill="#FFB800"
          stroke="#FFB800"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8.00004 1.33337L10.06 5.50671L14.6667 6.18004L11.3334 9.42671L12.12 14.0134L8.00004 11.8467L3.88004 14.0134L4.66671 9.42671L1.33337 6.18004L5.94004 5.50671L8.00004 1.33337Z"
        fill="#FFB800"
        stroke="#FFB800"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="8" y="0" width="8" height="16" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > current ? 1 : -1));
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 6000);
  }, [next]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % reviews.length);
      } else {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
      }
      startAutoplay();
    }
  };

  const review = reviews[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full lg:gap-0">
      <div
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex gap-3 items-center w-full lg:gap-[86px] lg:items-end"
          >
            {/* Image */}
            <div className="relative rounded-2xl shrink-0 w-[93px] h-[178px] overflow-hidden lg:w-[400px] lg:h-[600px] lg:rounded-[36px]">
              <Image
                src={review.image}
                alt={review.name}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 400px, 93px"
                quality={85}
              />
            </div>
            {/* Text content */}
            <div className="flex flex-1 flex-col gap-3 items-start justify-center min-w-0 lg:gap-[86px]">
              <div className="flex flex-col gap-2 items-start w-full lg:gap-3 lg:flex-col">
                {/* Name and meta */}
                <div className="flex flex-col gap-2 items-start w-full lg:gap-3">
                  <p className="font-bold text-base leading-[1.4] text-[#161616] lg:text-2xl">
                    {review.name}
                  </p>
                  <div className="flex gap-2 items-center">
                    <span className="text-[10px] font-medium text-[#161616]/65 lg:text-base lg:leading-[1.4]">
                      {review.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#161616]/65" />
                    <span className="text-[10px] font-medium text-[#161616]/65 lg:text-base lg:leading-[1.4]">
                      {review.region}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} filled={star <= review.rating} />
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-[#161616]/65 lg:text-base lg:leading-[1.4]">
                      {review.rating}/5
                    </span>
                  </div>
                </div>
                {/* Review text */}
                <p className="font-bold text-lg leading-[1.1] text-[#161616] lg:text-[48px] lg:leading-[1.1]">
                  {review.text}
                </p>
              </div>
              {/* Pagination */}
              <div className="hidden lg:flex gap-2 items-start">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      goTo(index);
                      startAutoplay();
                    }}
                    className={`w-[50px] h-[50px] flex items-center justify-center rounded-2xl cursor-pointer transition-all ${
                      index === current
                        ? "bg-white border-2 border-[#161616]"
                        : "bg-white border-2 border-transparent"
                    }`}
                  >
                    <span className="font-bold text-2xl text-[#161616]">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Mobile pagination */}
      <div className="flex gap-2 items-start w-full lg:hidden">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goTo(index);
              startAutoplay();
            }}
            className={`flex-1 h-10 flex items-center justify-center rounded-2xl cursor-pointer transition-all ${
              index === current
                ? "bg-white border-2 border-[#161616]"
                : "bg-white border-2 border-transparent"
            }`}
          >
            <span className="font-bold text-lg text-[#161616]">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
