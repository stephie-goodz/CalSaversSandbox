import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../../app/components/figma/ImageWithFallback";
import svgPaths from "./svg-2v9jfvim3f";
import imgImage from "./e6337aeab3bb45ac2079bf30c5c5036f12b0d253.png";
import imgImage271 from "./6568f42840319b6c3af603b082bc57fc59b6af19.png";
import imgHero from "./76a88b26d5617390630c29698cc4352bc6962f0b.png";
import imgScreenshot from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgScreenshot20240624At23545Pm1 from "./039f4bb8bf585934b82734f24f18ba6d5292401d.png";
import imgCaSealWhite1 from "./c38e6508f8ab610083aded5dea6e466c8ce1f856.png";

function Banner() {
  return (
    <div className="content-stretch flex flex-col h-[300px] items-start max-w-[66.66%] py-[16px] relative shrink-0 w-full" data-name="Banner">
      <div className="flex-auto min-h-px relative w-full" data-name="Image">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="logo">
      <div className="h-[80px] relative shrink-0 w-[302px]" data-name="image 271">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage271} />
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
    <div className="bg-white relative shrink-0 w-full" data-name="InnerContainer">
      <div className="flex flex-row items-center justify-center max-w-[inherit] w-full size-full">
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
    <div className="bg-white h-[112px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative size-full">
          <InnerContainer />
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ChevronDown">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ChevronDown">
          <path d={svgPaths.p27eeb600} fill="var(--fill-0, #343A40)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[21px]">Employers</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function CheckOverview() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Dropdown({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <div className={`absolute bg-white left-0 rounded-[8px] top-[37px] min-w-[280px] z-50 shadow-md ${isOpen ? '' : 'hidden'}`} data-name="Dropdown">
      <div className="rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col items-start py-[8px] relative w-full">
          <div className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <CheckOverview />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black uppercase">
                  <p className="leading-[24px]">Overview</p>
                </div>
              </div>
            </div>
          </div>
          <a className="cursor-pointer relative shrink-0 w-full" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Register</p>
                </div>
              </div>
            </div>
          </a>
          <div className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check1 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black uppercase">
                  <p className="leading-[24px]">How to Register and Run</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check2 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black uppercase">
                  <p className="leading-[24px]">Program Resources</p>
                </div>
              </div>
            </div>
          </div>
          <a className="cursor-pointer relative shrink-0 w-full" href="https://employer.calsavers.com/home/employers/support.html" target="_blank" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check3 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Employer Support</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c3c3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ChevronDown">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ChevronDown">
          <path d={svgPaths.p27eeb600} fill="var(--fill-0, #343A40)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[21px]">Savers</p>
      </div>
      <ChevronDown1 />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check8() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Dropdown1({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <div className={`absolute bg-white left-0 rounded-[8px] top-[37px] min-w-[280px] z-50 shadow-md ${isOpen ? '' : 'hidden'}`} data-name="Dropdown">
      <div className="rounded-[inherit] w-full">
        <div className="content-stretch cursor-pointer flex flex-col items-start py-[8px] relative w-full">
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check4 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Overview</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check5 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Savers Program Details</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check6 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Resources</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check7 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Financial Education</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check8 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Withdrawals</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c3c3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NavLinks() {
  const [openDropdown, setOpenDropdown] = useState<'employers' | 'savers' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);
  return (
    <div ref={navRef} className="content-stretch flex items-center relative shrink-0" data-name="NavLinks">
      <div className="content-stretch flex items-center justify-center overflow-visible relative rounded-[4px] shrink-0" data-name="EmployerNav">
        <button onClick={() => setOpenDropdown(openDropdown === 'employers' ? null : 'employers')}>
          <Container />
        </button>
        <Dropdown isOpen={openDropdown === 'employers'} />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-visible relative rounded-[4px] shrink-0" data-name="NavigationLink">
        <button onClick={() => setOpenDropdown(openDropdown === 'savers' ? null : 'savers')}>
          <Container1 />
        </button>
        <Dropdown1 isOpen={openDropdown === 'savers'} />
      </div>
      <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="NavigationLink">
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center uppercase whitespace-nowrap">
          <p className="leading-[21px]">About</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="NavigationLink">
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center uppercase whitespace-nowrap">
          <p className="leading-[21px]">Help Center</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ChevronDown">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ChevronDown">
          <path d={svgPaths.p27eeb600} fill="var(--fill-0, #343A40)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[21px]">English</p>
      </div>
      <ChevronDown2 />
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check10() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check11() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check12() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Check13() {
  return (
    <div className="relative shrink-0 size-0" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0001 0.0001">
        <g id="check" />
      </svg>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute bg-white h-0 left-0 rounded-[4px] top-[37px] w-[100px]" data-name="Dropdown">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch cursor-pointer flex flex-col items-start py-[8px] relative size-full">
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check9 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Line Item</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check10 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Line Item</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check11 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Line Item</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check12 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Line Item</p>
                </div>
              </div>
            </div>
          </button>
          <button className="relative shrink-0 w-full" data-name="Dropdown-LineItem">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <Check13 />
                <div className="flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[16px] text-black text-left uppercase">
                  <p className="leading-[24px]">Line Item</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c3c3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[66.66%] relative shrink-0 w-full" data-name="InnerContainer">
      <NavLinks />
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="NavigationLink">
        <Container2 />
        <Dropdown2 />
      </div>
    </div>
  );
}

function SecondaryNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEmpOpen, setMobileEmpOpen] = useState(false);
  const [mobileSavOpen, setMobileSavOpen] = useState(false);
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-center py-[8px] relative shrink-0 w-full" data-name="SecondaryNav">
      <div aria-hidden="true" className="absolute border border-[#c3c3c3] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center justify-between max-w-[66.66%] relative shrink-0 w-full" data-name="InnerContainer">
        {/* Hamburger — mobile only, left of language dropdown */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 4.5C1.5 3.67031 2.17031 3 3 3H21C21.8297 3 22.5 3.67031 22.5 4.5C22.5 5.32969 21.8297 6 21 6H3C2.17031 6 1.5 5.32969 1.5 4.5ZM1.5 12C1.5 11.1703 2.17031 10.5 3 10.5H21C21.8297 10.5 22.5 11.1703 22.5 12C22.5 12.8297 21.8297 13.5 21 13.5H3C2.17031 13.5 1.5 12.8297 1.5 12ZM22.5 19.5C22.5 20.3297 21.8297 21 21 21H3C2.17031 21 1.5 20.3297 1.5 19.5C1.5 18.6703 2.17031 18 3 18H21C21.8297 18 22.5 18.6703 22.5 19.5Z" fill="#343A40"/>
          </svg>
        </button>
        {/* Desktop nav links */}
        <NavLinks />
        {/* Language dropdown — always visible */}
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="NavigationLink">
          <Container2 />
          <Dropdown2 />
        </div>
      </div>
      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="md:hidden absolute bg-white left-0 top-full w-full z-40 shadow-lg border-t border-[#c3c3c3]">
          <div>
            <button
              className="flex items-center justify-between w-full px-6 py-3 font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black"
              onClick={() => setMobileEmpOpen(!mobileEmpOpen)}
            >
              <span>Employers</span>
              <ChevronDown />
            </button>
            {mobileEmpOpen && (
              <div className="px-6 py-2 flex flex-col">
                <a className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank">Register</a>
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">How to Register and Run</span>
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">Program Resources</span>
                <a className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2" href="https://employer.calsavers.com/home/employers/support.html" target="_blank">Employer Support</a>
              </div>
            )}
          </div>
          <div>
            <button
              className="flex items-center justify-between w-full px-6 py-3 font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black"
              onClick={() => setMobileSavOpen(!mobileSavOpen)}
            >
              <span>Savers</span>
              <ChevronDown />
            </button>
            {mobileSavOpen && (
              <div className="px-6 py-2 flex flex-col">
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">Line Item</span>
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">Line Item</span>
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">Line Item</span>
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">Line Item</span>
                <span className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black py-2">Line Item</span>
              </div>
            )}
          </div>
          <div className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black px-6 py-3">About</div>
          <div className="font-['Poppins',sans-serif] font-medium text-[14px] uppercase text-black px-6 py-3">Help Center</div>
          <div className="flex gap-4 px-6 py-4 border-t border-[#c3c3c3]">
            <div className="bg-white flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] border border-[#00594f]">
              <span className="font-['Poppins',sans-serif] font-semibold text-[#00594f] text-[16px] tracking-[1px]">Register</span>
            </div>
            <a className="bg-[#00594f] flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] border border-[#00473f]" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
              <span className="font-['Poppins',sans-serif] font-semibold text-white text-[16px] tracking-[1px]">Login</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function InnerContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Poppins',sans-serif] font-medium gap-[16px] items-start leading-[0] max-w-[66.66%] w-full min-w-px not-italic relative text-white" data-name="InnerContainer">
      <div className="flex flex-col justify-center relative shrink-0 text-[54px] w-full">
        <p className="leading-[64.8px]">CalSavers for Savers</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] tracking-[1px] w-full">
        <p className="leading-[32px]">{`The State of California created CalSavers to ensure that all Californians have access to a workplace retirement savings program by providing a simple, portable, low-cost way for workers to invest in their futures. `}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-medium leading-[38px] relative shrink-0 text-[28px] tracking-[0.6px] w-full">Ready to start saving?</p>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px] tracking-[1px] w-full">
        <p className="leading-[24px]">Did you receive a welcome communication from CalSavers? Use the access code provided to set up your account online. If you are self-employed, a gig worker or don’t work for an employer registered with CalSavers, you can also sign yourself up.</p>
      </div>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] flex-wrap items-center relative shrink-0" data-name="Button Group">
      <a className="bg-[#00594f] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://saver.calsavers.com/californiaeetpl/member/webreg/viewCollectErInfo.cs" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Get Started</p>
        </div>
      </a>
      <button className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Opt-Out Instructions</p>
        </div>
      </button>
    </div>
  );
}

function Card() {
  return (
    <div className="full-width bg-[#f2f6f6] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-[1_0_0] min-w-px w-full relative rounded-[8px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full size-full">
        <Text />
        <ButtonGroup1 />
        <a className="cursor-pointer flex flex-col font-['Poppins',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[0px] tracking-[1px] whitespace-nowrap" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
          <p className="text-[16px]">
            <span className="font-['Poppins',sans-serif] leading-[24px] text-black">Already have an account?</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] underline">{` Log in`}</span>
          </p>
        </a>
      </div>
    </div>
  );
}

function InnerContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center max-w-[66.66%] w-full relative" data-name="InnerContainer">
      <InnerContainer3 />
      <Card />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex items-start justify-center py-[80px] w-full w-full relative shrink-0 z-[7] overflow-hidden" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <ImageWithFallback alt="" className="absolute max-w-none object-top-left size-full object-fill p-[0px] overflow-hidden" src={imgHero} />
        <div className="absolute bg-[rgba(0,89,79,0.41)] inset-0 mix-blend-multiply" />
        <div className="absolute bg-gradient-to-b from-[rgba(0,89,79,0.7)] inset-0 to-[81.732%] to-[rgba(59,148,166,0.7)]" />
      </div>
      <InnerContainer2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-black tracking-[1px] w-full" data-name="Text">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">Are you eligible for the Saver’s Tax Credit?</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center relative shrink-0 text-[0px] w-full">
        <p className="text-[16px]">
          <span className="font-['Poppins',sans-serif] leading-[24px] text-black">{`Another great benefit of contributing to a Roth IRA is that if your income falls within certain limits, you may be able to qualify for the `}</span>
          <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] text-[#00594f] underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-credit-savers-credit" target="_blank">
            <span className="decoration-solid underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-credit-savers-credit" target="_blank">{`Saver's Tax Credit`}</span>
          </a>
          <span className="font-['Poppins',sans-serif] leading-[24px] text-black">{` of up to $1,000. This may reduce the amount of federal tax you owe for a particular year.`}</span>
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] w-full items-start min-w-px not-italic relative" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-medium leading-[48px] relative shrink-0 text-[34px] text-black tracking-[0.6px] w-full">CalSavers program eligibility</p>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">
        <p className="leading-[24px]">{`If your employer offers CalSavers, you can sign up easily. If you're self-employed or your employer isn't registered, you can still contribute directly.`}</p>
      </div>
      <Text2 />
    </div>
  );
}

