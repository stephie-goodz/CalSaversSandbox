import { useState, useRef } from 'react';
import svgPaths from '../imports/Eligibility/svg-kmrljxdloq';
import svgPathsAccordion from '../imports/AccordionHover/svg-mk4b8tldo5';
import svgPathsFooter from '../imports/Footer/svg-ief4pbqt9l';
import imgImage271 from '../imports/Eligibility/6568f42840319b6c3af603b082bc57fc59b6af19.png';
import imgVideo from '../imports/Eligibility/f7006829a16ced177923dddf9219985a2b66059a.png';
import imgVideo1 from '../imports/Eligibility/67e63d23647fd6f9cb24b2790c0f4eb5c0301129.png';
import imgScreenshot from '../imports/Eligibility/200c7787c7cfa10c4e336e217f05d9d65c719b58.png';
import imgImage from '../imports/Eligibility/1be263d120b563f150451ac6cfb6291ac8e8042f.png';
import imgImage275 from '../imports/Eligibility/5f7c71a946ceaa3165e4600dc6064f01095c05d8.png';
import imgScreenshot20240624At23545Pm1 from '../imports/Eligibility/039f4bb8bf585934b82734f24f18ba6d5292401d.png';
import imgCaSealWhite1 from '../imports/Eligibility/c38e6508f8ab610083aded5dea6e466c8ce1f856.png';
import imgScreenshot1 from '../imports/EligibilityTabsToggle-1/ece298d0ec2c16f10310d45724b276a6035cb503.png';
import imgImage274 from '../imports/Frame5100/eff1046475126ca5c8666f8302a9b8adef90ad12.png';
import imgImage276 from '../imports/Frame5100/8daddc77dbbd4947e255e71e2c2b551451076ff4.png';

