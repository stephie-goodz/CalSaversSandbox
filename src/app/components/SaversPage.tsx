import { useState, useEffect, useRef } from "react";

// Import shared sections from SaverPageTab1ToggleOff
import {
  Banner,
  Navigation,
  SecondaryNav,
  Hero,
  Section,
  Section1,
  Section2,
  Header,
  Tabs,
  Frame,
  FooterLinks,
  FooterLinks1
} from "../../imports/SaverPageTab1ToggleOff/SaverPageTab1ToggleOff";

// Import only the unique tab body content from each variant
import { SignUpToggleOffBody } from "../../imports/SaverPageTab1ToggleOff/SaverPageTab1ToggleOff";
import { SignUpToggleOnBody } from "../../imports/SaverPageTab1ToggleOn/SaverPageTab1ToggleOn";
import { OptOutBody } from "../../imports/SaverPageTab2/SaverPageTab2";

export default function SaversPage() {
  const [activeTab, setActiveTab] = useState<'signup' | 'optout'>('signup');
  const [toggleOn, setToggleOn] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const textContent = target.textContent || '';

      // Detect tab clicks
      if (textContent.includes('Sign Up for CalSavers') || textContent.includes('Sign up')) {
        setActiveTab('signup');
        setToggleOn(false);
        return;
      }

      if (textContent.includes('Opt-Out of CalSavers') || textContent.includes('Opt out')) {
        setActiveTab('optout');
        return;
      }

      // Detect toggle switch clicks
      const toggleSwitch = target.closest('[data-name="Toggle Switch"]');
      if (toggleSwitch && activeTab === 'signup') {
        setToggleOn(prev => !prev);
        return;
      }

      const toggleBg = target.closest('[data-name="Background"]');
      const switchCircle = target.closest('[data-name="Switch"]');
      if ((toggleBg || switchCircle) && activeTab === 'signup') {
        setToggleOn(prev => !prev);
        return;
      }

      if (textContent.includes('Toggle Detailed')) {
        setToggleOn(prev => !prev);
        return;
      }

      // Detect accordion clicks
      const accordionHeader = target.closest('[data-name="Accordion/expanded"], [data-name="Accordion/collapsed"]');
      if (accordionHeader) {
        const accordionContainer = accordionHeader.closest('[data-name="Accordion"]');
        if (accordionContainer) {
          let accordionId = accordionContainer.getAttribute('data-accordion-id');
          if (!accordionId) {
            const numberContainer = accordionHeader.querySelector('[data-name="Number Container"]');
            accordionId = numberContainer?.textContent?.trim() || '';
            if (accordionId) {
              accordionContainer.setAttribute('data-accordion-id', accordionId);
            }
          }

          if (accordionId) {
            setExpandedAccordions(prev => {
              const newSet = new Set(prev);
              if (newSet.has(accordionId!)) {
                newSet.delete(accordionId!);
              } else {
                newSet.add(accordionId!);
              }
              return newSet;
            });
          }
        }
      }
    };

    const handleChange = (e: Event) => {
      const target = e.target as HTMLSelectElement;
      if (target.getAttribute('data-name') === 'TabDropdown') {
        const value = target.value;
        if (value === 'signup') {
          setActiveTab('signup');
          setToggleOn(false);
        } else if (value === 'optout') {
          setActiveTab('optout');
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleClick);
      container.addEventListener('change', handleChange);
      return () => {
        container.removeEventListener('click', handleClick);
        container.removeEventListener('change', handleChange);
      };
    }
  }, [activeTab]);

  // Apply accordion states
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const accordionContainers = container.querySelectorAll('[data-name="Accordion"]');

    accordionContainers.forEach(accordionContainer => {
      const accordionHeader = accordionContainer.querySelector('[data-name="Accordion/expanded"], [data-name="Accordion/collapsed"]');

      let accordionId = accordionContainer.getAttribute('data-accordion-id');
      if (!accordionId && accordionHeader) {
        const numberContainer = accordionHeader.querySelector('[data-name="Number Container"]');
        accordionId = numberContainer?.textContent?.trim() || '';
        if (accordionId) {
          accordionContainer.setAttribute('data-accordion-id', accordionId);
        }
      }

      if (!accordionId) return;

      const isExpanded = expandedAccordions.has(accordionId);
      const stepContent = accordionContainer.querySelector('[data-name="Steps"]');

      if (stepContent && accordionHeader) {
        if (isExpanded) {
          (stepContent as HTMLElement).style.maxHeight = '100000px';
          (stepContent as HTMLElement).style.opacity = '1';
          (stepContent as HTMLElement).style.overflow = 'visible';
        } else {
          (stepContent as HTMLElement).style.maxHeight = '0';
          (stepContent as HTMLElement).style.opacity = '0';
          (stepContent as HTMLElement).style.overflow = 'hidden';
        }

        const chevron = accordionHeader.querySelector('[data-name="chevron-up"], [data-name="chevron-down"]');
        if (chevron) {
          (chevron as HTMLElement).style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        }

        if (isExpanded) {
          accordionHeader.setAttribute('data-name', 'Accordion/expanded');
        } else {
          accordionHeader.setAttribute('data-name', 'Accordion/collapsed');
        }

        const border = accordionHeader.querySelector('[aria-hidden="true"]');
        if (border) {
          if (isExpanded) {
            (border as HTMLElement).style.borderColor = '#00594f';
          } else {
            (border as HTMLElement).style.borderColor = 'rgba(0,89,79,0.25)';
          }
        }
      }
    });
  }, [expandedAccordions, activeTab, toggleOn]);

  // Apply active/inactive styles to desktop tabs
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tabSetups = container.querySelectorAll('[data-name="TabSetup"]');
    tabSetups.forEach((tab: Element, index: number) => {
      const el = tab as HTMLElement;
      const isActive =
        (index === 0 && activeTab === 'signup') ||
        (index === 1 && activeTab === 'optout');

      el.setAttribute('data-active', isActive ? 'true' : 'false');
      el.style.backgroundColor = isActive ? 'white' : '#F2F0E9';
      el.style.justifyContent = isActive ? 'flex-end' : 'center';

      // Show/hide the white bottom spacer that covers the tab's bottom border
      const outerSpacer = el.querySelector('[data-name="Spacer"]') as HTMLElement | null;
      if (outerSpacer) {
        outerSpacer.style.opacity = isActive ? '1' : '0';
      }

      // Both tabs: black text when active, green when inactive
      const tabText = el.querySelector('[data-name="Tab Text"] p') as HTMLElement | null;
      if (tabText) {
        tabText.style.color = isActive ? '#000000' : '#00594f';
      }

      // Active tab: remove bottom border to connect tab to content panel
      const borderEl = el.querySelector('[aria-hidden="true"]') as HTMLElement | null;
      if (borderEl) {
        borderEl.style.borderBottom = isActive ? 'none' : '';
      }
    });
  }, [activeTab]);

  // Determine which body content to show based on state
  const getBodyContent = () => {
    if (activeTab === 'optout') {
      return <OptOutBody />;
    }
    if (toggleOn) {
      return <SignUpToggleOffBody />;
    }
    return <SignUpToggleOnBody />;
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Saver Page - Consolidated">
        {/* Header - renders once */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full z-[8]" data-name="CalSaversHeader">
          <Banner />
          <Navigation />
          <SecondaryNav />
        </div>

        {/* Hero - renders once */}
        <Hero />

        {/* Eligibility Section - renders once */}
        <Section />

        {/* Tab Section - only body content changes based on state */}
        <div className="bg-[#f2f0e9] content-stretch flex items-center justify-center py-[80px] relative shrink-0 w-full z-[5]" data-name="How To Register Section">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center w-full max-w-[66.66%] min-w-px relative" data-name="InnerContainer">
            <Header />
            <div className="w-full content-stretch flex flex-col isolate items-start relative shrink-0 z-[1]" data-name="Savers Registration Tabs Toggle">
              {/* Mobile dropdown — hidden on md+ */}
              <div className="md:hidden w-full mb-4 z-[2]" data-name="Tabs">
                <p className="font-['Poppins',sans-serif] font-medium text-[12px] text-[#6b6b6b] mb-1">Choose an option</p>
                <select
                  className="w-full bg-white border-2 border-[#00594f] rounded-lg px-4 py-3 font-['Poppins',sans-serif] font-semibold text-[16px] text-black tracking-[1px] appearance-none cursor-pointer"
                  value={activeTab}
                  onChange={(e) => {
                    if (e.target.value === 'signup') {
                      setActiveTab('signup');
                      setToggleOn(false);
                    } else if (e.target.value === 'optout') {
                      setActiveTab('optout');
                    }
                  }}
                  data-name="TabDropdown"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300594f' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="signup">Sign Up for CalSavers</option>
                  <option value="optout">Opt-Out of CalSavers</option>
                </select>
              </div>
              {/* Desktop tabs — hidden below md */}
              <div className="hidden md:block w-full">
                <Tabs activeTab={activeTab} />
              </div>
              {getBodyContent()}
            </div>
          </div>
        </div>

        {/* Retirement Benefits Section - renders once */}
        <Section1 />

        {/* Support Section - renders once */}
        <Section2 />

        {/* Footer - renders once */}
        <div className="bg-[#565958] relative shrink-0 w-full" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip py-[32px] relative rounded-[inherit] w-full max-w-[66.66%] mx-auto size-full">
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

      <style>{`
        /* DESKTOP LAYOUT - Content spans 2/3 width (66.66%) */
        [data-name="Section"],
        [data-name="Hero"],
        [data-name="Navigation"],
        [data-name="Footer"],
        [data-name="SecondaryNav"] {
          width: 100% !important;
        }

        /* Inner containers centered at 66.66% width */
   
        [data-name="Section"] > div,
        [data-name="Navigation"] > div {
          max-width: 66.66% !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        [data-name="Section"] > div > div,
        [data-name="HowToRegisterSection"] > div {
          width: 100% !important;
        }

        /* Tab containers */
        [data-name="Tabs"],
        [data-name="TabContent"],
        [data-name="AccordionContainer"] {
          width: 100% !important;
        }

        /* Cursor pointer for interactive elements */
        [data-name^="Tab"],
        [data-name="Toggle Switch"],
        [data-name="Background"],
        [data-name="Switch"],
        [data-name="Accordion/expanded"],
        [data-name="Accordion/collapsed"],
        button {
          cursor: pointer;
        }

        /* Inactive tab hover: darker green + underline */
        [data-name="TabSetup"][data-active="false"]:hover [data-name="Tab Text"] p {
          color: #00473f !important;
          text-decoration: underline !important;
        }

        /* Smooth transitions */
        [data-name="Switch"] {
          transition: all 0.3s ease;
        }

        [data-name="Banner"] {
          height: 150px;
          max-width: 100% !important;
          padding: 0 24px;
        }

        /* Smooth accordion transitions */
        [data-name="Steps"] {
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        [data-name="chevron-up"],
        [data-name="chevron-down"] {
          transition: transform 0.3s ease;
        }

        /* Text wrapping */
        p, span, div {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }

        /* StepText — 50/50 two-column layout on tablet and desktop */
        @media (min-width: 768px) {
          [data-name="StepText"] {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
          [data-name="StepText"] > p:first-child {
            flex: 1 1 0% !important;
            min-width: 0 !important;
          }
          [data-name="StepText"] > div:last-child {
            flex: 1 1 0% !important;
            min-width: 0 !important;
          }
          [data-name="StepText"] > div > p {
            text-align: right !important;
            width: 100% !important;
          }
          [data-name="Toggle Switch"] {
            justify-content: flex-end !important;
          }
        }

        /* Quickview step boxes — always single column, no border */
        [data-name="StepsContainer"] [data-name="Row"] {
          flex-direction: column !important;
          gap: 16px !important;
          height: auto !important;
        }

        [data-name="StepsContainer"] [data-name^="Step "] > div[aria-hidden="true"] {
          display: none !important;
        }

        /* TABLET BREAKPOINT (768px - 1024px) */
        @media (max-width: 1024px) {
          /* Full width with padding on tablet */
          
          [data-name="Section"] > div,
          [data-name="Navigation"] > div,
          [data-name="SecondaryNav"] > div,
          [data-name="InnerContainer"] {
            max-width: 100% !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }


          [data-name="Hero"] [data-name="InnerContainer"] {
          padding-left: 0px;
          padding-right: 0px;
          }

          [data-name="SupportCard"] [data-name="Text"] > div {
            width: 100%;
            max-width: none !important;
          }

          [data-name="SupportCard"] [data-name="Text"] [data-name^="Icon="] {
          width: 32px !important;
          }

          [data-name="SupportCard"] [data-name="Text"] {
          flex: auto;
          }

          [data-name="Text Container"] > p {
          width: 100% !important;
        }

          [data-name="Footer"] > div {
            max-width: 100% !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          /* Hero section padding */
          [data-name="Hero"] {
            padding-left: 0px;
            padding-right: 0px ;
          }

          /* Text wrapping on tablet */
          p, span, div, a, button {
            min-width: 0 !important;
          }
        }

        /* MOBILE BREAKPOINT (<=767px) */
        @media (max-width: 767px) {
          /* Full width with padding on mobile */
          
          [data-name="Section"] > div,
          [data-name="Navigation"] > div,
          [data-name="SecondaryNav"] > div,
          [data-name="InnerContainer"] {
            max-width: 100% !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            width: 100% !important;
          }

          /* Mobile header - stack logo above buttons */
          [data-name="Navigation"] [data-name="InnerContainer"] .content-stretch.flex.flex-col.md\\:flex-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 24px !important;
            width: 100% !important;
          }
          
          [data-name="Hero"] {
            padding-left: 0px !important;
            padding-right: 0px !important;
          }

          [data-name="Hero"] [data-name="InnerContainer"]{
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

           [data-name="Hero"] > div > img {
            object-fit: cover !important;
          }
          

          [data-name="Footer"] > div {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }

          [data-name="ca-seal-white 1"]{
          display: none;
          }

          /* Hide banner on mobile */
          [data-name="Banner"] {
            display: none !important;
          }

          [data-name="Navigation"] > div{
          padding-left: 0px !important;
          padding-right: 0px !important;
          }

          [data-name="Navigation"] {
            height: auto !important;
          }
          

          [data-name="Navigation"] > div > div{
            padding-inline: 0px !important;
          }

          [data-name="Navigation"] [data-name="InnerContainer"]{
            max-width: none !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            padding-top: 32px !important;
          }

          /* Header buttons - equal width 50/50 */
          [data-name="ButtonGroup"] {
            width: 100% !important;
            display: flex !important;
            gap: 0px !important;
          }

          [data-name="ButtonGroup"] > * {
            flex: 1 !important;
          }

          [data-name="ButtonGroup"] [data-name="Button"] > div {
            border-radius: 0px !important;
          }

          [data-name="ButtonGroup"] [data-name="Button"] {
            border-radius: 0px !important;
          }

          /* Hide desktop nav links on mobile */
          [data-name="NavLinks"] {
            display: none !important;
          }

          /* SecondaryNav mobile layout — hamburger left, language right */
          [data-name="SecondaryNav"] {
            padding: 12px 24px !important;
          }

          [data-name="SecondaryNav"] [data-name="InnerContainer"] {
            justify-content: space-between !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          

          [data-name="Card"] [data-name="Button Group"] {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100%;
            align-items: flex-start;
          }

          /* Hero section */
          [data-name="Hero"] {
            padding: 40px 0px !important;
          }

          [data-name="Hero"] h1,
          [data-name="Hero"] h2 {
            font-size: 32px !important;
            line-height: 40px !important;
          }

          [data-name="Hero"] [data-name="InnerContainer"] {
          flex-direction: column !important;
          }

          [data-name="Benefit Container"] {
          flex-direction: column !important;
          }

          [data-name="BenefitText"] [data-name="Text"] > div {
          
          min-width: inherit !important;
          }

          

          [data-name="Section"] [data-name="Steps"] {
          padding: 24px;
          }

          [data-name="Body"] > div {
          padding-block: 32px !important;
          padding-inline: 24px;
          }

          [data-name="Section"] [data-name="InnerContainer"] {
          flex-direction: column !important;
          width: 100%;
          }

          /* StepText - stack title and toggle vertically on mobile */
          [data-name="StepText"] {
            flex-direction: column !important;
            gap: 16px !important;
          }

          /* StepText - stack quickview boxes */
          [data-name="StepsContainer"] [data-name="Row"]{
            flex-direction: column !important;
            gap: 16px !important;
            height: auto !important;
          }

          [data-name="StepText"] > p {
            width: 100% !important;
            min-width: 0 !important;
          }

          [data-name="StepText"] > div {
            width: 100% !important;
          }

         [data-name="InnerContainer"] [data-name="Section"] {
         flex-direction: column !important;
         width: 100%;
         }

         [data-name="QuickViewToggle"] [data-name="Toggle Switch"]{
            gap: 16px;
          }
         
          [data-name="QuickViewToggle"] [data-name="Toggle Switch"] > p{
            flex: auto !important;
          }

          [data-name="Toggle"] > button {
            width: 100% !important;
          }

          [data-name^="Tab"] {
            width: 100% !important;
          }

          /* Grid layouts to flex column */
          .grid,
          [data-name*="grid"] {
            display: flex !important;
            flex-direction: column !important;
          }

          /* Support cards - stack vertically with 24px gap */
          [data-name="Cards"] {
            flex-direction: column !important;
            gap: 24px !important;
          }

          /* Cards and two-column layouts stack */
          [data-name="Cards"],
          [data-name*="Row"] {
            flex-direction: column !important;
            gap: 16px !important;
          }

          [data-name="SupportCard"] [data-name="Text"] > div {
            width: 100%;
            max-width: none !important;
          }

          [data-name="SupportCard"] [data-name="Text"] [data-name^="Icon="] {
          width: 32px !important;
          }

          [data-name="SupportCard"] [data-name="Text"] {
          flex: auto;
          }

          /* Footer */
          [data-name="Footer"] {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          [data-name="Footer"] > div {
            flex-direction: column !important;
            gap: 24px !important;
          }

          /* All accordions full width */
          [data-name^="Accordion"] {
            width: 100% !important;
            max-width: none !important;
          }

           /* Accordion Body */
          [data-name="Accordion"] [data-name^="Step="] > div > div{
            padding: 24px 16px !important;
          }

          /* All grid layouts to flex column on mobile */
          .grid {
            display: flex !important;
            flex-direction: column !important;
          }

          /* Text wrapping on mobile */
          p, span, div, a, button {
            min-width: 0 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }

          [data-name="SaverResourceBanner"] > div > div{
          flex-direction: column !important;
          }

          /* Text wrapping on mobile */
          p, span, div, a, button {
            min-width: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