function Check14() {
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

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">
        <p className="leading-[24px]">You are either signed up through an employer, self-employed, or a gig worker</p>
      </div>
    </div>
  );
}

function BenefitText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text3 />
    </div>
  );
}

function Benefit() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check14 />
      <BenefitText />
    </div>
  );
}

function Check15() {
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

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">
        <p className="leading-[24px]">{`You are 18 or older `}</p>
      </div>
    </div>
  );
}

function BenefitText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text4 />
    </div>
  );
}

function Benefit1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check15 />
      <BenefitText1 />
    </div>
  );
}

function Check16() {
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

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">
        <p className="leading-[24px]">You have a Social Security Number or an Individual Taxpayer Identification Number</p>
      </div>
    </div>
  );
}

function BenefitText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text5 />
    </div>
  );
}

function Benefit2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check16 />
      <BenefitText2 />
    </div>
  );
}

function Check17() {
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

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">
        <p className="leading-[24px]">You have taxable income</p>
      </div>
    </div>
  );
}

function BenefitText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text6 />
    </div>
  );
}

function Benefit3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Benefit">
      <Check17 />
      <BenefitText3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Benefit />
      <Benefit1 />
      <Benefit2 />
      <Benefit3 />
    </div>
  );
}

function BenefitContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-full" data-name="Benefit Container">
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">
        <p className="leading-[24px]">Eligibility requirements include:</p>
      </div>
      <Container3 />
    </div>
  );
}

