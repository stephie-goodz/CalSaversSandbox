import { useState } from "react";
import svgPaths from "./svg-28wx2odd2y";
import imgImage271 from "./6568f42840319b6c3af603b082bc57fc59b6af19.png";
import imgImage276 from "./e1189036287e6d72b33b921046a301b9e2d0de74.png";
import imgScreenshot20240624At23545Pm1 from "./039f4bb8bf585934b82734f24f18ba6d5292401d.png";
import imgCaSealWhite1 from "./c38e6508f8ab610083aded5dea6e466c8ce1f856.png";

const PAYROLL_PROVIDERS = [
  "ADP RUN", "ADP TOTAL SOURCE", "ADP WORKFORCE NOW", "ADP WORKFORCE NOW NEXT GEN",
  "QuickBooks", "Workday", "Paychex", "Paylocity", "AbacusHCM", "Abacus Paysystems",
  "Absolute Wages", "AccuPay Systems", "Accurate Pay Systems", "Adirondack Payroll Services",
  "All Business Payroll", "Allied Payroll Services", "AmCheck", "Apex HCM",
  "Applied Payroll Solutions", "Apollo Payroll", "AspenHR", "Back Office Support Solutions",
  "Balance Point HCM", "Baron Payroll", "Bayview Payroll Services", "Birch Tree Business Solutions",
  "Blue Sky Payroll", "Boutique Payroll Company LLC", "B2E Solutions", "Capital Payroll Partners",
  "CAVU HCM", "Charlotte Payroll", "Checkmate HCM", "CheckRight NW", "Clarity HCM",
  "ClearPalm", "CNY Payroll", "Coastal Payroll", "Commonwealth Payroll", "Company Payroll Processing",
  "CompassOne Payroll", "Complete Payroll Resources", "Contempo HCM", "Corneliuson & Associates",
  "CS3 Technology", "CTR Payroll & HR", "Dominion Payroll", "Employ Drive", "Employee Payment Solutions",
  "Entrust Payroll Solutions", "EWH Small Business Accounting", "Express Data Systems", "EZ Payroll",
  "FocusPay Solutions", "Gem Payroll", "HigherUp HCM", "Hometown Payroll Solutions", "Horizon Payroll",
  "HRmonious", "HRtoGo", "Human Elements", "Hunter Payroll Systems", "inFocus Payroll",
  "iPay Solutions", "IRIS Payroll", "isolved", "Kabel", "Keystone Payroll",
  "Ledger Payroll", "Ludt Payroll", "Market Dimensions", "Miami Payroll Center", "Metro Payroll",
  "Miter", "Netchex", "New England Payroll Solutions", "OnTime Payroll", "Onyx HR",
  "Optima Payroll", "Pacific Payroll Group", "Panacea Payroll", "Paper Trails Payroll",
  "Payday Employer Solutions", "Pay Day Masters", "Payficiency", "PayFWDs", "Paymedia HCM",
  "PayNW", "PayPlus", "PayPro HCS", "PaySource Payroll", "The Payroll Company",
  "Payroll Data Processing", "PayrollHUB", "Payrolls Plus", "Payroll Processors", "Payroll Vault",
  "Paywerx", "Performance Pay", "Pinkerton Payroll & Insurance", "Pioneer Payroll Solutions",
  "Press Gold Group", "Quartermaster Payroll Providers", "Rabco Payroll", "Ridgecrest Solutions",
  "River Run Payroll", "RKL", "SmartBean", "SourceOne Payroll", "Spruce Valley Payroll",
  "Tax & Payroll Shelters", "Thread HCM", "Three Pillars Bookkeeping", "Time & Payroll",
  "UKG Ready", "Vertilocity", "Vision Payroll", "WipFli", "Workplace HCM",
  "WorkGroup Payroll", "WORX Payroll", "Your Payroll Department", "YPD HCM"
];

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
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full md:w-auto" data-name="ButtonGroup">
      <a className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 flex-1 md:flex-none" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Register</p>
        </div>
      </a>
      <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 flex-1 md:flex-none " href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank" data-name="Button">
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
    <div className="bg-white relative shrink-0 w-full" data-name="InnerContainer">
      <div className="content-stretch flex flex-row items-center justify-center size-full w-full">
        <div className="content-stretch flex flex-col md:flex-row items-center md:justify-between justify-center relative size-full w-full p-[0px] gap-4 md:gap-0">
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
      <div className="flex flex-col items-center justify-center size-full w-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative size-full w-full">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-0 relative" data-name="InnerContainer">
      <p className="font-['Poppins',sans-serif] font-medium leading-[48px] min-w-full not-italic relative shrink-0 text-[34px] text-black text-center tracking-[0.6px] w-full min-w-0">Payroll Provider Integration</p>
      <div className="h-0 relative shrink-0 w-[100px]" data-name="hr">
        <div className="absolute inset-[-2px_-2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 4">
            <path d="M2 2H102" id="hr" stroke="var(--stroke-0, #347B73)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] text-center tracking-[1px] w-full min-w-0">
        <p className="leading-[24px]">{`Establish a link between your payroll provider and CalSavers, commonly referred to as payroll integration, to simplify your CalSavers experience. `}</p>
      </div>
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center max-w-[868px] min-w-0 relative" data-name="InnerContainer">
      <InnerContainer2 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full px-[24px] py-[80px]" data-name="Hero">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0 not-italic relative text-left" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">360° Integration</p>
      <div className="flex flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-black tracking-[1px] w-full min-w-0">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-0 relative" data-name="Container">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0 not-italic relative text-left" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#343a40] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">180° Integration</p>
      <div className="flex flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-black tracking-[1px] w-full min-w-0">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-0 relative" data-name="Container">
      <TextIcon1 />
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-left tracking-[1px] w-full">
        <p className="leading-[24px]">Payroll provider manually uploads update contributions rates updated by the employer every month. This option is available for those payroll providers who do not currently connect with a 360° integration to CalSavers.</p>
      </div>
    </div>
  );
}

