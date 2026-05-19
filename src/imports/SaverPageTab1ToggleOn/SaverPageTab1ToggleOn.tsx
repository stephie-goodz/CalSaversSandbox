import svgPaths from "./svg-9oyl6dsbe3";

// ============================================
// Sign Up Toggle ON Body Components
// ============================================
// This file contains ONLY the components needed for the Sign Up tab when toggle is ON.
// Shared sections (header, hero, footer, etc.) are in SaverPageTab1ToggleOff.tsx

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

function Group4() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#00594f] col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
      <Switch />
    </button>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Need a simplified walk-though?</p>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] min-w-0 break-words">Toggle Quick Overview Instructions</p>
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch justify-between flex gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">How to Register for CalSavers</p>
      <Frame6 />
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
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[1px] w-full" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">{`Set Up Your Account Online `}</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">{`You can sign up through your employer after they register and a welcome packet is sent. If you are self-employed, a gig worker or don't work for an employer registered with CalSavers, you can also contribute directly. `}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextContainer />
      <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
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
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Review Your Contribution Percentage</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Navigate to the Contributions page in your account and confirm the default contribution percentage or enter a new amount. Save your changes to ensure future payroll deductions reflect your selection</p>
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
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Step />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Review Your Investment Options</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Go to the investments section of your account. Review the available investment options and choose the default investment options or adjust investments and confirm your choice.</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Step 3">
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
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Set Up Your Beneficiaries</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Go to the Beneficiaries section in your dashboard. Enter the required information for the beneficiary and save your selections.</p>
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
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Step2 />
      <Step3 />
    </div>
  );
}

function StepsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="StepsContainer">
      <Row />
      <Row1 />
    </div>
  );
}

function RegisterExerienced() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Register/Exerienced">
      <StepsContainer />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full z-[3]" data-name="Group">
      <StepText />
      <RegisterExerienced />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-w-px not-italic relative text-[16px] text-black tracking-[1px]" data-name="Text">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Need more help?</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">The CalSavers Saver Resource page offers recorded webinars, brochures, calculators and forms to help you learn more about saving and managing your CalSavers IRA.</p>
      </div>
    </div>
  );
}

// ============================================
// Exported Body Component
// ============================================

export function SignUpToggleOnBody() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full z-[1]" data-name="Body">
      <div className="content-stretch flex flex-col gap-[40px] isolate items-start overflow-clip px-[48px] py-[56px] relative rounded-[inherit] size-full">
        <Group1 />
        <div className="bg-[#e5eeed] relative rounded-[8px] shrink-0 w-full z-[2]" data-name="SaverResourceBanner">
          <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[48px] items-center px-[32px] py-[24px] relative size-full">
              <Text7 />
              <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
                  <p className="leading-[24px]">Go to Saver Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}
