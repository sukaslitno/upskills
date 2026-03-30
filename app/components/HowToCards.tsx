"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const cards = [
  {
    bg: "bg-white",
    title: "Введите трек-номер",
    step: "01",
    stepColor: "text-[#b8f9fc]",
    description:
      "Укажите номер отправления, который вы получили от продавца или службы доставки",
    image: "/images/Step Image.png",
  },
  {
    bg: "bg-[#64d3ff]",
    title: "Мы найдём вашу посылку",
    step: "02",
    stepColor: "text-[#b8f9fc]",
    description:
      "Сервис автоматически определит службу доставки и покажет актуальные данные",
    image: "/images/Sub Image.png",
  },
  {
    bg: "bg-[#b8f9fc]",
    title: "Получите статус доставки",
    step: "03",
    stepColor: "text-[#64d3ff]",
    description:
      "Посмотрите, где находится посылка и когда она будет доставлена",
    image: "/images/Sub Image-1.png",
  },
];

export default function HowToCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    if (!section || !card1 || !card2 || !card3) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollZone = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollZone));

      const card2Progress = Math.max(0, Math.min(1, progress / 0.5));
      const card3Progress = Math.max(
        0,
        Math.min(1, (progress - 0.5) / 0.5)
      );

      const card1Scale = 1 - card2Progress * 0.04;
      card1.style.transform = `scale(${card1Scale})`;
      card1.style.opacity = `${1 - card2Progress * 0.15}`;

      const card2Scale = 1 - card3Progress * 0.04;
      card2.style.transform = `translateY(${(1 - card2Progress) * 100}%) scale(${card2Scale})`;
      card2.style.opacity =
        card2Progress > 0 ? `${1 - card3Progress * 0.15}` : "0";

      card3.style.transform = `translateY(${(1 - card3Progress) * 100}%)`;
      card3.style.opacity = card3Progress > 0 ? "1" : "0";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section
      ref={sectionRef}
      className="relative cards-section-height"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 py-8 lg:px-20 lg:py-16">
        <h2 className="font-bold text-[28px] leading-none text-[#161616] w-full mb-6 lg:text-[56px] lg:mb-12">
          Как отследить посылку
        </h2>
        <div className="relative flex-1 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className={`${card.bg} absolute top-0 left-0 right-0 lg:bottom-0 rounded-[24px] overflow-hidden p-4 flex flex-col gap-9 lg:rounded-[36px] lg:p-16 lg:gap-6`}
              style={{
                zIndex: i + 1,
                willChange: "transform, opacity",
                transform: i === 0 ? "scale(1)" : "translateY(100%)",
                opacity: i === 0 ? 1 : 0,
              }}
            >
              {/* Mobile layout */}
              <div className="flex flex-col gap-6 items-start w-full lg:hidden">
                {/* Header row */}
                <div className="flex items-center justify-between w-full">
                  <p className="flex-1 font-bold text-[28px] leading-none text-[#161616]">
                    {card.title}
                  </p>
                  <p
                    className={`font-bold text-[32px] leading-normal shrink-0 ${card.stepColor}`}
                  >
                    {card.step}
                  </p>
                </div>
                {/* Image */}
                <div className="relative w-full h-[207px] rounded-[16px] overflow-hidden shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 343px"
                    quality={85}
                  />
                </div>
              </div>
              {/* Mobile description */}
              <p className="font-bold text-base leading-[1.4] text-[#161616] w-full lg:hidden">
                {card.description}
              </p>

              {/* Desktop layout */}
              <div className="hidden lg:flex items-center justify-between w-full">
                <p className="font-bold text-[36px] leading-none text-[#161616]">
                  {card.title}
                </p>
                <p
                  className={`font-bold text-[86px] leading-normal ${card.stepColor}`}
                >
                  {card.step}
                </p>
              </div>
              <div className="hidden lg:flex items-end justify-between flex-1 w-full">
                <p className="font-bold text-2xl leading-[1.4] text-[#161616] w-[560px]">
                  {card.description}
                </p>
                <div className="relative rounded-2xl w-[460px] h-full overflow-hidden shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="460px"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