function Toggle({ integrationMode = '360' }: { integrationMode?: '360' | '180' }) {
  const is360Selected = integrationMode === '360';
  const is180Selected = integrationMode === '180';

  return (
    <div className="content-stretch cursor-pointer flex flex-col md:flex-row gap-[24px] md:gap-[32px] lg:gap-[16px] items-start justify-center relative rounded-[8px] shrink-0 w-full" data-name="Toggle">
      <button className="bg-white flex-[1_0_0] min-w-0 relative rounded-[8px] self-stretch w-full md:w-auto" data-name="IntegrationRadios">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative size-full" data-integration-type="360">
            <div className="bg-white content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="selection">
              <div aria-hidden="true" className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[12px]" />
              {is360Selected && <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 size-[14px]" data-name="radiocircle" />}
            </div>
            <Container />
          </div>
        </div>
        <div aria-hidden="true" className={`absolute ${is360Selected ? 'border-2 border-[#00594f]' : 'border border-[rgba(0,89,79,0.25)]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
      </button>
      <button className="bg-white flex-[1_0_0] min-w-0 relative rounded-[8px] w-full md:w-auto" data-name="IntegrationRadios">
        <div aria-hidden="true" className={`absolute ${is180Selected ? 'border-2 border-[#00594f]' : 'border border-[rgba(0,89,79,0.25)]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative size-full" data-integration-type="180">
          <div className="bg-white content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="selection">
            <div aria-hidden="true" className="absolute border border-[#666] border-solid inset-0 pointer-events-none rounded-[12px]" />
            {is180Selected && <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 size-[14px]" data-name="radiocircle" />}
          </div>
          <Container2 />
        </div>
      </button>
    </div>
  );
}

function Levelradios({ integrationMode }: { integrationMode?: '360' | '180' }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Levelradios">
      <Toggle integrationMode={integrationMode} />
    </div>
  );
}

function TabText({ isActive = true, integrationMode = '360' }: { isActive?: boolean, integrationMode?: '360' | '180' }) {
  const topLabel = integrationMode === '180' ? '180° Integration' : '360° Integration';
  const bottomLabel = integrationMode === '180' ? 'Overview' : 'Overview and Pricing';

  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-name="Tab Text">
      <p className={`leading-[21px] relative shrink-0 text-[14px] tracking-[1.5px] uppercase transition-colors ${isActive ? 'text-[#80641f]' : 'text-[#80641f]'}`}>{topLabel}</p>
      <p className={`leading-[24px] relative shrink-0 text-[16px] tracking-[1px] transition-colors tab-main-text ${isActive ? 'text-black' : 'text-[#00594f]'}`}>{bottomLabel}</p>
    </div>
  );
}

function TextIcon2({ isActive = true, integrationMode = '360' }: { isActive?: boolean, integrationMode?: '360' | '180' }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Info">
        <div className="absolute inset-[-0.03%_0.02%_0.02%_0.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9915 32.0058">
            <path clipRule="evenodd" d={svgPaths.paad2080} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <TabText isActive={isActive} integrationMode={integrationMode} />
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

function TabText1({ integrationMode = '360', isActive = false }: { integrationMode?: '360' | '180', isActive?: boolean }) {
  const tabLabel = integrationMode === '180' ? 'How to integrate your payroll' : 'Payroll Integrations Inc.';

  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 text-left" data-name="Tab Text">
      <p className={`leading-[21px] relative shrink-0 text-[14px] tracking-[1.5px] uppercase whitespace-nowrap text-[#80641f]`}>Setup Guide</p>

      <div className={`leading-[24px] relative shrink-0 text-[16px] tracking-[1px] transition-colors tab-main-text ${isActive ? 'text-black' : 'text-[#00594f]'}`}>{tabLabel}</div>
    </div>
  );
}

function TextIcon3({ integrationMode, isActive = false }: { integrationMode?: '360' | '180', isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Setup">
        <div className="absolute inset-[-0.01%_-0.03%_-0.03%_-0.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0215 32.0131">
            <path clipRule="evenodd" d={svgPaths.p5836b00} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <TabText1 integrationMode={integrationMode} isActive={isActive} />
    </div>
  );
}

function Spacer1() {
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

function TabText2({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col font-['Poppins',sans-serif] font-semibold h-full items-start justify-center not-italic relative shrink-0 text-left whitespace-nowrap" data-name="Tab Text">
      <p className={`leading-[21px] relative shrink-0 text-[14px] tracking-[1.5px] uppercase text-[#80641f]`}>Setup Guide</p>
      <p className={`leading-[24px] relative shrink-0 text-[16px] tracking-[1px] transition-colors tab-main-text ${isActive ? 'text-black' : 'text-[#00594f]'}`}>Paychex or TJH Payroll</p>
    </div>
  );
}

function TextIcon4({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Setup">
        <div className="absolute inset-[-0.01%_-0.03%_-0.03%_-0.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0215 32.0131">
            <path clipRule="evenodd" d={svgPaths.p5836b00} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <TabText2 isActive={isActive} />
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

function MobileDropdown({ integrationMode = '360', activeTab = 1, active180Tab = 1 }: { integrationMode?: '360' | '180', activeTab?: 1 | 2 | 3, active180Tab?: 1 | 2 }) {
  if (integrationMode === '180') {
    const options = [
      { value: 1, label: '180° Integration - Overview' },
      { value: 2, label: '180° Integration - How to integrate payroll with a 180° integration' }
    ];
    return (
      <div className="md:hidden w-full mb-4 z-[2]" data-name="Tabs">
        <p className="font-['Poppins',sans-serif] font-medium text-[12px] text-[#6b6b6b] mb-1">Choose an integration detail</p>
        <select
          className="w-full bg-white border-2 border-[#00594f] rounded-lg px-4 py-3 font-['Poppins',sans-serif] font-semibold text-[16px] text-black tracking-[1px] appearance-none cursor-pointer"
          value={active180Tab}
          onChange={() => {}} // Handled by event delegation in parent
          data-name="TabDropdown"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%2300594f\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem'
          }}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // 360° mode
  const options = [
    { value: 1, label: '360° Integration - Overview and Pricing' },
    { value: 2, label: '360° Integration - Payroll Integrations Inc. (3rd Party)' },
    { value: 3, label: '360° Integration - Paychex or TJH Payroll (Direct)' }
  ];

  return (
    <div className="md:hidden w-full mb-4 z-[2]" data-name="Tabs">
      <p className="font-['Poppins',sans-serif] font-medium text-[12px] text-[#6b6b6b] mb-1">Choose an integration detail</p>
      <select
        className="w-full bg-white border-2 border-[#00594f] rounded-lg px-4 py-3 font-['Poppins',sans-serif] font-semibold text-[16px] text-black tracking-[1px] appearance-none cursor-pointer m-[0px]"
        value={activeTab}
        onChange={() => {}} // Handled by event delegation in parent
        data-name="TabDropdown"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%2300594f\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          paddingRight: '2.5rem'
        }}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Tabs({ integrationMode = '360', activeTab = 1, active180Tab = 1 }: { integrationMode?: '360' | '180', activeTab?: 1 | 2 | 3, active180Tab?: 1 | 2 }) {
  if (integrationMode === '180') {
    // 180° mode: Show only 2 tabs (Overview and Setup)
    const isTab1Active = active180Tab === 1;
    const isTab2Active = active180Tab === 2;

    return (
      <>
        <MobileDropdown integrationMode={integrationMode} activeTab={activeTab} active180Tab={active180Tab} />
        <div className="hidden md:flex content-stretch flex-nowrap gap-[8px] lg:gap-[16px] items-start mb-[-1px] relative shrink-0 w-full z-[2]" data-name="Tabs">
          <div className={`content-stretch flex flex-col h-[72px] items-start justify-end relative rounded-tl-[8px] rounded-tr-[8px] flex-1 min-w-0 px-3 lg:px-6 transition-colors ${isTab1Active ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#BFD5D3] cursor-pointer'}`} data-name="TabSetup" data-tab-active={isTab1Active}>
            <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${isTab1Active ? 'inset-0 border-b-0' : 'inset-0'}`} />
            <TextIcon2 isActive={isTab1Active} integrationMode={integrationMode} />
            <Spacer />
          </div>
          <button className={`content-stretch cursor-pointer flex flex-col h-[72px] items-start justify-center relative rounded-tl-[8px] rounded-tr-[8px] flex-1 min-w-0 px-3 lg:px-6 transition-colors ${isTab2Active ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#BFD5D3]'}`} data-name="TabSetup" data-tab-active={isTab2Active}>
            <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${isTab2Active ? 'inset-0 border-b-0' : 'inset-0'}`} />
            <TextIcon3 integrationMode={integrationMode} isActive={isTab2Active} />
            <Spacer1 />
          </button>
        </div>
      </>
    );
  }

  // 360° mode: Show all 3 tabs
  const isTab1Active = activeTab === 1;
  const isTab2Active = activeTab === 2;
  const isTab3Active = activeTab === 3;

  return (
    <>
      <MobileDropdown integrationMode={integrationMode} activeTab={activeTab} active180Tab={active180Tab} />
      <div className="hidden md:flex content-stretch flex-nowrap gap-[8px] lg:gap-[16px] items-start mb-[-1px] relative shrink-0 w-full z-[2]" data-name="Tabs">
        <div className={`content-stretch flex flex-col min-h-[72px] items-start justify-end relative rounded-tl-[8px] rounded-tr-[8px] flex-1 min-w-0 px-3 lg:px-6 transition-colors ${isTab1Active ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#BFD5D3] cursor-pointer'}`} data-name="TabSetup" data-tab-active={isTab1Active}>
          <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${isTab1Active ? 'inset-0 border-b-0' : 'inset-0'}`} />
          <TextIcon2 isActive={isTab1Active} integrationMode={integrationMode} />
          <Spacer />
        </div>
        <button className={`content-stretch cursor-pointer flex flex-col min-h-[72px] items-start justify-center relative rounded-tl-[8px] rounded-tr-[8px] flex-1 min-w-0 px-3 lg:px-6 transition-colors ${isTab2Active ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#BFD5D3]'}`} data-name="TabSetup" data-tab-active={isTab2Active}>
          <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${isTab2Active ? 'inset-0 border-b-0' : 'inset-0'}`} />
          <TextIcon3 integrationMode={integrationMode} isActive={isTab2Active} />
          <Spacer1 />
        </button>
        <button className={`content-stretch cursor-pointer flex flex-col min-h-[72px] items-start justify-center relative rounded-tl-[8px] rounded-tr-[8px] flex-1 min-w-0 px-3 lg:px-6 transition-colors ${isTab3Active ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#BFD5D3]'}`} data-name="TabSetup" data-tab-active={isTab3Active}>
          <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${isTab3Active ? 'inset-0 border-b-0' : 'inset-0'}`} />
          <TextIcon4 isActive={isTab3Active} />
          <Spacer2 />
        </button>
      </div>
    </>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 tracking-[1px] w-full">
      <p className="font-['Poppins',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black w-full">Automated Payroll Sync (360° Integration) Overview</p>
      <p className="font-['Poppins',sans-serif] leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] w-full whitespace-pre-wrap">
        CalSavers offers seamless 360° integration by retrieving employee and contribution data from your payroll provider. You can fully integrate your payroll in two ways: directly through Paychex or TJH Payroll, or by using Payroll Integrations Inc. as a third-party service, which connects with a growing list of participating payroll providers.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        {`If your payroll provider isn't available for 360° integration, you may be able to connect your payroll for a 180° integration (payroll file upload).`}
      </p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-semibold gap-[4px] items-start min-w-0 not-italic relative" data-name="Text Container">
      <p className="leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">3rd Party IntegratioN</p>
      <p className="leading-[24px] min-w-full relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-full min-w-0">Learn more about Payroll Integrations Inc.</p>
    </div>
  );
}

function AccordionExpanded() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
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

function Text3() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[14px] items-center min-w-0 relative" data-name="Text" />;
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <Text3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-8.64%_3.13%_3.12%_-8.64%]" data-name="Group">
      <div className="absolute inset-[0_-2.96%_-2.96%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7273 21.7281">
          <g id="Group">
            <path d={svgPaths.p19cc1f00} id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p25253d40} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextField({ value, onChange, hasError }: { value: string; onChange: (value: string) => void; hasError: boolean }) {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="text-field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search participating payroll providers"
            className="flex-[1_0_0] font-['Poppins',sans-serif] leading-[24px] min-w-0 relative text-[#1a1a1a] text-[16px] text-left tracking-[1px] bg-transparent border-none outline-none placeholder:italic placeholder:opacity-80 placeholder:text-[#6b6b6b]"
          />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon">
            <Group1 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border ${hasError ? 'border-red-600' : 'border-[#666]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
    </div>
  );
}

function DropdownOption() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" role="button" tabIndex="0" data-name="Dropdown option">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Gotham',sans-serif] leading-[1.2] min-w-0 not-italic relative text-[#373737] text-[16px] text-left">ADP</p>
        </div>
      </div>
    </div>
  );
}

function DropdownOption1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" role="button" tabIndex="0" data-name="Dropdown option">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Gotham',sans-serif] leading-[1.2] min-w-0 not-italic relative text-[#373737] text-[16px] text-left">RUN Powered by ADP</p>
        </div>
      </div>
    </div>
  );
}

function DropdownOption2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" role="button" tabIndex="0" data-name="Dropdown option">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Gotham',sans-serif] leading-[1.2] min-w-0 not-italic relative text-[#373737] text-[16px] text-left">ADP Total Source</p>
        </div>
      </div>
    </div>
  );
}

function DropdownOption3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" role="button" tabIndex="0" data-name="Dropdown option">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Gotham',sans-serif] leading-[1.2] min-w-0 not-italic relative text-[#373737] text-[16px] text-left">ADP Workforce Now</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0 relative" data-name="list">
      <DropdownOption />
      <DropdownOption1 />
      <DropdownOption2 />
      <DropdownOption3 />
    </div>
  );
}

