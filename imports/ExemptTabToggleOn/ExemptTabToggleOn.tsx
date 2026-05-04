import svgPaths from "./svg-vw2236dhms";

function TabText() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Tab Text">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#00594f] text-[16px] text-left tracking-[1px] whitespace-nowrap">Register for CalSavers</p>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Signup">
        <div className="absolute inset-[47.07%_6.05%_6.05%_47.07%]" data-name="Vector">
          <div className="absolute inset-[-6.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.pc9dab00} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.7%_19.05%_20%_59.33%]" data-name="Vector">
          <div className="absolute inset-[-19.17%_-14.45%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.92006 7.21597">
              <path d={svgPaths.pea4a220} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[14.84%] right-[14.84%] top-[6.05%]" data-name="Vector">
          <div className="absolute inset-[-7.11%_-4.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 16.0625">
              <path d={svgPaths.pe7cd358} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[35.35%] left-[6.05%] right-[58.79%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-21.33%_-8.89%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.25 6.6875">
              <path d={svgPaths.p1c39e180} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
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
          <div className="bg-white h-[2px] shrink-0 w-full" data-name="Spacer" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.98%_5.94%_5.98%_6.05%]" data-name="Group">
      <div className="absolute inset-[-3.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1627 30.175">
          <g id="Group">
            <path d={svgPaths.p1cc2b9e0} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2bf0ab00} id="Vector_2" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M24.8127 13.2125H16.0002" id="Vector_3" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M24.8127 23.2125H21.3127" id="Vector_4" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M24.8127 18.2125H17.8752" id="Vector_5" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2c0a2480} id="Vector_6" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p6985770} id="Vector_7" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TabText1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Tab Text">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] whitespace-nowrap">Request an Exemption</p>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Exempt">
        <Group />
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
          <div className="bg-white h-[3px] shrink-0 w-full" data-name="Spacer" />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-start mb-[-1px] relative shrink-0 w-[996px] z-[2]" data-name="Tabs">
      <button className="bg-[#e5eeed] content-stretch cursor-pointer flex flex-col h-[72px] items-start justify-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="TabSetup">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <TextIcon />
        <Spacer />
      </button>
      <div className="bg-white content-stretch flex flex-col h-[72px] items-start justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="TabSetup">
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
            <path d={svgPaths.p25fc6700} id="Rectangle 47" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#00594f] col-1 h-[24px] ml-0 mt-0 rounded-[24px] row-1 w-[44px]" data-name="Background" />
      <Switch />
    </button>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[392px]">
      <p className="font-['Poppins:Italic',sans-serif] italic leading-[24px] min-w-full relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">Need a simplified walk-though?</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle Switch">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] whitespace-nowrap">Toggle Quick Overview Instructions</p>
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="StepText">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">How to Request an Exemption for CalSavers</p>
      <Frame1 />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 tracking-[1px] w-full" data-name="Text Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-black w-full">Enter your EIN/TIN and Access Code</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] w-full">
        <span className="leading-[24px] text-[16px]">Go to the registration page and enter company tax ID and</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] text-[#00594f] text-[16px] underline">{` Access Code`}</span>
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextContainer />
      <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Get Started</p>
        </div>
      </a>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer />
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NumberContainer1() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-black w-full">Enter company information</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Fill out company details in the form and choose your business type in the exemption check</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer1 />
          <TextContainer1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] h-[180px] items-start relative shrink-0 w-full" data-name="Row">
      <Step />
      <Step1 />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-black w-full">Select exemption reason</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Choose the reason that applies to your business from the list of qualifying exemptions</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer2 />
          <TextContainer2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-black w-full">Review and submit document proof</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Double-check details, submit, and follow the online instructions to provide proof of existing retirement plan or other supporting documents</p>
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer3 />
          <TextContainer3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[172px] items-start relative shrink-0 w-full" data-name="Row">
      <Step2 />
      <Step3 />
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Steps">
      <Row />
      <Row1 />
    </div>
  );
}

function Exerienced() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Exerienced">
      <Steps />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white mb-[-1px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[1140px] z-[1]" data-name="Body">
      <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[48px] py-[56px] relative rounded-[inherit] size-full">
        <StepText />
        <Exerienced />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]">
      <Tabs />
      <Body />
    </div>
  );
}

export default function ExemptTabToggleOn() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Exempt Tab Toggle On">
      <Frame />
    </div>
  );
}