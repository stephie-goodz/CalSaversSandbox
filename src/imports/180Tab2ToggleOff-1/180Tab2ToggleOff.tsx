import svgPaths from "./svg-vio3lo7f8j";
import imgScreenshot from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";

function TabText() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Tab Text">
      <p className="leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase">360° Integration</p>
      <p className="leading-[24px] relative shrink-0 text-[#00594f] text-[16px] tracking-[1px]">Overview</p>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Info">
        <div className="absolute inset-[-0.03%_0.02%_0.02%_0.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9915 32.0058">
            <path clipRule="evenodd" d={svgPaths.paad2080} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <TabText />
    </div>
  );
}

function Spacer() {
  return (
    <div className="h-px opacity-0 relative shrink-0 w-full" data-name="Spacer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-px relative size-full">
          <div className="bg-white h-[2px] relative shrink-0 w-full" data-name="Spacer" />
        </div>
      </div>
    </div>
  );
}

function TabText1() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-name="Tab Text">
      <p className="leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase">Setup Guide</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] text-black tracking-[1px]">How to integrate your payroll</p>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Setup">
        <div className="absolute inset-[-0.01%_-0.03%_-0.03%_-0.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0215 32.0131">
            <path clipRule="evenodd" d={svgPaths.p5836b00} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <TabText1 />
    </div>
  );
}

function Spacer1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Spacer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-px relative size-full">
          <div className="bg-white h-[3px] relative shrink-0 w-full" data-name="Spacer" />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-start mb-[-1px] relative shrink-0 w-[996px] z-[2]" data-name="Tabs">
      <button className="bg-[#e5eeed] content-stretch cursor-pointer flex flex-col h-[72px] items-start justify-center min-w-[300px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[300px]" data-name="TabSetup">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <TextIcon />
        <Spacer />
      </button>
      {/* TODO: Remove 'hidden' class below to re-enable this tab when Setup Guide content is ready */}
      <div className="hidden bg-white content-stretch flex flex-col h-[72px] items-start justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="TabSetup">
        <div aria-hidden="true" className="absolute border-[rgba(0,89,79,0.5)] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <TextIcon1 />
        <Spacer1 />
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div className="col-1 ml-[21px] mt-px relative row-1 size-[22px]" data-name="Switch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Switch">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 1" r="11" />
          <g id="Frame 1344">
            <path d="M6.99995 11.6562L9.51411 14.1704L15.171 8.51355" id="Rectangle 47" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#00594f] col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
      <Switch />
    </button>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
      <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Need a more detailed walk-through?</p>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] min-w-0 break-words">Toggle Detailed Instructions</p>
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
      <p className="flex-1 font-['Poppins',sans-serif] font-medium leading-[32px] not-italic relative text-[20px] text-black tracking-[1px] min-w-0 break-words">Setup guide to integrate payroll with a 180° integration</p>
      <Frame />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Log into the CalSavers employer dashboard to start the integration set up</p>
    </div>
  );
}

function AccordionExpanded() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer />
          <TextContainer />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
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
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">Log in</span>
          <span className="leading-[24px]">{` to the employer portal and select “Payroll Provider” on the left-hand side of the screen under Dashboard.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">Select “Add New” to start the payroll integration process.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">Choose “I have a different payroll provider” and search for your payroll vendor in the vendor list. <br /> <br />If your payroll service only participates in payroll file upload (180° integration), you will be able to continue to review your account representatives information.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] text-[16px]">​</p>
      </div>
    </div>
  );
}

function Screenshot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Initiate payroll integration preview</p>
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

function NumberContainer2() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">{`Confirm Payroll Provider`}</p>
    </div>
  );
}

function AccordionExpanded2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer2 />
          <TextContainer2 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap"><ul class="list-disc">
        <li className="leading-[24px] mb-0 my-4">Verify that the payroll company listed is correct.</li>
        <li className="leading-[24px] mb-0 my-4">Note: The representative displayed may be an integration contact, not your dedicated sales representative.</li>
        <li className="leading-[24px] mb-0 my-4">For questions, please contact Client Services at <strong>855-650-6916</strong> 8am-8pm EST, or <strong><a href="mailto:clientservices@calsavers.com" class="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline" target="_blank">clientservices@calsavers.com.</a></strong></li></ul>
      </div>
    </div>
  );
}

function Screenshot2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Confirm payroll provider preview</p>
      </div>
    </div>
  );
}

function ScreenshotContainer2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
          <Screenshot2 />
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text2 />
      <ScreenshotContainer2 />
    </div>
  );
}

function Steps2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step2 />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Add a Bank Account</p>
    </div>
  );
}

function AccordionExpanded3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer3 />
          <TextContainer3 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Enter a bank account that your company will use to send employee contributions.</p>
      </div>
    </div>
  );
}

function Screenshot3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Add bank account preview</p>
      </div>
    </div>
  );
}

function ScreenshotContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
          <Screenshot3 />
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text3 />
      <ScreenshotContainer3 />
    </div>
  );
}

function Steps3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step3 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Complete Payroll Integration Setup</p>
    </div>
  );
}

function AccordionExpanded4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer4 />
          <TextContainer4 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0 text-[16px]">After submitting your information, contact your payroll provider to finalize the integration.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">You may be required to sign a contract and review associated pricing.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] text-[16px]">​</p>
      </div>
    </div>
  );
}

function Screenshot4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Initiate payroll integration preview</p>
      </div>
    </div>
  );
}

function ScreenshotContainer4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
          <Screenshot4 />
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text4 />
      <ScreenshotContainer4 />
    </div>
  );
}

function Steps4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step4 />
    </div>
  );
}

function Accordions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Accordions">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded2 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 4">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps2 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded3 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 4">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps3 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded4 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterNovice() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Register/Novice">
      <Accordions />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full" data-name="Group">
      <StepText />
      <RegisterNovice />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[1140px] z-[1]" data-name="Body">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[24px] py-[56px] relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group as Tab180SetupToggleOffBodyContent };

export default function Component180Tab2ToggleOff() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="180 - Tab 2 - Toggle Off">
      <Tabs />
      <Body />
    </div>
  );
}