function DropdownGroup({ value, onChange, hasError, filteredProviders, onSelect, showDropdown }: {
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
  filteredProviders: string[];
  onSelect: (provider: string) => void;
  showDropdown: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="dropdown-group">
      <TextField value={value} onChange={onChange} hasError={hasError} />
      {showDropdown && filteredProviders.length > 0 && (
        <div className="bg-white absolute top-[1px] left-0 right-0 max-h-[240px] overflow-y-auto relative rounded-[4px] shrink-0 w-full z-10" data-name="Dropdown ul">
          <div className="flex flex-col items-start w-full">
            {filteredProviders.map((provider, index) => (
              <button
                key={index}
                onClick={() => onSelect(provider)}
                className="w-full text-left px-[16px] py-[12px] hover:bg-[#f2f0e9] font-['Poppins',sans-serif] text-[16px] text-[#1a1a1a] leading-[24px] tracking-[1px] transition-colors"
              >
                {provider}
              </button>
            ))}
          </div>
          <div aria-hidden="true" className="absolute border-[#828282] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.04),0px_8px_24px_0px_rgba(0,89,79,0.04)]" />
        </div>
      )}
    </div>
  );
}

function AssistiveText({ message }: { message: string }) {
  if (!message) return <div className="content-stretch flex gap-[8px] h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Assistive text" />;

  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full mt-1" data-name="Assistive text">
      <p className="font-['Poppins',sans-serif] text-[14px] text-red-600 leading-[18px]">{message}</p>
    </div>
  );
}

