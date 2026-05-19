import svgPaths from "./svg-c8jbgef0pk";

// ============================================
// Opt-Out Body Components
// ============================================
// This file contains ONLY the components needed for the Opt-Out tab.
// Shared sections (header, hero, footer, etc.) are in SaverPageTab1ToggleOff.tsx

function StepText() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="StepText">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">Opting-out of the CalSavers program</p>
    </div>
  );
}

function Check18() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 21.0039">
        <g id="check">
          <path d={svgPaths.pe5e300} fill="var(--fill-0, #846926)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function BenefitText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[0] min-w-px not-italic relative text-black tracking-[1px]" data-name="BenefitText">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">Online</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[0px] w-full">
        <p className="text-[16px]">
          <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
            <span className="decoration-solid underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
              Log in
            </span>
          </a>
          <span className="leading-[24px]">{` with your access code opt out online`}</span>
        </p>
      </div>
    </div>
  );
}

function Benefit4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check18 />
      <BenefitText4 />
    </div>
  );
}

function Check19() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 21.0039">
        <g id="check">
          <path d={svgPaths.pe5e300} fill="var(--fill-0, #846926)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function BenefitText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[0] min-w-px not-italic relative text-[16px] text-black tracking-[1px]" data-name="BenefitText">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">By Phone</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Call our automated phone system at (855) 650-6918 and follow the prompts.</p>
      </div>
    </div>
  );
}

function Benefit5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check19 />
      <BenefitText5 />
    </div>
  );
}

function Check20() {
  return (
    <div className="h-[21.004px] relative shrink-0 w-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 21.0039">
        <g id="check">
          <path d={svgPaths.pe5e300} fill="var(--fill-0, #846926)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function BenefitText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[0] min-w-px not-italic relative tracking-[1px]" data-name="BenefitText">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Mailing a Completed Form</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[#6b6b6b] text-[0px] w-full">
        <p className="text-[16px]">
          <span className="leading-[24px] text-black">{`Download, complete, and mail-in a `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">paper opt-out form</span>
        </p>
      </div>
    </div>
  );
}

function Benefit6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check20 />
      <BenefitText6 />
    </div>
  );
}

function BenefitContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit Container">
      <Benefit4 />
      <Benefit5 />
      <Benefit6 />
    </div>
  );
}

function Requirement() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Requirement">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">
        <p className="leading-[24px]">Ways to opt-out of CalSavers:</p>
      </div>
      <BenefitContainer1 />
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

export function OptOutBody() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full z-[1]" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[48px] py-[56px] relative rounded-[inherit] size-full">
        <StepText />
        <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">You can opt out of CalSavers at any time, but you must be added to CalSavers by an employer before you can opt out. You must complete one of the following methods to opt-out or you will be automatically enrolled with the standard savings and investment options 30 days after the welcome packet is sent.</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px]">If you change your mind, you can opt back in at any time through the same methods.</p>
        </div>
        <Requirement />
        <div className="bg-[#e5eeed] relative rounded-[8px] shrink-0 w-full" data-name="SaverResourceBanner">
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
