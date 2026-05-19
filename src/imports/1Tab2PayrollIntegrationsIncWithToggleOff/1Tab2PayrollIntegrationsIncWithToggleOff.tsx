import svgPaths from "./svg-w7u21k61l1";
import imgImage271 from "./6568f42840319b6c3af603b082bc57fc59b6af19.png";
import imgScreenshot from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgScreenshot20240624At23545Pm1 from "./039f4bb8bf585934b82734f24f18ba6d5292401d.png";
import imgCaSealWhite1 from "./c38e6508f8ab610083aded5dea6e466c8ce1f856.png";

function Logo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="logo">
      <div className="h-[80px] relative shrink-0 w-[302px]" data-name="image 271">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage271} />
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="ButtonGroup">
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Register</p>
        </div>
      </div>
      <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Login</p>
        </div>
      </a>
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="bg-white max-w-[1140px] relative shrink-0 w-full" data-name="InnerContainer">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] p-[8px] relative size-full">
          <Logo />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-white h-[112px] mb-[-1px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative size-full">
          <InnerContainer />
        </div>
      </div>
    </div>
  );
}

function Hr() {
  return (
    <div className="h-[16px] mb-[-1px] relative shrink-0 w-full" data-name="hr">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 16">
        <g id="hr">
          <path d="M0 8H1440" id="hr_2" stroke="var(--stroke-0, #D3D3D3)" />
        </g>
      </svg>
    </div>
  );
}

function InnerContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative" data-name="InnerContainer">
      <p className="font-['Poppins',sans-serif] font-medium leading-[48px] min-w-full not-italic relative shrink-0 text-[34px] text-black text-center tracking-[0.6px] w-[min-content]">Payroll Provider Integration</p>
      <div className="h-0 relative shrink-0 w-[100px]" data-name="hr">
        <div className="absolute inset-[-2px_-2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 4">
            <path d="M2 2H102" id="hr" stroke="var(--stroke-0, #347B73)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] text-center tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">{`Establish a link between your payroll provider and CalSavers, commonly referred to as payroll integration, to simplify your CalSavers experience. `}</p>
      </div>
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center max-w-[868px] min-w-px relative" data-name="InnerContainer">
      <InnerContainer2 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center mb-[-1px] pb-[40px] pt-[80px] relative shrink-0 w-[1440px]" data-name="Hero">
      <InnerContainer1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center max-w-[992px] not-italic relative shrink-0 text-black text-center w-full" data-name="Header">
      <p className="font-['Poppins',sans-serif] font-medium leading-[38px] relative shrink-0 text-[28px] tracking-[0.6px] w-full">Choose an integration type to learn more</p>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px] tracking-[1px] w-full">
        <p className="leading-[24px]">We provide two integration options depending on what your payroll service offers. Reach out to your payroll provider to find out if they support one of these two integration options.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.88%_11.97%_10.95%_11.91%]" data-name="Group">
      <div className="absolute inset-[-4.1%_-4.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.3581 26.375">
          <g id="Group">
            <path d={svgPaths.p2d738800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3d9ee00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p47e2800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2559700} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1c6d5b00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2f0e2500} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#00594f] content-stretch flex flex-col items-center justify-center relative rounded-[41943000px] shrink-0 size-[50px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Tab Icons">
        <Group />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-left" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">360° Integration</p>
      <div className="flex flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-black tracking-[1px] w-[min-content]">
        <p className="leading-[32px]">Automatic payroll sync</p>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text + Icon">
      <Container1 />
      <Text />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextIcon />
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-left tracking-[1px] w-full">
        <p className="leading-[24px]">CalSavers retrieves employee and contribution data from your payroll provider and sends updated employee savings rate changes back to your provider, when applicable.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#343a40] content-stretch flex flex-col items-center justify-center relative rounded-[41943000px] shrink-0 size-[50px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Tab Icons">
        <div className="absolute inset-[6.05%_52.91%_6.06%_6.06%]" data-name="Vector">
          <div className="absolute inset-[-3.56%_-7.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1293 30.1253">
              <path d={svgPaths.p2af0d600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[6.04%_29.47%_6.05%_29.49%]" data-name="Vector">
          <div className="absolute inset-[-3.55%_-7.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1318 30.1315">
              <path d={svgPaths.p1556fc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[6.04%_6.04%_6.05%_52.93%]" data-name="Vector">
          <div className="absolute inset-[-3.55%_-7.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1318 30.1315">
              <path d={svgPaths.p347e9fc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-left" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#343a40] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">180° Integration</p>
      <div className="flex flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-black tracking-[1px] w-[min-content]">
        <p className="leading-[32px]">Payroll file upload</p>
      </div>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text + Icon">
      <Container3 />
      <Text1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextIcon1 />
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-left tracking-[1px] w-full">
        <p className="leading-[24px]">Payroll provider manually uploads update contributions rates updated by the employer every month. This option is available for those payroll providers who do not currently connect with a 360° integration to CalSavers.</p>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start justify-center relative rounded-[8px] shrink-0 w-full" data-name="Toggle">
      <button className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="IntegrationRadios">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="selection">
              <div aria-hidden="true" className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 size-[14px]" data-name="radiocircle" />
            </div>
            <Container />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
      <button className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="IntegrationRadios">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative size-full">
          <div className="bg-white relative rounded-[12px] shrink-0 size-[24px]" data-name="selection">
            <div aria-hidden="true" className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
          <Container2 />
        </div>
      </button>
    </div>
  );
}

function Levelradios() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Levelradios">
      <Toggle />
    </div>
  );
}