function SuccessText({ message }: { message: string }) {
  if (!message) return <div className="content-stretch flex gap-[8px] h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Assistive text" />;

  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full mt-1" data-name="Assistive text">
      <p className="font-['Poppins',sans-serif] text-[14px] text-green-600 leading-[18px]">{message}</p>
    </div>
  );
}

function Form() {
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredProviders = searchQuery.trim()
    ? PAYROLL_PROVIDERS.filter(provider =>
        provider.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 10) // Limit to 10 results
    : [];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowDropdown(value.trim().length > 0);
    setSuccessMessage('');

    if (!value.trim()) {
      setErrorMessage('');
      return;
    }

    // Check if the provider exists in the list (case-insensitive)
    const matches = PAYROLL_PROVIDERS.filter(provider =>
      provider.toLowerCase().includes(value.toLowerCase())
    );

    if (matches.length === 0 && value.length > 2) {
      setErrorMessage('Your payroll provider is not yet participating');
    } else {
      setErrorMessage('');
    }
  };

  const handleSelectProvider = (provider: string) => {
    setSearchQuery(provider);
    setShowDropdown(false);
    setErrorMessage('');
    setSuccessMessage('Good news! Your selected payroll provider is offered through Payroll Integrations Inc.');
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[2]" data-name="form">
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[1px] w-full">
        <p className="leading-[24px]">{`If you're not using Paychex or TJH Hull for your payroll services, consider checking if your payroll provider is among those that partner with Payroll Integrations Inc. for a monthly fee.`}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Dropdown/PI">
        <Label />
        <DropdownGroup
          value={searchQuery}
          onChange={handleSearchChange}
          hasError={!!errorMessage}
          filteredProviders={filteredProviders}
          onSelect={handleSelectProvider}
          showDropdown={showDropdown}
        />
        {successMessage ? <SuccessText message={successMessage} /> : <AssistiveText message={errorMessage} />}
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-0 relative">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-semibold leading-[21px] min-w-0 not-italic relative text-[14px] text-black text-center uppercase">0 Employees</p>
    </div>
  );
}

