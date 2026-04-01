import Image from "next/image";
import Link from "next/link";
import TrackInput from "./components/TrackInput";
import ReviewsSlider from "./components/ReviewsSlider";
import FAQ from "./components/FAQ";
import NewsSlider from "./components/NewsSlider";
import HowToCards from "./components/HowToCards";

const services = [
  { name: "Почта России", logo: "/logos/russian-post.svg", size: 65, slug: "/pochta-rossii" },
  { name: "СДЭК", logo: "/logos/sdek.svg", size: 64 },
  { name: "EMS", logo: "/logos/china-ems.svg", size: 64 },
  { name: "Cainiao", logo: "/logos/cainiao.svg", size: 64 },
  { name: "DHL", logo: "/logos/dhl.svg", size: 64 },
  { name: "Wildberries", logo: "/logos/wildberries.svg", size: 64 },
  { name: "ОЗОН", logo: "/logos/ozon.svg", size: 64 },
  { name: "Яндекс Маркет", logo: "/logos/yandex-market.svg", w: 77, h: 64 },
  { name: "Авито", logo: "/logos/avito.svg", w: 126, h: 32 },
  { name: "AliExpress", logo: "/logos/aliexpress.svg", size: 64 },
];

const benefits = [
  {
    title: "Все службы в одном месте",
    text: "Отслеживайте посылки из разных стран без переключения сервисов",
    icon: "/icons/CheckSquareOffset.svg",
  },
  {
    title: "Быстрое обновление статусов",
    text: "Получайте актуальную информацию о перемещении посылки",
    icon: "/icons/Lightning.svg",
  },
  {
    title: "Простой и понятный интерфейс",
    text: "Без лишнего — только нужная информация",
    icon: "/icons/CheckCircle.svg",
  },
];

