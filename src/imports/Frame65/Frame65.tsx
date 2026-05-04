import svgPaths from "./svg-kaiwcpf3kj";

function Group() {
  return (
    <div className="absolute h-[13.125px] left-[0.97px] top-[1.44px] w-[14.063px]" data-name="Group">
      <div className="absolute inset-[-7.62%_-7.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0625 15.125">
          <g id="Group">
            <path d="M1 7.5625H15.0625" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2fa57400} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-y-1/2 absolute h-[13.125px] right-[0.97px] top-1/2 w-[14.063px]" data-name="Group">
      <div className="absolute inset-[-7.62%_-7.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0625 15.125">
          <g id="Group">
            <g id="Vector">
              <path d="M1 7.5625H15.0625" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M1 7.5625H15.0625" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.p2fa57400} stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2fa57400} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[24px]" data-name="Arrow">
      <Group1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0" data-name="Default Button">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Button Text</p>
        </div>
        <Arrow />
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0" data-name="Hover Button">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00473f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline">Button Text</p>
        </div>
        <Arrow1 />
      </div>
    </div>
  );
}