function LeftText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Left Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-0 relative">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-semibold leading-[21px] min-w-0 not-italic relative text-[14px] text-black text-center uppercase">1-25 Employees</p>
    </div>
  );
}

function LeftText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Left Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-0 relative">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-semibold leading-[21px] min-w-0 not-italic relative text-[14px] text-black text-center uppercase">26-50 Employees</p>
    </div>
  );
}

function LeftText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Left Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-0 relative">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-semibold leading-[21px] min-w-0 not-italic relative text-[14px] text-black text-center uppercase">51-100 Employees</p>
    </div>
  );
}

function LeftText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Left Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-0 relative">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-semibold leading-[21px] min-w-0 not-italic relative text-[14px] text-black text-center uppercase">101-499 Employees</p>
    </div>
  );
}

function LeftText4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Left Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Table">
      <div className="flex-[1_0_0] min-w-0 relative rounded-[4px]" data-name="Table Column">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-[#f2f0e9] content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Column Header">
            <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
            <LeftText />
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Table Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[21px] min-w-0 not-italic relative text-[#1a1a1a] text-[14px] text-center tracking-[1px]">$0 per month</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      </div>
      <div className="flex-[1_0_0] min-w-0 relative rounded-[4px]" data-name="Table Column">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-[#f2f0e9] content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Column Header">
            <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
            <LeftText1 />
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Table Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[21px] min-w-0 not-italic relative text-[#1a1a1a] text-[14px] text-center tracking-[1px]">$30 per month</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      </div>
      <div className="flex-[1_0_0] min-w-0 relative rounded-[4px]" data-name="Table Column">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-[#f2f0e9] content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Column Header">
            <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
            <LeftText2 />
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Table Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[21px] min-w-0 not-italic relative text-[#1a1a1a] text-[14px] text-center tracking-[1px]">$45 per month</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      </div>
      <div className="flex-[1_0_0] min-w-0 relative rounded-[4px]" data-name="Table Column">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-[#f2f0e9] content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Column Header">
            <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
            <LeftText3 />
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Table Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[21px] min-w-0 not-italic relative text-[#1a1a1a] text-[14px] text-center tracking-[1px]">$60 per month</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      </div>
      <div className="flex-[1_0_0] min-w-0 relative rounded-[4px]" data-name="Table Column">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-[#f2f0e9] content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Column Header">
            <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
            <LeftText4 />
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Table Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
                <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[21px] min-w-0 not-italic relative text-[#1a1a1a] text-[14px] text-center tracking-[1px]">$85 per month</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      </div>
    </div>
  );
}

function FeesTable() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full z-[1]" data-name="FeesTable">
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Payroll Integrations Inc. third-party fees:</p>
        <Table />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] isolate items-start justify-self-stretch relative row-1 self-start shrink-0 w-full" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full z-[4]">Payroll Integrations Inc. Integration Overview</p>
      <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full z-[3]">{`Payroll Integrations Inc. is a third-party company that securely connects CalSavers with a wide range of payroll providers through a 360° integration for a monthly fee. The fee for this service is based on the number of active employees making contributions. `}</p>
      <Form />
      <FeesTable />
    </div>
  );
}

function Frame10() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
      <Text2 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-semibold gap-[4px] items-start min-w-0 not-italic relative" data-name="Text Container">
      <p className="leading-[21px] relative shrink-0 text-[#80641f] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">CalSavers Integration</p>
      <p className="leading-[24px] min-w-full relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-full min-w-0">Learn more about Paychex and TJH Payroll integration</p>
    </div>
  );
}

function AccordionExpanded1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
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

function Text4() {
  return (
    <div className="w-full content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-0 not-italic relative text-[16px] tracking-[1px]" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] relative shrink-0 text-black w-full">Paychex and TJH Integration Overview</p>
      <p className="font-['Poppins',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] w-full whitespace-pre-wrap">
        <span className="leading-[24px]">
          We provide comprehensive 360° integration with payroll providers such as Paychex and TJH Payroll. By utilizing these services, CalSavers will effortlessly and securely manage and transmit employee contributions on your behalf.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="leading-[24px] text-black">{`It's important to note that their pricing is based on their specific service fees, which are distinct from CalSavers' costs. For in-depth pricing details and setup support, we recommend contacting them directly.`}</span>
      </p>
    </div>
  );
}

function Step() {
  return (
    <div className="col-[1/span_2] content-stretch flex items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Step">
      <Text4 />
    </div>
  );
}

function Steps1() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] p-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Steps">
      <Step />
      <div className="aspect-[611/679] col-3 justify-self-stretch relative row-1 shrink-0" data-name="image 276">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage276} />
      </div>
    </div>
  );
}