function TabText() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Tab Text">
      <p className="leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase">360° Integration</p>
      <p className="leading-[24px] relative shrink-0 text-[#00594f] text-[16px] tracking-[1px]">Overview and Pricing</p>
    </div>
  );
}

function TextIcon2() {
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
      <p className="leading-[24px] relative shrink-0 text-[16px] text-black tracking-[1px]">Payroll Integrations Inc.</p>
    </div>
  );
}

function TextIcon3() {
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

function TabText2() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Tab Text">
      <p className="leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase">Setup Guide</p>
      <p className="leading-[24px] relative shrink-0 text-[#00594f] text-[16px] tracking-[1px]">Paychex or TJH Payroll</p>
    </div>
  );
}

function TextIcon4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Setup">
        <div className="absolute inset-[-0.01%_-0.03%_-0.03%_-0.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0215 32.0131">
            <path clipRule="evenodd" d={svgPaths.p5836b00} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <TabText2 />
    </div>
  );
}

function Spacer2() {
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

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-start mb-[-1px] relative shrink-0 w-[996px] z-[2]" data-name="Tabs">
      <button className="bg-[#e5eeed] content-stretch cursor-pointer flex flex-col h-[72px] items-start justify-center min-w-[300px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[300px]" data-name="TabSetup">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <TextIcon2 />
        <Spacer />
      </button>
      <div className="bg-white content-stretch flex flex-col h-[72px] items-start justify-end min-w-[300px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[300px]" data-name="TabSetup">
        <div aria-hidden="true" className="absolute border-[rgba(0,89,79,0.5)] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <TextIcon3 />
        <Spacer1 />
      </div>
      <button className="bg-[#e5eeed] content-stretch cursor-pointer flex flex-col h-[72px] items-start justify-center min-w-[300px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[300px]" data-name="TabSetup">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <TextIcon4 />
        <Spacer2 />
      </button>
    </div>
  );
}

function Switch() {
  return (
    <div className="col-1 ml-[7px] mt-[6px] relative row-1 size-[12px]" data-name="Switch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Switch">
          <circle cx="6" cy="6" fill="var(--fill-0, #828282)" id="Ellipse 1" r="5.5" stroke="var(--stroke-0, #828282)" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e6e6e6] border border-[#d3d3d3] border-solid col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
      <Switch />
    </button>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full md:w-[392px] min-w-0">
      <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Need a simplified walk-though?</p>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] flex-1 min-w-0 break-words">Toggle Quick Overview Instructions</p>
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
      <p className="flex-1 font-['Poppins',sans-serif] font-medium leading-[32px] not-italic relative text-[20px] text-black tracking-[1px] min-w-0 break-words">Setup guide to integrate with Payroll Integrations Inc.</p>
      <Frame5 />
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
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Contact your payroll provider to set up a deduction line</p>
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

function Group2() {
  return (
    <div className="absolute inset-[6.05%_8.98%]" data-name="Group">
      <div className="absolute inset-[-3.2%_-3.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0625 37.4062">
          <g id="Group">
            <path d={svgPaths.p17c1c440} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d="M12.8438 31.5938H22.2188" id="Vector_2" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d="M17.5312 1.125V3.46875" id="Vector_3" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d="M1.125 17.5312H3.46875" id="Vector_4" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d={svgPaths.p231b1d80} id="Vector_5" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d="M33.9375 17.5312H31.5938" id="Vector_6" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d={svgPaths.p2917c300} id="Vector_7" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d={svgPaths.p5a90f00} id="Vector_8" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d={svgPaths.p264bec00} id="Vector_9" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
            <path d={svgPaths.p1219f100} id="Vector_10" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bulb1StreamlineStreamline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Bulb-1 Streamline Streamline-3.0">
      <Group2 />
    </div>
  );
}

function Tip() {
  return (
    <div className="bg-[#f2f0e9] relative rounded-[8px] shrink-0 w-full" data-name="Tip">
      <div aria-hidden="true" className="absolute border border-[#846926] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Bulb1StreamlineStreamline />
          <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[0px] text-black tracking-[1px]">
            <p className="text-[16px]">
              <span className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic tracking-[1px]">{`Tip: `}</span>
              <span className="leading-[24px]">Have your CalSavers account number ready when you contact your provider.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text">
      <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Reach out to your payroll provider and request to enable the CalSavers 360° integration. You'll need your CalSavers employer account ID.</p>
      <Tip />
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

function Container4() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Reach out to payroll service preview</p>
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
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text2 />
      <ScreenshotContainer />
    </div>
  );
}

function Steps1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step />
    </div>
  );
}