export default function App() {
  const [activeTab, setActiveTab] = useState<'register' | 'exempt'>('register');
  const [quickOverview, setQuickOverview] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [expandedExemptStep, setExpandedExemptStep] = useState<number | null>(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  const toggleExemptStep = (step: number) => {
    setExpandedExemptStep(expandedExemptStep === step ? null : step);
  };

  const playVideo = () => {
    videoRef.current?.play();
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px relative size-full overflow-y-auto overflow-x-hidden" data-name="Eligibility">
      {/* Navigation */}
      <div className="bg-white h-[112px] mb-[-1px] relative shrink-0 w-full" data-name="Navigation">
        <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] size-full">
          <div className="col-[2/span_6] content-stretch flex items-center justify-self-stretch relative shrink-0 h-full">
            <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                  {/* Logo */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="logo">
                    <div className="h-[80px] relative shrink-0 w-[302px]" data-name="image 271">
                      <img alt="CalSavers Logo" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImage271} />
                    </div>
                  </div>
                  {/* Button Group */}
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="ButtonGroup">
                    <button className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:bg-[#e5eeed]" data-name="Button">
                      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
                        <p className="leading-[24px]">Register</p>
                      </div>
                    </button>
                    <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.2)]" href="https://saver.calsavers.com/californiaeetpl/auth/sessionCreate/viewCollectUsername.cs?request_locale=en_US" target="_blank" data-name="Button">
                      <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                        <p className="leading-[24px]">Login</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
      </div>

      {/* Hr */}
      <div className="h-[16px] mb-[-1px] relative shrink-0 w-full" data-name="hr">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 16">
          <g id="hr">
            <path d="M0 8H1440" id="hr_2" stroke="var(--stroke-0, #D3D3D3)" />
          </g>
        </svg>
      </div>

      {/* Hero */}
      <div className="bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] mb-[-1px] py-[80px] relative shrink-0 w-full" data-name="Hero">
        <div className="col-[2/span_6] content-stretch flex items-center justify-self-stretch relative shrink-0">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative" data-name="InnerContainer">
            <p className="font-['Poppins:Medium',sans-serif] leading-[48px] min-w-full not-italic relative shrink-0 text-[34px] text-black text-center tracking-[0.6px] w-[min-content]">Eligibility and Registration</p>
            <div className="h-0 relative shrink-0 w-[100px]" data-name="hr">
              <div className="absolute inset-[-2px_-2%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 4">
                  <path d="M2 2H102" id="hr" stroke="var(--stroke-0, #347B73)" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section - Cards */}
      <div className="bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] mb-[-1px] pb-[80px] relative shrink-0 w-full max-w-full" data-name="Section">
        <div className="col-[2/span_6] content-stretch flex gap-[40px] items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Inner Container">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            {/* Card 1 - Who Must Register */}
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative rounded-[8px]" data-name="Card">
              <div className="content-stretch flex gap-[15.996px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#00594f] relative rounded-[41943000px] shrink-0 size-[47.969px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Tab Icons">
                      <div className="absolute inset-[47.07%_6.05%_6.05%_47.07%]" data-name="Vector">
                        <div className="absolute inset-[-8.89%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.25 13.25">
                            <path d={svgPaths.p38e02a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[63.7%_19.05%_20%_59.33%]" data-name="Vector">
                        <div className="absolute inset-[-25.56%_-19.27%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19006 5.91199">
                            <path d={svgPaths.p3cd21a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/2 left-[14.84%] right-[14.84%] top-[6.05%]" data-name="Vector">
                        <div className="absolute inset-[-9.48%_-5.93%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.875 12.5469">
                            <path d={svgPaths.p278f2800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[35.35%] left-[6.05%] right-[58.79%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-28.44%_-11.85%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4375 5.51562">
                            <path d={svgPaths.p19e43b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] text-black tracking-[1px] whitespace-nowrap">Who Must Register:</p>
                    <a className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black tracking-[1px] w-[min-content]" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank">
                      <p className="text-[16px]">
                        <span className="leading-[24px]">{`Eligible employers with `}</span>
                        <span className="font-['Poppins:Bold',sans-serif] leading-[24px] not-italic tracking-[1px]">{`at least one `}</span>
                        <span className="leading-[24px]">{`employee in the current year are required to `}</span>
                        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">register or request an exemption</span>
                        <span className="leading-[24px]">{` if they meet one of the conditions for exemption.`}</span>
                      </p>
                    </a>
                    <button
                      onClick={() => {
                        setActiveTab('register');
                        document.getElementById('instructions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="group content-stretch cursor-pointer flex gap-[8px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 transition-all"
                      data-name="Button"
                    >
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] group-hover:text-[#00473f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
                        <p className="leading-[24px] group-hover:[text-decoration-skip-ink:none] group-hover:decoration-solid group-hover:underline">Go to Registration Instructions</p>
                      </div>
                      <div className="overflow-visible relative shrink-0 size-[16px] transition-transform group-hover:translate-x-[8px]" data-name="Arrow">
                        <div className="absolute h-[13.125px] left-[0.97px] top-[1.44px] w-[14.063px]" data-name="Group">
                          <div className="absolute inset-[-7.62%_-7.11%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0625 15.125">
                              <g id="Group">
                                <g id="Vector">
                                  <path d="M1 7.5625H15.0625" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d="M1 7.5625H15.0625" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0" strokeWidth="2" className="group-hover:stroke-opacity-20 transition-all" />
                                </g>
                                <g id="Vector_2">
                                  <path d={svgPaths.p2fa57400} stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p2fa57400} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0" strokeWidth="2" className="group-hover:stroke-opacity-20 transition-all" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90 w-[100cqh]">
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319.997 1">
                      <line id="Line 1" stroke="var(--stroke-0, #C3C3C3)" strokeLinecap="round" x1="0.5" x2="319.497" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Program Exemptions */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[8px]" data-name="Card">
            <div className="content-stretch flex gap-[15.996px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#80641f] relative rounded-[41943000px] shrink-0 size-[47.969px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Tab Icons">
                    <div className="absolute inset-[5.98%_5.94%_5.98%_6.05%]" data-name="Group">
                      <div className="absolute inset-[-4.73%_-4.73%_-4.73%_-4.74%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1221 23.1312">
                          <g id="Group">
                            <path d={svgPaths.p32959c40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p3fad9040} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M18.8596 10.1594H12.2502" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M18.8596 17.6594H16.2346" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M18.8596 13.9094H13.6565" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p2f3d5200} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p282d35f0} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.996px] items-start relative size-full">
                  <p className="font-['Poppins:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] text-black tracking-[1px] whitespace-nowrap">Program Exemptions:</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Exemption Container">
                    {[
                      "Company already sponsors a qualified retirement plan;",
                      "Business is closed or was sold;",
                      "Company does not have any employees other than the owner(s);",
                      "Company's classification is either a government entity, religious organization, or tribal organization"
                    ].map((text, idx) => (
                      <div key={idx} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Line Item">
                        <div className="h-[24.005px] relative shrink-0 w-[16px]" data-name="Arrow">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24.0047">
                            <g id="Arrow">
                              <path d={svgPaths.p2c979100} fill="var(--fill-0, #846926)" id="Primary" />
                            </g>
                          </svg>
                        </div>
                        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-black tracking-[1px]">{text}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('exempt');
                      document.getElementById('instructions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="group content-stretch cursor-pointer flex gap-[8px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 transition-all"
                    data-name="Button"
                  >
                    <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00594f] group-hover:text-[#00473f] text-[16px] text-center tracking-[1px] whitespace-nowrap">
                      <p className="leading-[24px] group-hover:[text-decoration-skip-ink:none] group-hover:decoration-solid group-hover:underline">Go to Exemption Instructions</p>
                    </div>
                    <div className="overflow-visible relative shrink-0 size-[16px] transition-transform group-hover:translate-x-[8px]" data-name="Arrow">
                      <div className="absolute h-[13.125px] left-[0.97px] top-[1.44px] w-[14.063px]" data-name="Group">
                        <div className="absolute inset-[-7.62%_-7.11%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0625 15.125">
                            <g id="Group">
                              <g id="Vector">
                                <path d="M1 7.5625H15.0625" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M1 7.5625H15.0625" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0" strokeWidth="2" className="group-hover:stroke-opacity-20 transition-all" />
                              </g>
                              <g id="Vector_2">
                                <path d={svgPaths.p2fa57400} stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d={svgPaths.p2fa57400} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0" strokeWidth="2" className="group-hover:stroke-opacity-20 transition-all" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#f2f0e9] gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] mb-[-1px] pb-[40px] pt-[80px] relative shrink-0 w-full" data-name="Section">
        <div className="col-[2/span_6] gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="InnerContainer">
          {/* Video */}
          <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Video">
            <div className="content-stretch flex flex-col items-start h-[350px] relative shrink-0 w-full" data-name="VideoFrame">
              <div aria-hidden="true" className="absolute border border-[#c3c3c3] border-solid inset-[-1px] pointer-events-none" />
              <div className="relative w-full h-full">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/wtxeyguxfe?seo=true&videoFoam=true"
                  title="How to Register or Request an Exemption"
                  allow="autoplay; fullscreen"
                  className="w-full h-full"
                  name="wistia_embed"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="content-stretch flex font-['Poppins:Medium',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[12px] tracking-[1px] w-full whitespace-nowrap" data-name="VideoDetails">
              <div className="flex flex-col justify-center relative shrink-0 text-[#6b6b6b]">
                <p className="leading-[18px]">How to Register or Request an Exemption</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[#00594f]">
                <p className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline cursor-pointer">Captions Transcript</p>
              </div>
            </div>
          </div>

          {/* Left Container */}
          <div className="col-2 content-stretch flex flex-col gap-[32px] items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="LeftContainer">
            <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-black w-full" data-name="Text">
              <p className="font-['Poppins:Medium',sans-serif] leading-[38px] relative shrink-0 text-[28px] tracking-[0.6px] w-full">Watch the Overview</p>
              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px] tracking-[1px] w-full">
                <p className="leading-[24px]">Learn how to register or request an exemption fro CalSavers in just a few minutes.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Group">
              <div className="flex flex-col font-['Poppins:Italic',sans-serif] italic justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-black tracking-[1px] w-[min-content]">
                <p className="leading-[24px]">Ready to get started?</p>
              </div>
              <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.2)]" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                  <p className="leading-[24px]">Register or Request Exemption</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Section with Tabs */}
      <div id="instructions-section" className="bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] mb-[-1px] pb-[80px] pt-[80px] relative shrink-0 w-full" data-name="Section">
        <div className="col-[2/span_6] content-stretch flex flex-col gap-[16px] items-center justify-self-stretch relative shrink-0">
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Text">
            <p className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[28px] text-black text-center tracking-[0.6px] w-full mx-[0px] my-[24px]">Instructions on how to register or request an exemption</p>
          </div>

          {/* Tabs */}
          <div className="content-stretch flex gap-[16px] items-start mb-[-1px] relative shrink-0 w-full z-[2]" data-name="Tabs">
          <button
            onClick={() => setActiveTab('register')}
            className={`content-stretch flex flex-col h-[72px] items-start justify-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 transition-all ${
              activeTab === 'register' ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#d9e5e3]'
            }`}
            data-name="TabSetup"
          >
            <div
              aria-hidden="true"
              className={`absolute border-solid border-l border-r border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${
                activeTab === 'register' ? 'border-[rgba(0,89,79,0.5)]' : 'border-[rgba(0,89,79,0.5)]'
              }`}
            />
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
              <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Tab Text">
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] whitespace-nowrap">Register for CalSavers</p>
              </div>
            </div>
            <div className={`h-px relative shrink-0 w-full ${activeTab === 'register' ? '' : 'opacity-0'}`} data-name="Spacer">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center px-px relative size-full">
                  <div className="bg-white h-[3px] shrink-0 w-full" data-name="Spacer" />
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('exempt')}
            className={`content-stretch flex flex-col h-[72px] items-start justify-center max-w-[340px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 transition-all ${
              activeTab === 'exempt' ? 'bg-white' : 'bg-[#e5eeed] hover:bg-[#d9e5e3]'
            }`}
            data-name="TabSetup"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]"
            />
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px px-[16px] relative" data-name="Text + Icon">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Type=Exempt">
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
              </div>
              <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Tab Text">
                <p className={`font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-left tracking-[1px] whitespace-nowrap ${
                  activeTab === 'exempt' ? 'text-[#00594f]' : 'text-black'
                }`}>Request an Exemption</p>
              </div>
            </div>
            <div className={`h-px relative shrink-0 w-full ${activeTab === 'exempt' ? '' : 'opacity-0'}`} data-name="Spacer">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center px-px relative size-full">
                  <div className="bg-white h-[2px] shrink-0 w-full" data-name="Spacer" />
                </div>
              </div>
            </div>
          </button>
        </div>

          {/* Tab Content */}
          <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[40px] relative shrink-0 w-full z-[1] -mt-[16px]" data-name="Card">
            <div aria-hidden="true" className="absolute border border-[rgba(0,89,79,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />

          {activeTab === 'register' && (
            <>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
                <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">How to Register for CalSavers</p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[392px]">
                  <p className="font-['Poppins:Italic',sans-serif] italic leading-[24px] min-w-full relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">Need a simplified walk-though?</p>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="QuickViewToggle">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle Switch">
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] whitespace-nowrap">Toggle Quick Overview Instructions</p>
                      <button
                        onClick={() => setQuickOverview(!quickOverview)}
                        className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      >
                        <div className={`border border-[#d3d3d3] border-solid col-1 h-[24px] ml-0 mt-0 rounded-[24px] row-1 w-[44px] transition-colors ${
                          quickOverview ? 'bg-[#00594f]' : 'bg-[#e6e6e6]'
                        }`} data-name="Background" />
                        <div className={`col-1 mt-[6px] relative row-1 size-[12px] transition-all ${
                          quickOverview ? 'ml-[26px]' : 'ml-[7px]'
                        }`} data-name="Switch">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <g id="Switch">
                              <circle cx="6" cy="6" fill={quickOverview ? "white" : "#828282"} id="Ellipse 1" r="5.5" stroke={quickOverview ? "white" : "#828282"} />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Steps - Quick Overview */}
              {quickOverview && (
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {/* Row 1 */}
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">1</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                              <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Enter your EIN/TIN and Access Code</p>
                              <p className="font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full">
                                <span className="leading-[24px] text-[16px]">Go to the registration page and enter company tax ID and</span>
                                <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] text-[#00594f] text-[16px] underline">{` Access Code`}</span>
                              </p>
                            </div>
                            <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.2)]" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
                              <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                              <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                                <p className="leading-[24px]">Get Started</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">2</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Enter company information and complete exemption check</p>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Fill out company details in the form and choose your business type in the exemption check</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">3</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Add account administrators and choose username/password</p>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Provide contact information for Account Manager and Administrators assisting the account and enter account credentials for login.</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">4</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Review and Submit</p>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Double-check details and submit for Plan approval</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Registration Steps - Detailed Accordions */}
              {!quickOverview && (
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {[1, 2, 3, 4, 5].map((stepNum) => (
                    <div key={stepNum} className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
                      <button
                        onClick={() => toggleStep(stepNum)}
                        className="bg-white hover:bg-[#e5eeed] relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer"
                        data-name="Accordion/expanded"
                      >
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
                            <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
                              <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">{stepNum}</p>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
                              <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] min-w-full not-italic text-left relative shrink-0 text-[#00594f] hover:text-[#00473f] text-[16px] tracking-[1px] w-[min-content] transition-all hover:underline">
                                {stepNum === 1 && "Enter your EIN/TIN and Access Code on the registration and exemption page"}
                                {stepNum === 2 && "Enter company information"}
                                {stepNum === 3 && "Complete exemption check"}
                                {stepNum === 4 && "Add account administrators and choose username/password"}
                                {stepNum === 5 && "Review your registration details and submit"}
                              </p>
                            </div>
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name={expandedStep === stepNum ? "chevron-up" : "chevron-down"}>
                              <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                                  <path
                                    clipRule="evenodd"
                                    d={expandedStep === stepNum ? svgPaths.p36fe5600 : svgPathsAccordion.p979b300}
                                    fill="var(--fill-0, #00594F)"
                                    fillRule="evenodd"
                                    id="Vector"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </button>
                      {expandedStep === stepNum && (
                      <div className="bg-white relative shrink-0 w-full">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
                            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text">
                                {stepNum === 1 && (
                          <>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-[min-content]">
                              <span className="leading-[24px] text-[16px]">{`Go to the registration or request exemption page where you will enter your Federal Employer Identification Number or Tax Identification Number (EIN/TIN) and your CalSavers Access Code. `}</span>
                              <a className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] text-[#00594f] text-[16px] underline cursor-pointer" href="https://employer.calsavers.com/californiaertpl/register/viewCollectResendAccessCode.cs" target="_blank">Request an Access Code</a>
                              <span className="leading-[24px] text-[16px]">{` if you do not have one.`}</span>
                            </p>
                            <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.2)]" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
                              <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                              <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                                <p className="leading-[24px]">Get Started</p>
                              </div>
                            </a>
                                  </>
                                )}
                                {stepNum === 2 && (
                                  <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">{`A new page will open where you will enter your company's name and address, then click Next to determine whether your business is exempt from the mandate.`}</p>
                                )}
                                {stepNum === 3 && (
                                  <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
                                    <p className="mb-0 text-[16px]">
                                      <span className="leading-[24px]">{`Determine whether your business is exempt from the mandate by choosing your business type. If you don't see your exemption reason listed, you can request an exemption by emailing `}</span>
                                      <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic text-[#00594f] tracking-[1px] underline" href="mailto:calsavers@treasurer.ca.gov" target="_blank">
                                        calsavers@treasurer.ca.gov.
                                      </a>
                                    </p>
                                    <p className="leading-[24px] mb-0 text-[16px]">​</p>
                                    <p className="leading-[24px] text-[16px]">{`If your company is not exempt, you'll continue through the steps 4 and 5 of the registration process.`}</p>
                                  </div>
                                )}
                                {stepNum === 4 && (
                                  <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
                                    <p className="leading-[24px] mb-0">Provide contact information for the person who will run the CalSavers program for your company (Account Manager) and anyone else who may be assisting (Administrator).</p>
                                    <p className="leading-[24px] mb-0">​</p>
                                    <p className="leading-[24px]">Then choose a username, password, and security questions for future logins.</p>
                                  </div>
                                )}
                                {stepNum === 5 && (
                                  <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">{`Review your information to make sure everything is correct, then click Submit to complete your registration. You'll receive a confirmation email with the next steps.`}</p>
                                )}
                              </div>
                                      <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
                                    {stepNum === 1 && (
                                      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Screenshot">
                                        <img alt="Registration preview" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgScreenshot} />
                                      </div>
                                    )}
                                    {stepNum === 2 && (
                                      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                        <img alt="Company info preview" className="w-full h-full object-contain pointer-events-none" src={imgImage} />
                                      </div>
                                    )}
                                    {stepNum === 3 && (
                                      <div className="bg-[#fdfdfb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                        <img alt="Exemption check preview" className="w-full h-full object-contain pointer-events-none" src={imgImage275} />
                                      </div>
                                    )}
                                    {stepNum === 4 && (
                                      <div className="bg-[#fdfdfb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                        <img alt="Add administrator preview" className="w-full h-full object-contain pointer-events-none" src={imgImage274} />
                                      </div>
                                    )}
                                    {stepNum === 5 && (
                                      <div className="bg-[#fdfdfb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                        <img alt="Review and submit preview" className="w-full h-full object-contain pointer-events-none" src={imgImage276} />
                                      </div>
                                    )}
                                    <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
                                      <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
                                        <p className="font-['Poppins:Italic',sans-serif] italic leading-[21px] relative shrink-0 text-[14px] text-black text-left tracking-[1px] w-full">
                                          {stepNum === 1 && "Registration page preview"}
                                          {stepNum === 2 && "Enter company information preview"}
                                          {stepNum === 3 && "Exemption check preview"}
                                          {stepNum === 4 && "Add administrator preview"}
                                          {stepNum === 5 && "Review and submit preview"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'exempt' && (
            <>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
                <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">How to Request an Exemption for CalSavers</p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[392px]">
                  <p className="font-['Poppins:Italic',sans-serif] italic leading-[24px] min-w-full relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">Need a simplified walk-though?</p>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="QuickViewToggle">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle Switch">
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] whitespace-nowrap">Toggle Quick Overview Instructions</p>
                      <button
                        onClick={() => setQuickOverview(!quickOverview)}
                        className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      >
                        <div className={`border border-[#d3d3d3] border-solid col-1 h-[24px] ml-0 mt-0 rounded-[24px] row-1 w-[44px] transition-colors ${
                          quickOverview ? 'bg-[#00594f]' : 'bg-[#e6e6e6]'
                        }`} data-name="Background" />
                        <div className={`col-1 mt-[6px] relative row-1 size-[12px] transition-all ${
                          quickOverview ? 'ml-[26px]' : 'ml-[7px]'
                        }`} data-name="Switch">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <g id="Switch">
                              <circle cx="6" cy="6" fill={quickOverview ? "white" : "#828282"} id="Ellipse 1" r="5.5" stroke={quickOverview ? "white" : "#828282"} />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemption Steps - Quick Overview */}
              {quickOverview && (
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {/* Row 1 */}
                  <div className="content-stretch flex gap-[24px] h-[180px] items-start relative shrink-0 w-full">
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">1</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                              <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Enter your EIN/TIN and Access Code</p>
                              <p className="font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full">
                                <span className="leading-[24px] text-[16px]">Go to the registration page and enter company tax ID and</span>
                                <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] text-[#00594f] text-[16px] underline">{` Access Code`}</span>
                              </p>
                            </div>
                            <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.2)]" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
                              <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                              <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                                <p className="leading-[24px]">Get Started</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">2</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Enter company information</p>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Fill out company details in the form and choose your business type in the exemption check</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="content-stretch flex gap-[24px] h-[172px] items-start relative shrink-0 w-full">
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">3</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Select exemption reason</p>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Choose the reason that applies to your business from the list of qualifying exemptions</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
                          <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">4</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[1px] w-full">Review and submit document proof</p>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">Double-check details, submit, and follow the online instructions to provide proof of existing retirement plan or other supporting documents</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Exemption Steps - Detailed Accordions */}
              {!quickOverview && (
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {[1, 2, 3, 4, 5].map((stepNum) => (
                    <div key={stepNum} className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
                      <button
                        onClick={() => toggleExemptStep(stepNum)}
                        className="bg-white hover:bg-[#e5eeed] relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer"
                        data-name="Accordion/expanded"
                      >
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
                            <div className="bg-[#80641f] flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
                              <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic text-[14px] text-center text-white tracking-[1px]">{stepNum}</p>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
                              <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] min-w-full text-left not-italic relative shrink-0 text-[#00594f] hover:text-[#00473f] text-[16px] tracking-[1px] w-[min-content] transition-all hover:underline">
                                {stepNum === 1 && "Enter your EIN/TIN and Access Code on the registration and exemption page"}
                                {stepNum === 2 && "Enter company information"}
                                {stepNum === 3 && "Complete exemption check"}
                                {stepNum === 4 && "Add account administrators and choose username/password"}
                                {stepNum === 5 && "Review your registration details and submit"}
                              </p>
                            </div>
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name={expandedExemptStep === stepNum ? "chevron-up" : "chevron-down"}>
                              <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                                  <path
                                    clipRule="evenodd"
                                    d={expandedExemptStep === stepNum ? svgPaths.p36fe5600 : svgPathsAccordion.p979b300}
                                    fill="var(--fill-0, #00594F)"
                                    fillRule="evenodd"
                                    id="Vector"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </button>
                      {expandedExemptStep === stepNum && (
                      <div className="bg-white relative shrink-0 w-full">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
                            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text">
                        {stepNum === 1 && (
                          <>
                            <p className="font-['Poppins:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-[min-content]">
                              <span className="leading-[24px] text-[16px]">{`Go to the registration or request exemption page where you will enter your Federal Employer Identification Number or Tax Identification Number (EIN/TIN) and your CalSavers Access Code. `}</span>
                              <a className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] text-[#00594f] text-[16px] underline cursor-pointer" href="https://employer.calsavers.com/californiaertpl/register/viewCollectResendAccessCode.cs" target="_blank">Request an Access Code</a>
                              <span className="leading-[24px] text-[16px]">{` if you do not have one.`}</span>
                            </p>
                            <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 transition-all hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.2)]" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
                              <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                              <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                                <p className="leading-[24px]">Get Started</p>
                              </div>
                            </a>
                          </>
                        )}
                        {stepNum === 2 && (
                          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">{`A new page will open where you will enter your company's name and address, then click Next to determine whether your business is exempt from the mandate.`}</p>
                        )}
                        {stepNum === 3 && (
                          <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
                            <p className="mb-0 text-[16px]">
                              <span className="leading-[24px]">{`Determine whether your business is exempt from the mandate by choosing your business type. If you don't see your exemption reason listed, you can request an exemption by emailing `}</span>
                              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic text-[#00594f] tracking-[1px] underline" href="mailto:calsavers@treasurer.ca.gov" target="_blank">
                                calsavers@treasurer.ca.gov.
                              </a>
                            </p>
                            <p className="leading-[24px] mb-0 text-[16px]">​</p>
                            <p className="leading-[24px] text-[16px]">{`If your company is not exempt, you'll continue through the steps 4 and 5 of the registration process.`}</p>
                          </div>
                        )}
                        {stepNum === 4 && (
                          <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
                            <p className="leading-[24px] mb-0">Provide contact information for the person who will run the CalSavers program for your company (Account Manager) and anyone else who may be assisting (Administrator).</p>
                            <p className="leading-[24px] mb-0">​</p>
                            <p className="leading-[24px]">Then choose a username, password, and security questions for future logins.</p>
                          </div>
                        )}
                        {stepNum === 5 && (
                          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full">{`Review your information to make sure everything is correct, then click Submit to complete your registration. You'll receive a confirmation email with the next steps.`}</p>
                        )}
                      </div>
                      <div className="bg-white flex-[1_0_0] h-[264px] min-w-px relative rounded-[10px]" data-name="ScreenshotContainer">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start p-[1.25px] relative size-full">
                            {stepNum === 1 && (
                              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Screenshot">
                                <img alt="Registration preview" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgScreenshot} />
                              </div>
                            )}
                            {stepNum === 2 && (
                              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                <img alt="Company info preview" className="w-full h-full object-contain pointer-events-none" src={imgImage} />
                              </div>
                            )}
                            {stepNum === 3 && (
                              <div className="bg-[#fdfdfb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                <img alt="Exemption check preview" className="w-full h-full object-contain pointer-events-none" src={imgImage275} />
                              </div>
                            )}
                            {stepNum === 4 && (
                              <div className="bg-[#fdfdfb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                <img alt="Add administrator preview" className="w-full h-full object-contain pointer-events-none" src={imgImage274} />
                              </div>
                            )}
                            {stepNum === 5 && (
                              <div className="bg-[#fdfdfb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Screenshot">
                                <img alt="Review and submit preview" className="w-full h-full object-contain pointer-events-none" src={imgImage276} />
                              </div>
                            )}
                              <div className="bg-[#e5eeed] h-[43.984px] relative shrink-0 w-full" data-name="Container">
                                <div className="content-stretch flex flex-col items-start pt-[11.992px] px-[11.992px] relative size-full">
                                  <p className="font-['Poppins:Italic',sans-serif] italic leading-[21px] relative shrink-0 text-[14px] text-black text-center tracking-[1px] w-full">
                                    {stepNum === 1 && "Registration page preview"}
                                    {stepNum === 2 && "Enter company information preview"}
                                    {stepNum === 3 && "Exemption check preview"}
                                    {stepNum === 4 && "Add administrator preview"}
                                    {stepNum === 5 && "Review and submit preview"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border-[1.25px] border-[rgba(0,89,79,0.25)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#565958] mb-[-1px] relative shrink-0 w-full overflow-hidden" data-name="Footer">
        <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] py-[32px] relative w-full">
          <div className="col-[2/span_6] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative shrink-0">
          {/* Top section with contact info and seal */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 flex-1">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[291px]">
                <div className="font-['Poppins:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">
                  <p className="col-1 leading-[21px] ml-0 mt-0 relative row-1">Employer assistance: 855-650-6916</p>
                  <p className="col-1 leading-[21px] ml-0 mt-[29px] relative row-1">Employee assistance: 855-650-6918</p>
                  <p className="col-1 leading-[21px] ml-0 mt-[58px] relative row-1">clientservices@calsavers.com</p>
                  <p className="col-1 leading-[21px] ml-0 mt-[87px] relative row-1">treasurer.ca.gov/calsavers</p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                  <div className="bg-white overflow-clip relative rounded-[6px] shrink-0 size-[36px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.28px)] size-[25px] top-[calc(50%-0.5px)]" data-name="X logo 1">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                        <g clipPath="url(#clip0_1_1993)" id="X logo 1">
                          <path d={svgPathsFooter.p1231b480} fill="var(--fill-0, #565958)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_1993">
                            <rect fill="white" height="25" width="25" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="h-[36px] relative shrink-0 w-[86.182px] overflow-hidden" data-name="Screenshot 2024-06-24 at 2.35.45 PM 1">
                    <img alt="" className="absolute h-[2083.33%] left-[-153.16%] top-[-431.06%] w-[474.68%] object-cover pointer-events-none" src={imgScreenshot20240624At23545Pm1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[100px] h-[100px] md:size-[140px]" data-name="ca-seal-white 1">
              <img alt="CA Seal" className="w-full h-full object-contain pointer-events-none" src={imgCaSealWhite1} />
            </div>
          </div>

          {/* Language links */}
          <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative shrink-0 w-full" data-name="Footer Links">
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">English</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Español</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Filipino</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">{` 한국어 `}</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">
              Tiếng Việt
            </p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">{` 中文`}</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">armenian</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">
              <span className="leading-[21px]">ру́сский</span>
              <span className="leading-[21px]">&nbsp;</span>
            </p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">
              <span className="leading-[21px]">&nbsp;</span>
              <span className="leading-[21px]">日本語</span>
              <span className="leading-[21px]">&nbsp;</span>
            </p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">punjabi</p>
          </div>

          {/* Bottom links */}
          <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative shrink-0 w-full" data-name="Footer Links">
            <p className="font-['Poppins:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Copyright © 2026</p>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.unite529.com/jcdn/files/CAU/pdfs/en_US/terms.pdf" target="_blank">
              Terms of Use
            </a>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.unite529.com/jcdn/files/CAU/pdfs/en_US/privacy.pdf" target="_blank">
              Privacy
            </a>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="http://www.ascensus529.com/home/infosec.html?language=en#" target="_blank">
              Security
            </a>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://www.calsavers.com/home/sitemap.html" target="_blank">
              Sitemap
            </a>
            <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
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
            <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://www.calsavers.com/home/frequently-asked-questions.html" target="_blank">
              Help Center
            </a>
          </div>

          {/* Legal disclaimer */}
          <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1px] w-full whitespace-pre-wrap">
            <p className="leading-[18px] mb-0">The CalSavers Retirement Savings Program ("CalSavers" or the "Program") is an automatic enrollment payroll deduction IRA overseen by the CalSavers Retirement Savings Board ("Board"). Ascensus College Savings Recordkeeping Services, LLC ("ACSR") is the program administrator. ACSR and its affiliates are responsible for day-to-day program operations. Participants saving through CalSavers beneficially own and have control over their IRAs, as provided in the Program Disclosure Booklet available at saver.calsavers.com. CalSavers is not sponsored by the employer, and therefore the employer is not responsible for the Program or liable as a Program sponsor. Employers are not permitted to endorse the Program or encourage or advise employees on whether to participate, how much (if any) to contribute or provide investment help.</p>
            <p className="leading-[18px] mb-0">CalSavers offers investment options selected by the Board. For more information on CalSavers' investment options go to saver.calsavers.com. Account balances in CalSavers will vary with market conditions. Investments in CalSavers are not guaranteed or insured by the Board, the State of California, the Federal Deposit Insurance Corporation, or any other organization.</p>
            <p className="leading-[18px] mb-0">​</p>
            <p className="leading-[18px] mb-0">CalSavers is a completely voluntary retirement program. Savers may opt out at any time or reduce or increase the amount of payroll contributions. If a saver opts out they can later opt back into CalSavers.</p>
            <p className="leading-[18px] mb-0">​</p>
            <p className="leading-[18px]">Saving through an IRA may not be appropriate for all individuals. Employer facilitation of CalSavers should not be considered an endorsement or recommendation by a participating employer, IRAs, or the investment options offered through CalSavers. IRAs are not exclusive to CalSavers and can be obtained outside of the Program and contributed to outside of payroll deduction. Contributing to a CalSavers IRA through payroll deduction may offer some tax benefits and consequences. However, not everyone is eligible to contribute to a Roth IRA and savers should consult a tax or financial advisor if they have questions related to taxes or investments. Employers do not provide financial advice and employees should not contact an employer for financial advice. Employers should refer all questions about the Program to CalSavers. Employers are not liable for decisions employees make pursuant to Section 100034 of the California Government Code.</p>
          </div>
        </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#565958] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      </div>
    </div>
  );
}