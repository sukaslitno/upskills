export default function RatingChart({
  rating,
  bars,
}: {
  rating: number;
  bars: number[];
}) {
  const maxBar = Math.max(...bars);

  return (
    <div className="bg-white flex flex-col gap-9 h-auto items-start overflow-hidden pt-6 pb-16 px-6 rounded-[24px] w-full lg:flex-1 lg:h-[439px] lg:rounded-[36px] lg:px-16">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6 items-center">
          <img src="/icons/StarBig.svg" alt="" className="w-9 h-9" />
          <span className="font-bold text-2xl leading-none text-[#161616] lg:text-[36px]">
            Рейтинг
          </span>
        </div>
        <span className="font-bold text-[40px] leading-normal text-[#fecc00] lg:text-[56px]">
          {rating.toFixed(1).replace(".", ",")}
        </span>
      </div>

      {/* Bars */}
      <div className="flex-1 flex flex-col w-full">
        <div className="flex-1 flex items-end justify-between px-1 gap-2 lg:gap-0">
          {bars.map((height, i) => (
            <div
              key={i}
              className="bg-[#64d3ff] rounded-t-xl w-10 lg:w-12 transition-all"
              style={{ height: `${(height / maxBar) * 100}%` }}
            />
          ))}
        </div>
        <div className="bg-[#d9d9d9] h-px w-full" />
        <div className="flex items-center justify-between pt-2 px-1">
          {bars.map((_, i) => (
            <div
              key={i}
              className="flex gap-1.5 items-center justify-center w-10 lg:w-12"
            >
              <span className="font-medium text-base leading-[1.4] text-[#161616]/65">
                {i + 1}
              </span>
              <img src="/icons/Star.svg" alt="" className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
