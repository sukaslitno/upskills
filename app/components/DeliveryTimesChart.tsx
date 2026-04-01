export default function DeliveryTimesChart({
  times,
}: {
  times: { label: string; value: number; highlight?: number }[];
}) {
  const maxValue = Math.max(...times.map((t) => t.value));

  return (
    <div className="bg-white flex flex-col gap-9 items-start overflow-hidden pt-6 pb-16 px-6 rounded-[24px] w-full lg:flex-1 lg:rounded-[36px] lg:px-16">
      {/* Header */}
      <div className="flex gap-6 items-center h-auto lg:h-[103px]">
        <img src="/icons/Truck.svg" alt="" className="w-9 h-9" />
        <span className="font-bold text-2xl leading-none text-[#161616] lg:text-[36px] lg:leading-none">
          Сроки доставки посылок
        </span>
      </div>

      {/* Horizontal bar chart */}
      <div className="flex flex-col gap-6 items-start w-full">
        {times.map((time, i) => (
          <div key={i} className="flex gap-6 items-center w-full">
            <span className="font-medium text-sm leading-[1.4] text-[#161616]/65 w-20 shrink-0 text-center lg:text-base lg:w-24">
              {time.label}
            </span>
            <div className="flex-1 h-6 relative">
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
          </div>
        ))}
      </div>
    </div>
  );
}
