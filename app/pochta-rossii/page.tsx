import Link from "next/link";
import Image from "next/image";
import TrackInput from "../components/TrackInput";
import ReviewsSlider from "../components/ReviewsSlider";
import FAQ from "../components/FAQ";
import NewsSlider from "../components/NewsSlider";
import RatingChart from "../components/RatingChart";
import DeliveryTimesChart from "../components/DeliveryTimesChart";

const service = {
  name: "Почта России",
  description:
    "Российская государственная компания, оператор российской почтовой связи общего пользования",
  logo: "/logos/russian-post.svg",
  phone: "8 (800) 100-00-00",
  website: "www.почта-россии.рф",
  websiteUrl: "https://www.pochta.ru/",
  rating: 4.8,
  ratingBars: [82, 126, 92, 152, 114],
  deliveryTimes: [
    { label: "0-14 дней", value: 82 },
    { label: "15-45дней", value: 126, highlight: 45 },
    { label: "46-90 дней", value: 92 },
    { label: "90+ дней", value: 177, highlight: 40 },
  ],
};

export default function PochtaRossiiPage() {
  return (
    <div className="bg-[#ecf6fa] flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[768px] lg:max-w-none">
        {/* Hero Section */}
        <section className="p-2 lg:p-4">
          <div className="bg-[#64d3ff] flex flex-col gap-[120px] items-start p-4 rounded-3xl w-full lg:px-14 lg:py-9 lg:rounded-[36px]">
            {/* Header */}
            <div className="flex items-center justify-between w-full lg:h-[50px]">
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
                <Link
                  href="/services"
                  className="font-semibold text-base leading-[1.1] text-[#161616]"
                >
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

            {/* Content Section */}
            <div className="flex flex-col gap-16 items-start w-full">
              {/* Info */}
              <div className="flex flex-col gap-6 items-start w-full lg:gap-6">
                <div className="flex gap-6 items-start w-full lg:gap-[120px]">
                  <div className="flex-1 flex flex-col gap-6">
                    <h1 className="font-bold text-[32px] leading-none text-[#161616] lg:text-[86px] lg:max-w-[912px]">
                      {service.name}
                    </h1>
                    <p className="font-bold text-base leading-[1.4] text-[#161616] lg:text-2xl lg:max-w-[770px]">
                      {service.description}
                    </p>
                  </div>
                  {/* Desktop logo */}
                  <div className="hidden lg:block relative shrink-0 w-[128px] h-[128px]">
                    <Image
                      src={service.logo}
                      alt={service.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Contact buttons — mobile: full width stacked, desktop: inline */}
                <div className="flex flex-col gap-2 items-start w-full lg:flex-row lg:w-auto">
                  <a
                    href={`tel:${service.phone.replace(/[^+\d]/g, "")}`}
                    className="bg-[#d8ff74] flex gap-3 h-[50px] items-center justify-center px-6 py-4 rounded-2xl w-full lg:w-auto hover:bg-[#c8ef64] transition-colors"
                  >
                    <img src="/icons/Phone.svg" alt="" className="w-6 h-6" />
                    <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                      {service.phone}
                    </span>
                  </a>
                  <a
                    href={service.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d8ff74] flex gap-3 h-[50px] items-center justify-center px-6 py-4 rounded-2xl w-full lg:w-auto hover:bg-[#c8ef64] transition-colors"
                  >
                    <img
                      src="/icons/GlobeSimple.svg"
                      alt=""
                      className="w-6 h-6"
                    />
                    <span className="font-semibold text-base leading-[1.1] text-[#161616]">
                      {service.website}
                    </span>
                  </a>
                </div>
              </div>

              {/* Track Input */}
              <TrackInput />
            </div>
          </div>
        </section>

        {/* Rating & Delivery Times */}
        <section className="flex flex-col gap-6 px-4 py-12 lg:flex-row lg:gap-6 lg:px-20 lg:py-[86px]">
          <RatingChart rating={service.rating} bars={service.ratingBars} />
          <DeliveryTimesChart times={service.deliveryTimes} />
        </section>

        {/* Reviews */}
        <section className="px-4 py-12 lg:px-20 lg:py-[86px]">
          <ReviewsSlider />
        </section>

        {/* FAQ */}
        <FAQ />

        {/* News */}
        <NewsSlider />

        {/* Footer */}
        <section className="px-4 pb-12 pt-6 lg:p-4">
          <div className="bg-white flex flex-col gap-9 items-start p-4 rounded-3xl w-full lg:px-16 lg:py-12 lg:rounded-[36px] lg:gap-6">
            <div className="flex flex-col gap-6 items-start w-full lg:flex-row lg:justify-between lg:items-start">
              <div className="flex flex-col gap-6 items-start w-full lg:gap-9 lg:w-auto lg:flex-1">
                <div className="flex flex-col gap-6 items-start">
                  <Link href="/" className="h-8 w-[154px] relative block">
                    <img
                      src="/logos/logo.svg"
                      alt="Up-Skills"
                      className="w-full h-full"
                    />
                  </Link>
                  <div className="flex items-center justify-between rounded-2xl w-full lg:justify-start lg:gap-2">
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
                <div className="flex items-start justify-between w-full lg:justify-start lg:gap-12">
                  <div className="h-5 w-[62px] relative lg:h-8 lg:w-[99px]">
                    <img src="/logos/visa.svg" alt="Visa" className="w-full h-full" />
                  </div>
                  <div className="h-5 w-[112px] relative lg:h-8 lg:w-[179px]">
                    <img src="/logos/mastercard.svg" alt="Mastercard" className="w-full h-full" />
                  </div>
                  <div className="h-5 w-[73px] relative lg:h-8 lg:w-[117px]">
                    <img src="/logos/mir.svg" alt="Мир" className="w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start text-[#161616] lg:items-end lg:gap-[83px] lg:shrink-0">
                <div className="flex flex-col gap-2 items-start lg:items-end">
                  <p className="font-bold text-2xl leading-normal">Контакты</p>
                  <a href="mailto:info@up-skills.ru" className="font-medium text-base leading-[1.4]">
                    info@up-skills.ru
                  </a>
                </div>
                <div className="flex flex-col gap-2 items-start lg:items-end">
                  <p className="font-bold text-2xl leading-normal lg:hidden">Адрес</p>
                  <p className="hidden lg:block font-bold text-2xl leading-normal">Реквизиты</p>
                  <p className="font-medium text-base leading-[1.4] w-[219px] lg:text-right">
                    ООО &quot;ГСЦИФРА&quot;<br />
                    ИНН 1650405447<br />
                    КПП 165001001<br />
                    ОГРН 1211600061573
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