function InnerContainer4() {
  return (
    <div id="m-stack" className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full" data-name="InnerContainer">
      <div className="w-full md:flex-1 md:min-w-0">
        <Text1 />
      </div>
      <div className="w-full md:flex-1 md:min-w-0">
        <BenefitContainer />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[80px] relative shrink-0 w-[1440px] z-[6]" data-name="Section">
      <InnerContainer4 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <p className="font-['Poppins',sans-serif] font-medium leading-[48px] not-italic relative shrink-0 text-[34px] text-black text-center tracking-[0.6px] w-full">How to sign up or opt-out of CalSavers</p>
    </div>
  );
}

function TabText({ isActive = true }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Tab Text">
      <p className={`font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] ${isActive ? "text-black" : "text-[#00594f]"} tracking-[1px] whitespace-nowrap`}>Sign Up for CalSavers</p>
    </div>
  );
}

function TextIcon({ isActive = true }: { isActive?: boolean }) {
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
      <TabText isActive={isActive} />
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

function TabText1({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Tab Text">
      <p className={`font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 ${isActive ? "text-black" : "text-[#00594f]"} text-[16px] text-left tracking-[1px] whitespace-nowrap`}>Opt-Out of CalSavers</p>
    </div>
  );
}

function TextIcon1({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Exempt">
        <Group />
      </div>
      <TabText1 isActive={isActive} />
    </div>
  );
}

function Tabs({ activeTab = 'signup' }: { activeTab?: 'signup' | 'optout' }) {
  const signUpActive = activeTab === 'signup';
  const optOutActive = activeTab === 'optout';
  return (
    <div className="content-stretch flex gap-[16px] items-start mb-[-1px] relative shrink-0 w-[996px] z-[2]" data-name="Tabs">
      <div className={`${signUpActive ? 'bg-white justify-end' : 'bg-[#f2f0e9] justify-center'} content-stretch flex flex-col h-[72px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0`} data-name="TabSetup">
        <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]${signUpActive ? ' border-b-0' : ''}`} />
        <TextIcon isActive={signUpActive} />
        <div className={`h-px relative shrink-0 w-full${!signUpActive ? ' opacity-0' : ''}`} data-name="Spacer">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center px-px relative size-full">
              <div className="bg-white h-[3px] relative shrink-0 w-full" data-name="Spacer" />
            </div>
          </div>
        </div>
      </div>
      <button className={`${optOutActive ? 'bg-white justify-end' : 'bg-[#f2f0e9] justify-center'} content-stretch cursor-pointer flex flex-col h-[72px] items-start max-w-[340px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0`} data-name="TabSetup">
        <div aria-hidden="true" className={`absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]${optOutActive ? ' border-b-0' : ''}`} />
        <TextIcon1 isActive={optOutActive} />
        <div className={`h-px relative shrink-0 w-full${!optOutActive ? ' opacity-0' : ''}`} data-name="Spacer">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center px-px relative size-full">
              <div className="bg-white h-[2px] relative shrink-0 w-full" data-name="Spacer" />
            </div>
          </div>
        </div>
      </button>
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
      <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Need a more detailed walk-through?</p>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] min-w-0 break-words">Toggle Detailed Instructions</p>
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch flex justify-between flex-col md:flex-row gap-[8px] items-start relative shrink-0 z-[3] w-full" data-name="StepText">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[32px] not-italic relative text-[20px] text-black tracking-[1px] min-w-0 break-words">How to Register for CalSavers</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">{`Set Up Your Account Online `}</p>
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

function EmployerSignUp() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 tracking-[1px] w-full" data-name="Employer SignUp">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Saving through your employer</p>
      <p className="font-['Poppins',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] w-full">
        <span className="leading-[24px] text-[16px]">{`When your employer is registered with CalSavers and you are eligible to participate, you’ll receive a communication from CalSavers that includes an access code. Use this code to set up your online account access. Then `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] text-[#00594f] text-[16px] underline">set up your account</span>
        <span className="leading-[24px] text-[16px]">{` and update your preferences. `}</span>
      </p>
    </div>
  );
}

function SelfSignUp() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 tracking-[1px] w-full" data-name="Self SignUp">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Self sign-up</p>
      <a className="block cursor-pointer font-['Poppins',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] w-full" href="https://employer.calsavers.com/californiaertpl/register/viewCollectResendAccessCode.cs" target="_blank">
        <p className="text-[16px]">
          <span className="leading-[24px]">{`If you’re self-employed, a gig worker or don’t work for an employer registered with CalSavers but are interested in saving with CalSavers, you can also participate. To `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">sign up</span>
          <span className="leading-[24px]">, you need your contact information and banking information for contributions.</span>
        </p>
      </a>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Text">
      <EmployerSignUp />
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">You will be automatically enrolled in CalSavers with the default options 30 days after the welcome packet is sent, unless you make a change or opt out.</p>
      <div className="h-0 relative shrink-0 w-full" data-name="HR">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 980 1">
            <line id="HR" stroke="var(--stroke-0, #C3C3C3)" x2="980" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <SelfSignUp />
      <p className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full">
        <span className="leading-[24px] text-[16px]">{`Once registered, you’ll have access to your secure `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] text-[#00594f] text-[16px] underline" href="https://saver.calsavers.com/californiaeetpl/member/webreg/viewCollectErInfo.cs" target="_blank">
          <span className="[text-decoration-skip-ink:none] decoration-solid underline" href="https://saver.calsavers.com/californiaeetpl/member/webreg/viewCollectErInfo.cs" target="_blank">
            CalSavers Account.
          </span>
        </a>
      </p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Step">
      <Text7 />
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
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Review Your Contribution Percentage</p>
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

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[0] min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full">
        <p className="mb-0 text-[16px] whitespace-pre-wrap">
          <span className="font-['Poppins',sans-serif] leading-[24px] not-italic tracking-[1px]">CalSavers automatically sets a default contribution rate</span>
          <span className="leading-[24px]">{` of 5% for your Roth IRA account`}</span>
          <span className="font-['Poppins',sans-serif] leading-[24px] not-italic tracking-[1px]">{`, but you can increase, decrease, or pause your contributions at any time based on your budget and financial goals. `}</span>
          <span className="leading-[24px]">Check out the</span>
          <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] underline" href="https://saver.calsavers.com/home/savers/calculator.html?language=en#" target="_blank">
            <span className="decoration-solid underline" href="https://saver.calsavers.com/home/savers/calculator.html?language=en#" target="_blank">{` Saver Calculator`}</span>
          </a>
          <span className="leading-[24px]">{` to learn more about how much to save.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px] whitespace-pre-wrap">​</p>
        <ol className="list-decimal" start="1">
          <li className="leading-[24px] mb-[12px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            {`Navigate to your `}
            <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold not-italic text-[#00594f] tracking-[1px] underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
              <span className="decoration-solid underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
                Contribution Settings
              </span>
            </a>
          </li>
          <li className="mb-[12px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[24px] text-[16px]">Confirm the default contribution percentage or enter a new amount. You may increase, decrease, pause, or restart contributions at any time.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[24px] text-[16px]">Save your changes to ensure future payroll deductions reflect your selection</span>
          </li>
        </ol>
      </div>
      <a className="block cursor-pointer font-['Poppins',sans-serif] not-italic relative shrink-0 text-[0px] text-black tracking-[1px] w-full" href="https://employer.calsavers.com/californiaertpl/register/viewCollectResendAccessCode.cs" target="_blank">
        <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] mb-0 text-[16px]">Are you eligible for the Saver’s Tax Credit?</p>
      </a>
      <p>
        <a className="block cursor-pointer font-['Poppins',sans-serif] not-italic relative shrink-0 text-[0px] text-black tracking-[1px] w-full" href="https://employer.calsavers.com/californiaertpl/register/viewCollectResendAccessCode.cs" target="_blank">
          <span className="leading-[24px] text-[16px]">{`If your income falls within certain limits, you may be able to qualify for the `}</span>
        </a>
        <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] text-[16px] tracking-[1px] underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-credit-savers-credit" target="_blank">
          <span className="decoration-solid underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-credit-savers-credit" target="_blank">{`Saver's Tax Credit`}</span>
        </a>
        <span className="leading-[24px] text-[16px]">{` of up to $1,000`}</span>
      </p>
      <p className="font-['Poppins',sans-serif] italic italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full">
        <span className="leading-[18px] text-[12px]">{`NOTE: CalSavers accounts are Roth (post tax) IRAs, and those with higher incomes may not be eligible to contribute. If you earn more than the `}</span>
        <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-medium leading-[18px] not-italic text-[#00594f] text-[12px] underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" target="_blank">
          <span className="decoration-solid underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" target="_blank">
            Roth IRA income limits
          </span>
        </a>
        <span className="leading-[18px] text-[12px]">{` set by the federal government, you may need to opt out of CalSavers or recharacterize to a Traditional IRA. Learn more about `}</span>
        <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-medium leading-[18px] not-italic text-[#00594f] text-[12px] underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" target="_blank">
          <span className="decoration-solid underline" href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" target="_blank">
            contribution limits
          </span>
        </a>
        <span className="leading-[18px] text-[12px]">{`. CalSavers offers savers the option to recharacterize their contributions to a Traditional IRA. You can complete this action `}</span>
        <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-medium leading-[18px] not-italic text-[#00594f] text-[12px] underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
          <span className="decoration-solid underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
            online
          </span>
        </a>
        <span className="leading-[18px] text-[12px]">{`, use this `}</span>
        <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-medium leading-[18px] not-italic text-[#00594f] text-[12px] underline" href="https://cdn.unite529.com/jcdn/files/CAEE/pdfs/en_US/305_Recharacterization_Election.pdf" target="_blank">
          <span className="decoration-solid underline" href="https://cdn.unite529.com/jcdn/files/CAEE/pdfs/en_US/305_Recharacterization_Election.pdf" target="_blank">
            form
          </span>
        </a>
        <span className="leading-[18px] text-[12px]">{`, or `}</span>
        <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-medium leading-[18px] not-italic text-[#00594f] text-[12px] underline" href="https://www.calsavers.com/home/frequently-asked-questions.html" target="_blank">
          <span className="decoration-solid underline" href="https://www.calsavers.com/home/frequently-asked-questions.html" target="_blank">
            contact Client Services
          </span>
        </a>
        <span className="leading-[18px] text-[12px]">{` to get the process started.`}</span>
      </p>
    </div>
  );
}

function Screenshot() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Screenshot">
      <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Screenshot FPO</p>
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

function Step1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text8 />
      <ScreenshotContainer />
    </div>
  );
}

function Steps1() {
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
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Review Your Investment Options</p>
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

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full">
        <p className="mb-0 text-[16px] whitespace-pre-wrap">
          <span className="leading-[24px]">{`Once your contributions are set, you’ll want to review how your money is invested. If you don’t select an option, your contributions are placed into a default investment designed to align with your age and expected retirement timeline. See fund `}</span>
          <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline" href="https://saver.calsavers.com/home/savers/price--performance.html" target="_blank">
            <span className="decoration-solid underline" href="https://saver.calsavers.com/home/savers/price--performance.html" target="_blank">
              pricing performance
            </span>
          </a>
          <span className="leading-[24px]">{` for additional information.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px] whitespace-pre-wrap">​</p>
        <p className="leading-[24px] mb-0 text-[16px] whitespace-pre-wrap">{`If you don't select your investments, your initial contributions will be invested in the CalSavers Money Market Fund for 30 days. After 30 days from your first contribution, your next contributions, along with any earnings in the Money Market Fund, will be re-allocated to a CalSavers Target Retirement Fund based on your age and the year closest to when a person your age is expected to retire.`}</p>
        <p className="leading-[24px] mb-0 text-[16px] whitespace-pre-wrap">​</p>
        <ol className="list-decimal mb-0" start="1">
          <li className="leading-[24px] mb-[12px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] not-italic text-[16px] tracking-[1px]">
            <span className="font-['Poppins',sans-serif]">{`Go to the `}</span>
            <a className="cursor-pointer decoration-solid font-['Poppins',sans-serif] font-semibold text-[#00594f] underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
              <span className="decoration-solid underline" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank">
                Investments section
              </span>
            </a>
            <span className="font-['Poppins',sans-serif]">{` of your account.`}</span>
          </li>
          <li className="leading-[24px] mb-[12px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] not-italic text-[16px] tracking-[1px]">
            <span className="font-['Poppins',sans-serif]">{`Review the available investment options. If you do not make a selection, your contributions will remain in the default investment option. `}</span>
            <span className="decoration-solid font-['Poppins',sans-serif] font-semibold text-[#00594f] underline">{`Learn more `}</span>
            <span className="font-['Poppins',sans-serif]">about investment options.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Poppins',sans-serif] leading-[24px] not-italic text-[16px] tracking-[1px]">To change investments, select your preferred option and confirm your choice.</span>
          </li>
        </ol>
        <p className="leading-[24px] mb-0 text-[16px] whitespace-pre-wrap">​</p>
        <p className="leading-[24px] text-[16px] whitespace-pre-wrap">You can return to this section later to make changes if your preferences change.</p>
      </div>
    </div>
  );
}

function Screenshot1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Screenshot">
      <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
        <p className="font-['Poppins',sans-serif] italic italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">Screenshot FPO</p>
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

function Step2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text9 />
      <ScreenshotContainer1 />
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

function Accordions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordions">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Steps />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded1 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 2">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Steps1 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded2 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 3">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <Steps2 />
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
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full z-[3]" data-name="Group">
      <StepText />
      <RegisterNovice />
    </div>
  );
}