function Accordions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Accordions">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion PI">
        <AccordionExpanded />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Frame10 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion Full">
        <AccordionExpanded1 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 2">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InnerContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full z-[1]" data-name="InnerContainer">
      <Frame11 />
      <Accordions />
    </div>
  );
}

function Body({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full z-[1]" data-name="Body">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip px-[24px] py-[56px] relative rounded-[inherit] size-full">
        {children || <InnerContainer3 />}
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Steps({ bodyContent, integrationMode, activeTab, active180Tab }: { bodyContent?: React.ReactNode; integrationMode?: '360' | '180'; activeTab?: 1 | 2 | 3; active180Tab?: 1 | 2 }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1140px] relative shrink-0 w-full" data-name="Steps">
      <Header />
      <Levelradios integrationMode={integrationMode} />
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[1140px]" data-name="360-Tabs 2">
        <Tabs integrationMode={integrationMode} activeTab={activeTab} active180Tab={active180Tab} />
        <Body>{bodyContent}</Body>
      </div>
    </div>
  );
}

function Section({ bodyContent, integrationMode, activeTab, active180Tab }: { bodyContent?: React.ReactNode; integrationMode?: '360' | '180'; activeTab?: 1 | 2 | 3; active180Tab?: 1 | 2 }) {
  return (
    <div className="bg-[#f2f0e9] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full mx-[0px] mt-[0px] mb-[80px] px-[0px] py-[80px]" data-name="Section">
      <Steps bodyContent={bodyContent} integrationMode={integrationMode} activeTab={activeTab} active180Tab={active180Tab} />
    </div>
  );
}

