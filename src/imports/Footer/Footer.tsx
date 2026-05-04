import svgPaths from "./svg-ief4pbqt9l";
import imgScreenshot20240624At23545Pm1 from "./039f4bb8bf585934b82734f24f18ba6d5292401d.png";
import imgCaSealWhite1 from "./c38e6508f8ab610083aded5dea6e466c8ce1f856.png";

function Group() {
  return (
    <div className="font-['Poppins:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">
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
        <g clipPath="url(#clip0_1_1993)" id="X logo 1">
          <path d={svgPaths.p1231b480} fill="var(--fill-0, #565958)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1993">
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
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]">
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
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">English</p>
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
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Español</p>
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
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Filipino</p>
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
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">armenian</p>
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
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
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
      <p className="font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">punjabi</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative shrink-0 w-full" data-name="Footer Links">
      <p className="font-['Poppins:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">Copyright © 2026</p>
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
      <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.unite529.com/jcdn/files/CAU/pdfs/en_US/terms.pdf" target="_blank">
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
      <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.unite529.com/jcdn/files/CAU/pdfs/en_US/privacy.pdf" target="_blank">
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
      <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="http://www.ascensus529.com/home/infosec.html?language=en#" target="_blank">
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
      <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://www.calsavers.com/home/sitemap.html" target="_blank">
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
      <a className="block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap" href="https://www.calsavers.com/home/frequently-asked-questions.html" target="_blank">
        Help Center
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#565958] relative size-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[120px] py-[32px] relative size-full">
        <Frame />
        <FooterLinks />
        <FooterLinks1 />
        <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1px] w-full whitespace-pre-wrap">
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
  );
}