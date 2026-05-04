import svgPaths from "./svg-mk4b8tldo5";
import imgImage from "./1be263d120b563f150451ac6cfb6291ac8e8042f.png";

function NumberContainer() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#00473f] text-[16px] text-left tracking-[1px] underline w-[min-content]">Enter company information</p>
    </div>
  );
}

function AccordionExpanded() {
  return (
    <div className="bg-[#e5eeed] relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer />
          <TextContainer />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] text-left tracking-[1px] w-full">{`A new page will open where you will enter your company's name and address, then click Next to determine whether your business is exempt from the mandate.`}</p>
    </div>
  );
}

function Screenshot() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <div className="-translate-x-1/2 absolute h-[226.734px] left-1/2 top-[10px] w-[328px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.69%] left-[-62.42%] max-w-none top-[-8.82%] w-[170.37%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins:Italic',sans-serif] italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Enter company information preview</p>
      </div>
    </div>
  );
}

function ScreenshotContainer() {
  return (
    <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
          <Screenshot />
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text />
      <ScreenshotContainer />
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step />
    </div>
  );
}

export default function AccordionHover() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-start relative size-full" data-name="Accordion Hover">
      <AccordionExpanded />
      <div className="bg-white h-0 opacity-0 relative shrink-0 w-full" data-name="Step=Step 2">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
            <Steps />
          </div>
        </div>
      </div>
    </button>
  );
}