function Text5() {
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
      <Text5 />
    </div>
  );
}

function VideoFrame() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start w-full relative shrink-0" data-name="VideoFrame">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }} data-name="FrameVideo">
        <iframe
          src="https://fast.wistia.net/embed/iframe/z4h0pqpuwk?videoFoam=true"
          title="How to Register or Request an Exemption"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full border border-[#c3c3c3]"
        />
      </div>
    </div>
  );
}

function VideoDetails() {
  return (
    <div className="content-stretch flex flex-col md:flex-row font-['Poppins',sans-serif] font-medium items-start md:items-center md:justify-between gap-2 md:gap-4 leading-[0] not-italic relative shrink-0 text-[12px] tracking-[1px] w-full" data-name="VideoDetails">

      <div className="flex flex-col justify-center relative flex-1 md:flex-none min-w-0 text-[#6b6b6b]">
        <p className="leading-[18px] min-w-0 break-words">Payroll provider integration options</p>
      </div>
      <div className="flex flex-col justify-center relative flex-1 md:flex-none min-w-0 text-[#00594f]">
        <a className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline min-w-0 break-words" href="https://ascensus-1.wistia.com/medias/z4h0pqpuwk" target="_blank">Captions Transcript</a>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0 w-full " data-name="Video">
      <VideoFrame />
      <VideoDetails />
    </div>
  );
}

function InnerContainer4() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] max-w-[1140px] relative shrink-0 w-full" data-name="InnerContainer">
      <LeftContainer />
      <Video />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center mb-[-1px] relative shrink-0 w-full px-[0px] pt-[0px] pb-[80px]" data-name="Section">
      <div className="flex flex-col md:grid gap-x-[32px] gap-y-[32px] md:grid-cols-[repeat(3,minmax(0,1fr))] md:grid-rows-[repeat(1,fit-content(100%))] max-w-[1140px] relative shrink-0 w-full px-[24px]" data-name="InnerContainer">
        <div className="md:col-[1/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative md:row-1 self-start shrink-0 w-full" data-name="RightContainer">
          <VideoFrame />
          <VideoDetails />
        </div>
        <div className="md:col-3 content-stretch flex flex-col gap-[32px] items-start justify-center justify-self-stretch relative md:row-1 self-stretch shrink-0 w-full" data-name="LeftContainer">
          <Text5 />
        </div>
      </div>
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
    <div className="absolute bottom-[34.8px] h-[562px] right-[32px] w-[600px]" data-name="Chatbot">
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
      <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-0 not-italic relative text-[28px] text-black tracking-[0.6px]">
        <p className="leading-[38px]">Need additional support?</p>
      </div>
    </div>
  );
}