export default function Home() {
  return (
    <div className="bg-[#ecf6fa] flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[768px] lg:max-w-none">
        {/* Hero Section */}
        <section className="p-2 lg:p-4">
          <div className="bg-[#64d3ff] flex flex-col gap-[120px] items-start p-4 rounded-3xl w-full lg:px-14 lg:py-9 lg:rounded-[36px]">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="h-6 w-[117px] relative lg:h-8 lg:w-[154px]">
                <img
                  src="/logos/logo.svg"
                  alt="Up-Skills"
                  className="w-full h-full"
                />
              </Link>
              {/* Mobile hamburger */}
              <button className="w-6 h-6 flex items-center justify-center lg:hidden">
                <img
                  src="/icons/Доставка.svg"
                  alt="Меню"
                  className="w-6 h-6"
                />
              </button>
              {/* Desktop navigation */}
              <nav className="hidden lg:flex bg-white gap-9 items-center px-6 py-4 rounded-2xl">
                <Link href="/services" className="font-semibold text-base leading-[1.1] text-[#161616]">
                  Службы доставки
                </Link>
                <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                  Каталог
                </span>
                <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                  FAQ
                </span>
              </nav>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col gap-6 items-start w-full">
              <h1 className="font-bold text-[32px] leading-none text-[#161616] w-full lg:text-[86px] lg:max-w-[912px]">
                Отследите посылку в один клик
              </h1>
              <p className="font-bold text-base leading-[1.4] text-[#161616] w-full lg:text-2xl lg:max-w-[770px]">
                Узнайте, где находится ваша посылка прямо сейчас. Поддержка
                1000+ служб доставки по всему миру
              </p>
              <TrackInput />
            </div>

            {/* Bottom info text */}
            <p className="font-medium text-xs leading-[1.4] text-[#161616]/65 w-full lg:text-base">
              Трек-номер — это уникальный код, который присваивается каждому
              отправлению. С его помощью можно узнать, где находится посылка и
              когда она будет доставлена
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="flex flex-col gap-9 px-4 py-12 lg:px-20 lg:py-[86px] lg:gap-12">
          {/* Mobile: title + button stacked. Desktop: title + button side by side */}
          <div className="flex flex-col gap-4 items-start w-full lg:flex-row lg:items-center lg:gap-4">
            <h2 className="font-bold text-[28px] leading-none text-[#161616] w-full lg:text-[56px] lg:flex-1">
              Популярные службы доставки и маркетплейсы
            </h2>
            {/* Mobile button */}
            <button className="bg-[#d8ff74] flex gap-4 h-[50px] items-center justify-center px-6 py-1 rounded-2xl w-full hover:bg-[#c8ef64] active:bg-[#b8df54] transition-colors cursor-pointer lg:hidden">
              <span className="font-semibold text-base text-[#161616]">
                Все службы
              </span>
            </button>
            {/* Desktop button with arrow */}
            <button className="hidden lg:flex bg-[#d8ff74] gap-4 h-[50px] items-center pl-6 pr-1 py-1 rounded-2xl shrink-0 hover:bg-[#c8ef64] active:bg-[#b8df54] transition-colors cursor-pointer">
              <span className="font-semibold text-base text-[#161616] whitespace-nowrap">
                Все службы
              </span>
              <div className="bg-white rounded-xl w-[42px] h-[42px] flex items-center justify-center shrink-0">
                <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
              </div>
            </button>
          </div>
          {/* Mobile: list. Desktop: grid of cards */}
          {/* Mobile list */}
          <div className="flex flex-col gap-2 items-start w-full lg:hidden">
            {services.map((service) => {
              const card = (
                <div
                  key={service.name}
                  className="bg-white flex gap-4 items-center overflow-hidden px-6 py-4 rounded-3xl w-full"
                >
                  <p className="flex-1 font-bold text-2xl leading-normal text-[#161616]">
                    {service.name}
                  </p>
                  <div
                    className="relative shrink-0"
                    style={{
                      width: service.w ?? service.size,
                      height: service.h ?? service.size,
                    }}
                  >
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
              return service.slug ? (
                <Link key={service.name} href={service.slug} className="w-full">
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </div>
          {/* Desktop grid */}
          <div className="hidden lg:flex flex-wrap gap-4 items-start w-full">
            {services.map((service, index) => {
              const card = (
                <div
                  className={`bg-white flex flex-col h-[280px] items-start justify-between overflow-hidden p-6 rounded-[36px] ${
                    index < 5 ? "w-[243px] shrink-0" : "flex-1 min-w-[200px]"
                  }`}
                >
                  <p className="font-bold text-2xl leading-normal text-[#161616] w-full">
                    {service.name}
                  </p>
                  <div className="relative shrink-0 w-[128px] h-[128px]">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
              return service.slug ? (
                <Link key={service.name} href={service.slug}>
                  {card}
                </Link>
              ) : (
                <div key={service.name}>{card}</div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="flex flex-col gap-9 px-4 py-12 lg:px-20 lg:py-[86px] lg:gap-12">
          <h2 className="font-bold text-[28px] leading-none text-[#161616] w-full lg:text-[56px]">
            Почему удобно отслеживать у нас
          </h2>
          {/* Mobile: stacked. Desktop: horizontal row */}
          <div className="flex flex-col gap-2 items-start w-full lg:flex-row lg:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#b8f9fc] flex flex-col h-[258px] items-start justify-between overflow-hidden p-6 rounded-3xl w-full relative lg:flex-1 lg:rounded-[36px]"
              >
                <img
                  src={benefit.icon}
                  alt=""
                  className="absolute bottom-0 right-0 w-[186px] h-[186px] opacity-50"
                />
                <p className="font-bold text-2xl leading-normal text-[#161616] w-full relative z-10">
                  {benefit.title}
                </p>
                <p className="font-medium text-base leading-[1.4] text-[#161616]/65 w-full relative z-10">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How To Section */}
        <HowToCards />

        {/* Info Text Section */}
        <section className="px-4 py-12 lg:px-20 lg:py-[86px]">
          <p className="text-lg leading-[1.4] text-[#161616] w-full lg:text-[48px] lg:leading-[1.1] lg:max-w-[1035px] lg:font-bold">
            <span className="text-[#64d3ff]">
              Сервис позволяет отслеживать
            </span>{" "}
            посылки по трек-номеру из любых стран мира. Вы можете узнать текущее
            местоположение отправления, историю его перемещения и статус
            доставки.
          </p>
        </section>

        {/* Data Protection Section */}
        <section className="px-4 py-12 lg:px-20 lg:py-[86px]">
          <div className="bg-[#b8f9fc] flex flex-col gap-6 items-start overflow-hidden p-6 rounded-3xl w-full lg:rounded-[36px]">
            {/* Mobile: stacked. Desktop: header + registry on same row */}
            <div className="flex gap-2 items-center w-full lg:gap-6">
              <div className="flex gap-2 items-center flex-1">
                <img
                  src="/icons/LockKey.svg"
                  alt=""
                  className="w-6 h-6 shrink-0"
                />
                <p className="flex-1 font-bold text-2xl leading-normal text-[#161616]">
                  Защита данных
                </p>
              </div>
              {/* Desktop: registry inline */}
              <p className="hidden lg:block font-medium text-[10px] leading-normal text-[#161616]/65">
                Реестр №16-22-006365
              </p>
            </div>
            <p className="font-medium text-base leading-[1.4] text-[#161616]/65 w-full">
              Сайт работает только с публичной информацией и соблюдает требования
              GDPR, CCPA/CPRA, 152-ФЗ и международных стандартов защиты
              персональных данных
            </p>
            {/* Mobile: registry below */}
            <p className="font-medium text-[10px] leading-normal text-[#161616]/65 lg:hidden">
              Реестр №16-22-006365
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="px-4 py-12 lg:px-20 lg:py-[86px]">
          <ReviewsSlider />
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* News Section */}
        <NewsSlider />

        {/* Footer */}
        <section className="px-4 pb-12 pt-6 lg:p-4">
          <div className="bg-white flex flex-col gap-9 items-start p-4 rounded-3xl w-full lg:px-16 lg:py-12 lg:rounded-[36px] lg:gap-6">
            {/* Desktop: two-column layout */}
            <div className="flex flex-col gap-6 items-start w-full lg:flex-row lg:justify-between lg:items-start">
              {/* Left column */}
              <div className="flex flex-col gap-6 items-start w-full lg:gap-9 lg:w-auto lg:flex-1">
                {/* Logo */}
                <div className="flex flex-col gap-6 items-start">
                  <Link href="/" className="h-8 w-[154px] relative block">
                    <img
                      src="/logos/logo.svg"
                      alt="Up-Skills"
                      className="w-full h-full"
                    />
                  </Link>
                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between rounded-2xl w-full lg:justify-start lg:gap-2">
                    {/* Mobile nav */}
                    <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl lg:hidden">
                      <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                        Курсы
                      </span>
                    </div>
                    <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl lg:hidden">
                      <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                        Отзывы
                      </span>
                    </div>
                    <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl lg:hidden">
                      <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                        Блог
                      </span>
                    </div>
                    {/* Desktop nav */}
                    <div className="hidden lg:flex gap-2 items-center">
                      <Link href="/services" className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl">
                        <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                          Службы доставки
                        </span>
                      </Link>
                      <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl">
                        <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                          Каталог
                        </span>
                      </div>
                      <div className="bg-[#d8ff74] flex items-center px-6 py-4 rounded-2xl">
                        <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                          FAQ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="font-medium text-[10px] leading-normal text-[#161616]/65 w-full">
                  Дисклеймер: Up-Skills предоставляет материалы только в
                  образовательных целях и не гарантирует их точность, полноту или
                  пригодность для принятия решений. Сервис не является
                  образовательным учреждением и не несёт ответственности за
                  последствия использования информации. Контент проходит
                  модерацию и публикуется при соблюдении авторских прав;
                  правообладатели могут запросить{" "}
                  <a
                    href="https://up-skills.ru/wp-content/themes/upskills/documents/pravoobladatelam.pdf"
                    target="_blank"
                    className="underline"
                  >
                    удаление
                  </a>
                  . Используя сайт, вы соглашаетесь с{" "}
                  <a
                    href="https://up-skills.ru/wp-content/themes/upskills/documents/politika_konfedencialnosti.pdf"
                    target="_blank"
                    className="underline"
                  >
                    Политикой конфиденциальности
                  </a>{" "}
                  и Пользовательским соглашением
                </p>

                {/* Payment Systems */}
                <div className="flex items-start justify-between w-full lg:justify-start lg:gap-12">
                  <div className="h-5 w-[62px] relative lg:h-8 lg:w-[99px]">
                    <img
                      src="/logos/visa.svg"
                      alt="Visa"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="h-5 w-[112px] relative lg:h-8 lg:w-[179px]">
                    <img
                      src="/logos/mastercard.svg"
                      alt="Mastercard"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="h-5 w-[73px] relative lg:h-8 lg:w-[117px]">
                    <img
                      src="/logos/mir.svg"
                      alt="Мир"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right column — contacts (desktop) */}
              <div className="flex flex-col gap-2 items-start text-[#161616] lg:items-end lg:gap-[83px] lg:shrink-0">
                <div className="flex flex-col gap-2 items-start lg:items-end">
                  <p className="font-bold text-2xl leading-normal">Контакты</p>
                  <a
                    href="mailto:info@up-skills.ru"
                    className="font-medium text-base leading-[1.4]"
                  >
                    info@up-skills.ru
                  </a>
                </div>
                <div className="flex flex-col gap-2 items-start lg:items-end">
                  {/* Mobile: "Адрес", Desktop: "Реквизиты" */}
                  <p className="font-bold text-2xl leading-normal lg:hidden">
                    Адрес
                  </p>
                  <p className="hidden lg:block font-bold text-2xl leading-normal">
                    Реквизиты
                  </p>
                  <p className="font-medium text-base leading-[1.4] w-[219px] lg:text-right">
                    ООО &quot;ГСЦИФРА&quot;
                    <br />
                    ИНН 1650405447
                    <br />
                    КПП 165001001
                    <br />
                    ОГРН 1211600061573
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
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