function Text10() {
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

export function SignUpToggleOffBody() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full z-[1]" data-name="Body">
      <div className="content-stretch flex flex-col gap-[40px] isolate items-start overflow-clip px-[48px] py-[56px] relative rounded-[inherit] size-full">
        <Group1 />
        <div className="bg-[#e5eeed] relative rounded-[8px] shrink-0 w-full z-[2]" data-name="SaverResourceBanner">
          <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[48px] items-center px-[32px] py-[24px] relative size-full">
              <Text10 />
              <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
                  <p className="leading-[24px]">Go to Saver Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#C3C3C3] shrink-0" />
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Poppins',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Understanding the costs</p>
          <p className="font-['Poppins',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-[#6b6b6b] tracking-[1px] w-full">
            {`CalSavers charges fees to pay for program operations and the underlying investments. This can help you save more as you invest for the long term. Effective May 1, 2026, the fees all savers pay will decrease. `}
            <a className="font-['Poppins',sans-serif] font-bold text-[#00594f] underline decoration-solid" href="https://saver.calsavers.com/home/savers/program-details.html#cost-understanding" target="_blank">Learn more about fees</a>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Body() {
  return <SignUpToggleOffBody />;
}

function Frame5() {
  return (
    <div className="w-full content-stretch flex flex-col isolate items-start relative shrink-0 z-[1]">
      <Tabs />
      <Body />
    </div>
  );
}

function InnerContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center w-full min-w-px relative" data-name="InnerContainer">
      <Header />
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0" data-name="Savers Registration Tabs Toggle">
        <Frame5 />
      </div>
    </div>
  );
}