function Group2() {
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

function Text6() {
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
        <Group2 />
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full min-w-0">
        <p className="leading-[24px]">Chat with CalSavvy</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0">
        <p className="leading-[24px]">CalSavvy helps employers with questions about the CalSavers retirement program, from registration to operations!</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_5687)" id="Arrow">
          <path d="M0.96875 8H15.0312" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf992b80} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5687">
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

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start relative w-full" data-name="Text">
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
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black text-left tracking-[1px] w-full min-w-0">
        <p className="leading-[24px]">Employer FAQs</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] text-left tracking-[1px] w-full min-w-0">
        <p className="leading-[24px]">For more information about running CalSavers visit our FAQ page.</p>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_5687)" id="Arrow">
          <path d="M0.96875 8H15.0312" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf992b80} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5687">
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
    <div className="col-[2/span_3] content-stretch flex flex-col md:flex-row gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0 w-full" data-name="Cards">
      <div className="bg-white content-stretch flex w-full md:flex-[1_0_0] flex-col gap-[24px] items-start p-[24px] relative rounded-[8px] shrink-0" data-name="SupportCard">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Text6 />
        <Link />
      </div>
      <a className="bg-white cursor-pointer w-full md:flex-[1_0_0] flex-col relative rounded-[8px] self-stretch shrink-0 p-[24px]" href="https://www.calsavers.com/home/frequently-asked-questions.html?language=en# " target="_blank" data-name="SupportCard">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-start flex-start relative size-full shrink-0">
          <Text7 />
          <Link1 />
        </div>
      </a>
    </div>
  );
}

function InnerContainer5() {
  return (
    <div className="flex-[1_0_0] gap-x-[32px] gap-y-[40px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] max-w-[1140px] min-w-0 relative" data-name="InnerContainer">
      <Title />
      <Cards />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f2f6f6] content-stretch flex items-center justify-center mb-[-1px] py-[80px] relative shrink-0 w-full px-[24px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,89,79,0.25)] border-b border-solid border-t inset-0 pointer-events-none" />
      <InnerContainer5 />
    </div>
  );
}

function Group3() {
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
      <Group3 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-140px] relative shrink-0 max-w-[1140px] w-full">
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
export { InnerContainer3 as Tab1BodyContent };

export default function PayrollProviderIntegration(props?: { bodyContent?: React.ReactNode; integrationMode?: '360' | '180'; activeTab?: 1 | 2 | 3; active180Tab?: 1 | 2 }) {
  const bodyContent = props?.bodyContent;
  const integrationMode = props?.integrationMode || '360';
  const activeTab = props?.activeTab || 1;
  const active180Tab = props?.active180Tab || 1;

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Payroll Provider Integration">
      <Navigation />
      <Hr />
      <Hero />
      <Section bodyContent={bodyContent} integrationMode={integrationMode} activeTab={activeTab} active180Tab={active180Tab} />
      <Section1 />
      <Chatbot />
      <Section2 />
      <div className="bg-[#565958] relative shrink-0 w-full" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip  py-[32px] relative rounded-[inherit] size-full">
          <Frame />
          <FooterLinks />
          <FooterLinks1 />
          <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1px] w-full whitespace-pre-wrap">
            <p className="leading-[18px] mb-0">The CalSavers Retirement Savings Program ("CalSavers" or the "Program") is an automatic enrollment payroll deduction IRA overseen by the CalSavers Retirement Savings Board ("Board"). Ascensus College Savings Recordkeeping Services, LLC ("ACSR") is the program administrator. ACSR and its affiliates are responsible for day-to-day program operations. Participants saving through CalSavers beneficially own and have control over their IRAs, as provided in the Program Disclosure Booklet available at saver.calsavers.com. CalSavers is not sponsored by the employer, and therefore the employer is not responsible for the Program or liable as a Program sponsor. Employers are not permitted to endorse the Program or encourage or advise employees on whether to participate, how much (if any) to contribute or provide investment help.</p>
            <p className="leading-[18px] mb-0">CalSavers offers investment options selected by the Board. For more information on CalSavers' investment options go to saver.calsavers.com. Account balances in CalSavers will vary with market conditions. Investments in CalSavers are not guaranteed or insured by the Board, the State of California, the Federal Deposit Insurance Corporation, or any other organization.</p>
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