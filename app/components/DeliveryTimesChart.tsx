export default function DeliveryTimesChart({
  times,
}: {
  times: { label: string; value: number; highlight?: number }[];
}) {
  const maxValue = Math.max(...times.map((t) => t.value));

  return (
    <div className="bg-white flex flex-col gap-6 items-start overflow-hidden p-6 rounded-[24px] w-full lg:flex-1 lg:rounded-[36px] lg:pt-6 lg:pb-16 lg:px-16 lg:gap-9">
      {/* Header */}
      <div className="flex gap-6 items-center lg:h-[103px]">
        <img src="/icons/Truck.svg" alt="" className="w-6 h-6 lg:w-9 lg:h-9" />
        <span className="font-bold text-lg leading-[1.1] text-[#161616] lg:text-[36px] lg:leading-none">
          Сроки доставки посылок
        </span>
      </div>

      {/* Horizontal bar chart */}
      <div className="flex gap-6 items-start w-full">
        {/* Labels */}
        <div className="flex flex-col gap-9 py-1 shrink-0">
          {times.map((time, i) => (
            <div key={i} className="flex flex-col h-6 justify-center">
              <span className="font-medium text-base leading-[1.4] text-[#161616]/65 text-center whitespace-nowrap">
                {time.label}
              </span>
            </div>
          ))}
        </div>
        {/* Bars */}
        <div className="flex-1 flex flex-col gap-9 py-1">
          {times.map((time, i) => (
            <div key={i} className="h-6 relative">
              <div
                className="bg-[#64d3ff] h-full rounded-r-lg absolute left-0 top-0"
                style={{ width: `${(time.value / maxValue) * 100}%` }}
              />
              {time.highlight && (
                <div
                  className="bg-[#d8ff74] h-full absolute left-0 top-0 rounded-r-lg"
                  style={{
                    width: `${(time.highlight / maxValue) * 100}%`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