function HowToRegisterSection() {
  return (
    <div className="bg-[#f2f0e9] content-stretch flex items-center justify-center py-[80px] relative shrink-0  w-full z-[5]" data-name="How To Register Section">
      <InnerContainer5 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[992px] not-italic relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['Poppins',sans-serif] font-medium leading-[48px] relative shrink-0 text-[34px] text-black tracking-[0.6px] w-full">{`Retirement designed with you in mind `}</p>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">
        <p className="leading-[24px]">When you save with CalSavers, you can take an important step toward your financial future.</p>
      </div>
    </div>
  );
}

function SavingMoneyFlowerStreamlineStreamline() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Saving-Money-Flower Streamline Streamline-3.0">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_206_2235)" id="Saving-Money-Flower Streamline Streamline-3.0">
          <path clipRule="evenodd" d={svgPaths.p34d47200} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_206_2235">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
      <SavingMoneyFlowerStreamlineStreamline />
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] w-full not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">Easy Automatic Saving</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`A portion of your paycheck is automatically contributed to your CalSavers Individual Retirement Account (IRA).  `}</p>
      </div>
    </div>
  );
}

function BenefitText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text12 />
    </div>
  );
}

function Benefit4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Benefit">
      <BenefitText4 />
    </div>
  );
}

function ControlsPauseStreamlineStreamline() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Controls-Pause Streamline Streamline-3.0">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Controls-Pause Streamline Streamline-3.0">
          <path clipRule="evenodd" d={svgPaths.p6fa00} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
      <ControlsPauseStreamlineStreamline />
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] w-full not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">Your Money, Your Choice</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">You can opt in or opt out at any time and change your contribution amount whenever your situation changes.</p>
      </div>
    </div>
  );
}