function NumberContainer1() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Log into the CalSavers employer dashboard to start the integration set up</p>
    </div>
  );
}

function AccordionExpanded1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer1 />
          <TextContainer1 />
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
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">Log in</span>
          <span className="leading-[24px]">{` to the employer portal and select “Payroll Provider” on the left-hand side of the screen under Dashboard.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">Select “Add New” to start the payroll integration process.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">{`Choose “I have a different payroll provider” and search for your payroll vendor in the Payroll Integrations Inc. participating vendor list. `}</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] text-[16px]">If your payroll service participates, you will be able to continue through the set up process</p>
      </div>
    </div>
  );
}

function Screenshot1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Initiate payroll integration preview</p>
      </div>
    </div>
  );
}

function ScreenshotContainer1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
          <Screenshot1 />
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text3 />
      <ScreenshotContainer1 />
    </div>
  );
}

function Steps2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step1 />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Set up banking for future employee contributions</p>
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

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Add or use a previously added bank account that your company will use to send employee contributions.</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px]">{`If your bank account isn’t added, select “Add a bank account” to enter your routing and account numbers. You will have to option to provide a customized account nickname if you have multiple bank accounts. `}</p>
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

function Container6() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Add bank account preview</p>
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
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text4 />
      <ScreenshotContainer2 />
    </div>
  );
}

function Steps3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step2 />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Initiate Payroll Integrations Inc. to register</p>
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

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#6b6b6b] tracking-[1px]" data-name="Text">
      <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] w-full">{`You will then be taken to the Payroll Integrations Inc. connection page to start your payroll connection. Once more, you will be required add banking information for the monthly fee associated with Payroll Integrations Inc. The fee for this service is based on the number of active employees making contributions. `}</p>
      <p className="font-['Poppins',sans-serif] italic italic leading-[18px] relative shrink-0 text-[12px] w-full">Pricing tier applied is determined monthly after payrolls are processed based on number of employees. The service charge associated with Payroll Integrations is not affiliated with CalSavers program. It is an optional service provided and billed directly by Payroll Integrations as a third-party.</p>
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

function Container7() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Payroll Integrations Inc. registration preview</p>
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
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text5 />
      <ScreenshotContainer3 />
    </div>
  );
}

function Steps4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step3 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">5</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">{`Payroll provider authorization & setup`}</p>
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

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Finish your connection by logging into your payroll provider account. Your payroll provider online service will guide you through their authorization process.</p>
    </div>
  );
}

function Screenshot4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Finish set up preview</p>
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
          <Container8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text6 />
      <ScreenshotContainer4 />
    </div>
  );
}

function Steps5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step4 />
    </div>
  );
}

function NumberContainer5() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">6</p>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Verify your payroll provider is properly connected</p>
    </div>
  );
}

function AccordionExpanded5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer5 />
          <TextContainer5 />
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

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">{`Once setup is complete, log into your CalSavers dashboard to verify the connection status. You should see a "Connected" badge.`}</p>
    </div>
  );
}

function Screenshot5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full" data-name="Screenshot">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Verify connection preview</p>
      </div>
    </div>
  );
}

function ScreenshotContainer5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
          <Screenshot5 />
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Step5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text7 />
      <ScreenshotContainer5 />
    </div>
  );
}

function Steps6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step5 />
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
              <Steps1 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded1 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 2">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps2 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded2 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 3">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps3 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded3 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 4">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps4 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded4 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 5">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps5 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded5 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 6">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps6 />
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

function Group1() {
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
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1140px] relative shrink-0 w-full" data-name="Steps">
      <Header />
      <Levelradios />
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[1140px]" data-name="Tab 2 - Payroll Integrations Inc. - Toggle Off">
        <Tabs />
        <Body />
      </div>
    </div>
  );
}

function Tab2PayrollIntegrationsIncToggleOffExample() {
  return (
    <div className="bg-[#f2f0e9] content-stretch flex flex-col items-center justify-center mb-[-1px] overflow-clip py-[80px] relative shrink-0 w-[1440px]" data-name="Tab 2 - Payroll Integrations Inc. - Toggle Off Example">
      <Steps />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-medium leading-[38px] relative shrink-0 text-[28px] text-black tracking-[0.6px] w-full">{`Learn more about payroll provider integrations options `}</p>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">
        <p className="leading-[24px]">To learn more about the benefits and your options, check out our informative video.</p>
      </div>
    </div>
  );
}

function LeftContainer() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[32px] items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="LeftContainer">
      <Text8 />
    </div>
  );
}

function VideoFrame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="VideoFrame">
      <div aria-hidden="true" className="absolute border border-[#c3c3c3] border-solid inset-[-1px] pointer-events-none" />
      <div className="h-[421.5px] relative shrink-0 w-[749.333px]" data-name="FrameVideo" />
    </div>
  );
}

function VideoDetails() {
  return (
    <div className="content-stretch flex font-['Poppins',sans-serif] font-medium items-center justify-between leading-[0] not-italic relative shrink-0 text-[12px] tracking-[1px] w-full whitespace-nowrap" data-name="VideoDetails">
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b6b6b]">
        <p className="leading-[18px]">Payroll provider integration options</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#00594f]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">Captions Transcript</p>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Video">
      <VideoFrame />
      <VideoDetails />
    </div>
  );
}

function InnerContainer3() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] max-w-[1140px] relative shrink-0 w-full" data-name="InnerContainer">
      <LeftContainer />
      <Video />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center mb-[-1px] py-[80px] relative shrink-0 w-full" data-name="Section">
      <InnerContainer3 />
    </div>
  );
}

function SpeechBubble() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="speech-bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="speech-bubble">
          <path clipRule="evenodd" d={svgPaths.p29d77380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Chatbot() {
  return (
    <div className="absolute bottom-[34.71px] h-[562px] right-[32px] w-[600px]" data-name="Chatbot">
      <div className="absolute bg-[#00594f] content-stretch flex items-center justify-center left-[525px] rounded-[100px] size-[75px] top-[487px]" data-name="chat-icon/large">
        <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-[-3px] pointer-events-none rounded-[103px]" />
        <SpeechBubble />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="col-1 content-stretch flex gap-[16px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[28px] text-black tracking-[0.6px]">
        <p className="leading-[38px]">Need additional support?</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[6.05%_6.06%_42.16%_38.71%]" data-name="Group">
      <div className="absolute inset-[-6.03%_-5.66%_-6.04%_-5.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6719 18.5705">
          <g id="Group">
            <path d={svgPaths.p2684b700} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p24725840} id="Vector_2" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3edbb600} id="Vector_3" stroke="var(--stroke-0, #846926)" strokeWidth="2" />
            <path d={svgPaths.p38d04900} id="Vector_4" stroke="var(--stroke-0, #846926)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon=Laptop-Help-Message Streamline Streamline-3.0">
        <div className="absolute inset-[64.65%_11.91%_23.63%_88.09%]" data-name="Vector">
          <div className="absolute inset-[-26.67%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5.75">
              <path d="M1 1V4.75" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.49%_67.58%_23.63%_11.91%]" data-name="Vector">
          <div className="absolute inset-[-6.67%_-15.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5625 17">
              <path d={svgPaths.p19abfe00} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[76.37%_6.05%_6.05%_6.05%]" data-name="Vector">
          <div className="absolute inset-[-17.78%_-3.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.125 7.625">
              <path d={svgPaths.p29839300} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <Group3 />
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">Chat with CalSavvy</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">CalSavvy helps employers with questions about the CalSavers retirement program, from registration to operations!</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_5236)" id="Arrow">
          <path d="M0.96875 8H15.0312" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf992b80} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_5_5236">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
        <p className="leading-[24px]">Start a Chat</p>
      </div>
      <Arrow />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px relative w-full" data-name="Text">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon=Help-Wheel Streamline Streamline-3.0">
        <div className="absolute inset-[35.35%]" data-name="Vector">
          <div className="absolute inset-[-10.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.375 11.375">
              <path d={svgPaths.p239adc0} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.5%_30%_17.57%_52.07%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.7375">
              <path d="M6.7375 6.7375L1 1" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.07%_17.57%_30%_64.5%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.73625">
              <path d="M1 1L6.7375 6.73625" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.07%_64.5%_30%_17.57%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.7375">
              <path d="M1 6.7375L6.7375 1" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.5%_52.07%_17.57%_30%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.73625">
              <path d="M6.7375 1L1 6.73625" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.58%_52.07%_64.5%_30%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.73625">
              <path d="M1 1L6.7375 6.73625" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[30%_64.5%_52.07%_17.57%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.7375">
              <path d="M6.7375 6.7375L1 1" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[30%_17.57%_52.07%_64.5%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.7375">
              <path d="M6.7375 1L1 6.7375" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.58%_30%_64.5%_52.07%]" data-name="Vector">
          <div className="absolute inset-[-17.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7375 7.73625">
              <path d="M1 6.73625L6.7375 1" id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[11.91%]" data-name="Vector">
          <div className="absolute inset-[-4.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.375 26.375">
              <path d={svgPaths.p3cfe5b00} id="Vector" stroke="var(--stroke-0, #846926)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black text-left tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">Employer FAQs</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] text-left tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">For more information about running CalSavers visit our FAQ page.</p>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_5236)" id="Arrow">
          <path d="M0.96875 8H15.0312" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf992b80} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_5_5236">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
        <p className="leading-[24px]">Visit FAQs</p>
      </div>
      <Arrow1 />
    </div>
  );
}

function Cards() {
  return (
    <div className="col-[2/span_3] content-stretch flex gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Cards">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[407.5px]" data-name="SupportCard">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Text9 />
        <Link />
      </div>
      <a className="bg-white cursor-pointer relative rounded-[8px] self-stretch shrink-0 w-[407.5px]" href="https://www.calsavers.com/home/frequently-asked-questions.html?language=en# " target="_blank" data-name="SupportCard">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Text10 />
          <Link1 />
        </div>
      </a>
    </div>
  );
}

function InnerContainer4() {
  return (
    <div className="flex-[1_0_0] gap-x-[32px] gap-y-[40px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] max-w-[1140px] min-w-px relative" data-name="InnerContainer">
      <Title />
      <Cards />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f2f6f6] content-stretch flex items-center justify-center mb-[-1px] py-[80px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,89,79,0.25)] border-b border-solid border-t inset-0 pointer-events-none" />
      <InnerContainer4 />
    </div>
  );
}

function Group4() {
  return (
    <div className="font-['Poppins',sans-serif] font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">
      <p className="col-1 leading-[21px] ml-0 mt-0 relative row-1">Employer assistance: 855-650-6916</p>
      <p className="col-1 leading-[21px] ml-0 mt-[29px] relative row-1">Employee assistance: 855-650-6918</p>
      <p className="col-1 leading-[21px] ml-0 mt-[58px] relative row-1">clientservices@calsavers.com</p>
      <p className="col-1 leading-[21px] ml-0 mt-[87px] relative row-1">treasurer.ca.gov/calsavers</p>
    </div>
  );
}

function XLogo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.28px)] size-[25px] top-[calc(50%-0.5px)]" data-name="X logo 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_1_5579)" id="X logo 1">
          <path d={svgPaths.p1231b480} fill="var(--fill-0, #565958)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_5579">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white overflow-clip relative rounded-[6px] shrink-0 size-[36px]">
      <XLogo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame4 />
      <div className="h-[36px] relative shrink-0 w-[86.182px]" data-name="Screenshot 2024-06-24 at 2.35.45 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2083.33%] left-[-153.16%] max-w-none top-[-431.06%] w-[474.68%]" src={imgScreenshot20240624At23545Pm1} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[291px]">
      <Group4 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-140px] relative shrink-0 w-[1200px]">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
      <div className="relative shrink-0 size-[140px]" data-name="ca-seal-white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaSealWhite1} />
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">English</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Español</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Filipino</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins','Noto_Sans_KR',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>{` 한국어 `}</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins','Noto_Sans',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Tiếng Việt
      </p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins','Noto_Sans_JP',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>{` 中文`}</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">armenian</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins','Noto_Sans',sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <span className="leading-[21px]">ру́сский</span>
        <span className="leading-[21px]">&nbsp;</span>
      </p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins','Noto_Sans_JP',sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>
        <span className="leading-[21px]">&nbsp;</span>
        <span className="leading-[21px]">日本語</span>
        <span className="leading-[21px]">&nbsp;</span>
      </p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">punjabi</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Poppins',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Copyright © 2026</p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a className="block cursor-pointer font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.unite529.com/jcdn/files/CAU/pdfs/en_US/terms.pdf" target="_blank">
        Terms of Use
      </a>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a className="block cursor-pointer font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.unite529.com/jcdn/files/CAU/pdfs/en_US/privacy.pdf" target="_blank">
        Privacy
      </a>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a className="block cursor-pointer font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="http://www.ascensus529.com/home/infosec.html?language=en#" target="_blank">
        Security
      </a>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a className="block cursor-pointer font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://www.calsavers.com/home/sitemap.html" target="_blank">
        Sitemap
      </a>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="13" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a className="block cursor-pointer font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://www.calsavers.com/home/frequently-asked-questions.html" target="_blank">
        Help Center
      </a>
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group1 as Tab2ToggleOffBodyContent };

export default function Component1Tab2PayrollIntegrationsIncWithToggleOff() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1. Tab 2 (Payroll Integrations Inc.) with toggle OFF">
      <Navigation />
      <Hr />
      <Hero />
      <Tab2PayrollIntegrationsIncToggleOffExample />
      <Section />
      <Chatbot />
      <Section1 />
      <div className="bg-[#565958] relative shrink-0 w-[1440px]" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[120px] py-[32px] relative rounded-[inherit] size-full">
          <Frame />
          <FooterLinks />
          <FooterLinks1 />
          <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1px] w-full whitespace-pre-wrap">
            <p className="leading-[18px] mb-0">The CalSavers Retirement Savings Program (“CalSavers” or the “Program”) is an automatic enrollment payroll deduction IRA overseen by the CalSavers Retirement Savings Board (“Board”). Ascensus College Savings Recordkeeping Services, LLC (“ACSR”) is the program administrator. ACSR and its affiliates are responsible for day-to-day program operations. Participants saving through CalSavers beneficially own and have control over their IRAs, as provided in the Program Disclosure Booklet available at saver.calsavers.com. CalSavers is not sponsored by the employer, and therefore the employer is not responsible for the Program or liable as a Program sponsor. Employers are not permitted to endorse the Program or encourage or advise employees on whether to participate, how much (if any) to contribute or provide investment help.</p>
            <p className="leading-[18px] mb-0">CalSavers offers investment options selected by the Board. For more information on CalSavers’ investment options go to saver.calsavers.com. Account balances in CalSavers will vary with market conditions. Investments in CalSavers are not guaranteed or insured by the Board, the State of California, the Federal Deposit Insurance Corporation, or any other organization.</p>
            <p className="leading-[18px] mb-0">​</p>
            <p className="leading-[18px] mb-0">CalSavers is a completely voluntary retirement program. Savers may opt out at any time or reduce or increase the amount of payroll contributions. If a saver opts out they can later opt back into CalSavers.</p>
            <p className="leading-[18px] mb-0">​</p>
            <p className="leading-[18px]">Saving through an IRA may not be appropriate for all individuals. Employer facilitation of CalSavers should not be considered an endorsement or recommendation by a participating employer, IRAs, or the investment options offered through CalSavers. IRAs are not exclusive to CalSavers and can be obtained outside of the Program and contributed to outside of payroll deduction. Contributing to a CalSavers IRA through payroll deduction may offer some tax benefits and consequences. However, not everyone is eligible to contribute to a Roth IRA and savers should consult a tax or financial advisor if they have questions related to taxes or investments. Employers do not provide financial advice and employees should not contact an employer for financial advice. Employers should refer all questions about the Program to CalSavers. Employers are not liable for decisions employees make pursuant to Section 100034 of the California Government Code.</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#565958] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      </div>
    </div>
  );
}