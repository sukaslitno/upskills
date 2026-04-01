export default function RatingChart({
  rating,
  bars,
}: {
  rating: number;
  bars: number[];
}) {
  const maxBar = Math.max(...bars);

  return (
    <div className="bg-white flex flex-col gap-6 items-start overflow-hidden p-6 rounded-[24px] w-full lg:flex-1 lg:h-[439px] lg:rounded-[36px] lg:pt-6 lg:pb-16 lg:px-16 lg:gap-9">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6 items-center">
          <img src="/icons/StarBig.svg" alt="" className="w-6 h-6 lg:w-9 lg:h-9" />
          <span className="font-bold text-lg leading-[1.1] text-[#161616] lg:text-[36px] lg:leading-none">
            Рейтинг
          </span>
        </div>
        <span className="font-bold text-[32px] leading-normal text-[#fecc00] lg:text-[56px]">
          {rating.toFixed(1).replace(".", ",")}
        </span>
      </div>

      {/* Bars */}
      <div className="flex-1 flex flex-col w-full min-h-[180px]">
        <div className="flex-1 flex items-end justify-between px-1">
          {bars.map((height, i) => (
            <div
              key={i}
              className="bg-[#64d3ff] rounded-t-xl w-9 lg:w-12"
              style={{ height: `${(height / maxBar) * 100}%` }}
            />
          ))}
        </div>
        <div className="bg-[#d9d9d9] h-px w-full" />
        <div className="flex items-center justify-between pt-2 px-1">
          {bars.map((_, i) => (
            <div
              key={i}
              className="flex gap-1.5 items-center justify-center w-9 lg:w-12"
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