function BenefitText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text13 />
    </div>
  );
}

function Benefit5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Benefit">
      <BenefitText5 />
    </div>
  );
}

function SavingPiggyCoinsAlternateStreamlineStreamline() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Saving-Piggy-Coins-Alternate Streamline Streamline-3.0">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_206_2297)" id="Saving-Piggy-Coins-Alternate Streamline Streamline-3.0">
          <path clipRule="evenodd" d={svgPaths.p3dd15300} fill="var(--fill-0, #846926)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_206_2297">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
      <SavingPiggyCoinsAlternateStreamlineStreamline />
      <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] w-full not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">Portable Savings That Go With You</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">Your account always belongs to you. If you change jobs, you can keep making contributions</p>
      </div>
    </div>
  );
}

function BenefitText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="BenefitText">
      <Text14 />
    </div>
  );
}

function Benefit6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative" data-name="Benefit">
      <BenefitText6 />
    </div>
  );
}

function BenefitContainer1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Benefit Container">
      <Benefit4 />
      <div className="flex items-center justify-center relative self-stretch shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 1">
                <line id="Divider" stroke="var(--stroke-0, #D3D3D3)" x2="164" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Benefit5 />
      <div className="flex items-center justify-center relative self-stretch shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 1">
                <line id="Divider" stroke="var(--stroke-0, #D3D3D3)" x2="164" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Benefit6 />
    </div>
  );
}

function InnerContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[66.66%] relative shrink-0 w-full" data-name="InnerContainer">
      <Text11 />
      <BenefitContainer1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[80px] relative shrink-0 w-[1440px] z-[3]" data-name="Section">
      <InnerContainer6 />
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

function Text15() {
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
        <g clipPath="url(#clip0_206_2240)" id="Arrow">
          <path d="M0.96875 8H15.0312" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf992b80} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_206_2240">
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

function Text16() {
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
        <p className="leading-[24px]">Saver FAQs</p>
      </div>
      <div className="flex flex-col font-['Poppins',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[16px] text-left tracking-[1px] w-[min-content]">
        <p className="leading-[24px]">To learn more about how to manage your CalSavers account, check out our FAQ page.</p>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_206_2240)" id="Arrow">
          <path d="M0.96875 8H15.0312" id="Vector" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf992b80} id="Vector_2" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_206_2240">
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
        <Text15 />
        <Link />
      </div>
      <a className="bg-white cursor-pointer w-full md:flex-[1_0_0] flex-col relative rounded-[8px] self-stretch shrink-0 p-[24px]" href="https://www.calsavers.com/home/frequently-asked-questions.html?language=en# " target="_blank" data-name="SupportCard">
        <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-start flex-start relative size-full shrink-0">
          <Text16 />
          <Link1 />
        </div>
      </a>
    </div>
  );
}

function InnerContainer7() {
  return (
    <div className="flex-[1_0_0] gap-x-[32px] gap-y-[40px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] max-w-[66.66%] w-full min-w-0 relative" data-name="InnerContainer">
      <Title />
      <Cards />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f2f6f6] content-stretch flex items-center justify-center py-[80px] relative shrink-0 w-full z-[2]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,89,79,0.25)] border-b border-solid border-t inset-0 pointer-events-none" />
      <InnerContainer7 />
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
          <ImageWithFallback alt="" className="absolute h-[2083.33%] left-[-153.16%] max-w-none top-[-431.06%] w-[474.68%]" src={imgScreenshot20240624At23545Pm1} />
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
    <div className="content-stretch flex flex-col items-start mr-[-140px] relative shrink-0 w-full w-full">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 max-width-[1140px] w-full">
      <Frame1 />
      <div className="relative shrink-0 size-[140px]" data-name="ca-seal-white 1">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaSealWhite1} />
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
      <p className="font-['Poppins:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>{` 한국어 `}</p>
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
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
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
      <p className="font-['Poppins:Medium','Noto_Sans_JP:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>{` 中文`}</p>
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
      <p className="font-['Poppins:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
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
      <p className="font-['Poppins:Medium','Noto_Sans_JP:Medium',sans-serif] leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 500" }}>
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

// Export shared sections for consolidated page
export { Banner, Navigation, SecondaryNav, Hero, Section, Section1, Section2, Header, Tabs, Frame, FooterLinks, FooterLinks1 };