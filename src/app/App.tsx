import { useState, useEffect, useRef } from "react";
import PayrollProviderIntegration, { Tab1BodyContent } from "../imports/PayrollProviderIntegration/PayrollProviderIntegration";
import { Tab2ToggleOffBodyContent } from "../imports/1Tab2PayrollIntegrationsIncWithToggleOff/1Tab2PayrollIntegrationsIncWithToggleOff";
import { Tab2ToggleOnBodyContent } from "../imports/2Tab2PayrollIntegrationsIncWithToggleOn/2Tab2PayrollIntegrationsIncWithToggleOn";
import { Tab3ToggleOffBodyContent } from "../imports/3Tab3PaychexAndTjhPayrollWithToggleOff/3Tab3PaychexAndTjhPayrollWithToggleOff";
import { Tab3ToggleOnBodyContent } from "../imports/4Tab3PaychexAndTjhPayrollWithToggleOn/4Tab3PaychexAndTjhPayrollWithToggleOn";
import { Tab180OverviewContent } from "../imports/180TabExamples/180TabExamples";
import { Tab180SetupToggleOffBodyContent } from "../imports/180Tab2ToggleOff-1/180Tab2ToggleOff";
import { Tab180SetupToggleOnBodyContent } from "../imports/180Tab2ToggleOn/180Tab2ToggleOn";
import SaversPage from "./components/SaversPage";

export default function App() {
  // Top-level page navigation
  const [currentPage, setCurrentPage] = useState<'employers' | 'savers'>('employers');
  // Integration mode: 360° or 180°
  const [integrationMode, setIntegrationMode] = useState<'360' | '180'>('360');

  // 360° states
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);
  const [tab2Toggle, setTab2Toggle] = useState(false);
  const [tab3Toggle, setTab3Toggle] = useState(false);

  // 180° states
  const [active180Tab, setActive180Tab] = useState<1 | 2>(1); // 1 = Overview, 2 = Setup
  const [toggle180, setToggle180] = useState(false);

  const [expandedAccordions, setExpandedAccordions] = useState<Set<string>>(new Set(['Accordion PI', 'Accordion Full']));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for radio button clicks to switch between 360° and 180°
      const radioContent = target.closest('[data-integration-type]');
      if (radioContent) {
        const integrationType = radioContent.getAttribute('data-integration-type');

        if (integrationType === '360') {
          setIntegrationMode('360');
        } else if (integrationType === '180') {
          setIntegrationMode('180');
        }
        return;
      }

      // Find if click was on a tab button
      const tabButton = target.closest('[data-name="TabSetup"]');
      if (tabButton) {
        const tabText = tabButton.textContent || "";

        if (integrationMode === '360') {
          // 360° tabs
          if (tabText.includes("Overview and Pricing")) {
            setActiveTab(1);
          } else if (tabText.includes("Payroll Integrations Inc")) {
            setActiveTab(2);
          } else if (tabText.includes("Paychex") || tabText.includes("TJH")) {
            setActiveTab(3);
          }
        } else {
          // 180° tabs
          if (tabText.includes("Overview")) {
            setActive180Tab(1);
          } else if (tabText.includes("How to integrate")) {
            setActive180Tab(2);
          }
        }
        return;
      }

      // Find if click was on toggle switch
      const toggleSwitch = target.closest('[data-name="Toggle Switch"]');
      if (toggleSwitch) {
        if (integrationMode === '360') {
          if (activeTab === 2) {
            setTab2Toggle(prev => !prev);
          } else if (activeTab === 3) {
            setTab3Toggle(prev => !prev);
          }
        } else {
          // 180° toggle
          if (active180Tab === 2) {
            setToggle180(prev => !prev);
          }
        }
        return;
      }

      // Also check for clicks on the toggle background or switch itself
      const toggleBg = target.closest('[data-name="Background"]');
      const switchCircle = target.closest('[data-name="Switch"]');
      if (toggleBg || switchCircle) {
        if (integrationMode === '360') {
          if (activeTab === 2) {
            setTab2Toggle(prev => !prev);
          } else if (activeTab === 3) {
            setTab3Toggle(prev => !prev);
          }
        } else {
          // 180° toggle
          if (active180Tab === 2) {
            setToggle180(prev => !prev);
          }
        }
        return;
      }

      // Check for accordion clicks
      const accordionHeader = target.closest('[data-name="Accordion/expanded"], [data-name="Accordion/collapsed"]');
      if (accordionHeader) {
        const accordionContainer = accordionHeader.closest('[data-name^="Accordion"]');
        if (accordionContainer) {
          let accordionId = accordionContainer.getAttribute('data-accordion-id');
          if (!accordionId) {
            const textContainer = accordionHeader.querySelector('[data-name="Text Container"], [data-name="Number Container"]');
            accordionId = textContainer?.textContent?.trim() || '';
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
        const selectedValue = parseInt(target.value);
        if (integrationMode === '360') {
          setActiveTab(selectedValue as 1 | 2 | 3);
        } else {
          setActive180Tab(selectedValue as 1 | 2);
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
  }, [integrationMode, activeTab, active180Tab, currentPage]);

  // Apply accordion states to the DOM after render
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const accordionContainers = container.querySelectorAll('[data-name^="Accordion"]');

    accordionContainers.forEach(accordionContainer => {
      const accordionHeader = accordionContainer.querySelector('[data-name="Accordion/expanded"], [data-name="Accordion/collapsed"]');

      let accordionId = accordionContainer.getAttribute('data-accordion-id');
      if (!accordionId && accordionHeader) {
        const textContainer = accordionHeader.querySelector('[data-name="Text Container"], [data-name="Number Container"]');
        accordionId = textContainer?.textContent?.trim() || '';
        if (accordionId) {
          accordionContainer.setAttribute('data-accordion-id', accordionId);
        }
      }

      if (!accordionId) return;

      const isExpanded = expandedAccordions.has(accordionId);
      const stepContent = accordionContainer.querySelector('[data-name^="Step="]');

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
  }, [expandedAccordions, activeTab, tab2Toggle, tab3Toggle, active180Tab, toggle180, integrationMode, currentPage]);

  // Determine which body content component to render
  let BodyContent;

  if (integrationMode === '360') {
    // 360° integration mode
    if (activeTab === 1) {
      BodyContent = <Tab1BodyContent />;
    } else if (activeTab === 2) {
      BodyContent = tab2Toggle ? <Tab2ToggleOnBodyContent /> : <Tab2ToggleOffBodyContent />;
    } else {
      BodyContent = tab3Toggle ? <Tab3ToggleOnBodyContent /> : <Tab3ToggleOffBodyContent />;
    }
  } else {
    // 180° integration mode
    if (active180Tab === 1) {
      BodyContent = <Tab180OverviewContent />;
    } else {
      BodyContent = toggle180 ? <Tab180SetupToggleOnBodyContent /> : <Tab180SetupToggleOffBodyContent />;
    }
  }

  return (
    <div className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-[#00594f] w-full py-3 sticky top-0 z-50 shadow-md">
        <div className="max-w-[1200px] mx-auto px-4 flex gap-4 items-center justify-center">
          <button
            onClick={() => setCurrentPage('employers')}
            className={`px-6 py-2 rounded font-['Poppins',sans-serif] font-semibold text-base tracking-wide transition-colors ${
              currentPage === 'employers'
                ? 'bg-white text-[#00594f]'
                : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#00594f]'
            }`}
          >
            Go to Payroll Provider Integration page
          </button>
          <button
            onClick={() => setCurrentPage('savers')}
            className={`px-6 py-2 rounded font-['Poppins',sans-serif] font-semibold text-base tracking-wide transition-colors ${
              currentPage === 'savers'
                ? 'bg-white text-[#00594f]'
                : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#00594f]'
            }`}
          >
            Go to Savers Overview page
          </button>
        </div>
      </div>

      {/* Page Content */}
      {currentPage === 'employers' && (
        <div ref={containerRef} className="w-full">
          <PayrollProviderIntegration
            bodyContent={BodyContent}
            integrationMode={integrationMode}
            activeTab={activeTab}
            active180Tab={active180Tab}
          />
          <style>{`
        /* DESKTOP LAYOUT - Maintain centered layout with max-width */
        [data-name="Section"],
        [data-name="Hero"],
        [data-name="Navigation"],
        [data-name="Footer"] {
          width: 100% !important;
          max-width: none !important;
        }

        /* Desktop: Inner containers centered with max-width */
        [data-name="Steps"] {
          width: 100% !important;
          max-width: 66.666% !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        [data-name="Navigation"] [data-name="InnerContainer"] {
          max-width: 66.666% !important;
        }

        [data-name="Section"] > [data-name="InnerContainer"] {
          max-width: 66.666% !important;
        }

        [data-name="Footer"] > div {
        max-width: 66.66%;
        width: 100%;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        /* Tab containers */
        [data-name*="360-Tabs"],
        [data-name*="Tab 2"],
        [data-name*="Tab 3"],
        [data-name="Body"],
        [data-name="Tabs"],
        [data-name="Levelradios"] {
          width: 100% !important;
        }

        /* Content inside tabs and accordions */
        [data-name*="Tab"] [data-name="Group"],
        [data-name*="Tab"] [data-name="Register/Novice"],
        [data-name*="Tab"] [data-name="Accordions"],
        [data-name="Header"] {
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Accordion Step content uses 2-column equal layout on desktop */
        [data-name="Step"] {
          display: flex !important;
          gap: 16px !important;
          width: 100% !important;
        }

        [data-name="Step"] > [data-name="Text"],
        [data-name="Step"] > [data-name="ScreenshotContainer"] {
          flex: 1 0 0 !important;
          min-width: 0 !important;
        }

        [data-name="Accordion/expanded"] > [data-name="Steps"] {
        max-width: 100% !important;
        }

        [data-name="Text Container"] > p {
          width: 100% !important;
        }

          [data-name^="Step="] [data-name="Steps"],
        [data-name^="Step="] [data-name="InnerContainer"] {
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Accordion cursor */
        [data-name="Accordion/expanded"],
        [data-name="Accordion/collapsed"] {
          cursor: pointer;
        }

        /* Smooth accordion transitions */
        [data-name^="Step="] {
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        [data-name="chevron-up"],
        [data-name="chevron-down"] {
          transition: transform 0.3s ease;
        }

                /* StepText - quickview boxes */
          [data-name="StepsContainer"] [data-name="Row"]{
            height: auto !important;
          }

        /* Inactive tab hover effects */
        [data-name="TabSetup"][data-tab-active="false"]:hover .tab-main-text {
          color: #00473F !important;
          text-decoration: underline !important;
        }

        /* TABLET BREAKPOINT (768px - 1024px) */
        @media (max-width: 1024px) {
          /* Remove max-width constraints on tablet */
          [data-name="Steps"],
          [data-name="Navigation"] [data-name="InnerContainer"],
          [data-name="Section"] > [data-name="InnerContainer"],
          [data-name="Footer"] > div {
            max-width: none !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          /* Tablet tabs - auto-layout, hug content, wrap */
          [data-name="Tabs"].hidden.md\\:flex {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: 100% !important;
            gap: 12px !important;
          }

          [data-name="Tabs"].hidden.md\\:flex [data-name="TabSetup"] {
            flex: 0 1 auto !important;
            width: auto !important;
            min-width: inherit !important;
            white-space: normal !important;
          }
          
          [data-name="Tab Text"] {
            white-space: normal !important;
            width: 100%;
            flex: inherit;
            padding: 8px 0;
          }

           [data-name="Text + Icon"] {
            min-height: auto;
            width: 100%;
            padding-inline: 0px;
          }
          
          /* Integration cards gap 24px */
          [data-name="Toggle"] {
            gap: 24px !important;
          }

          /* Video section - stack vertically with 32px gap */
          [data-name="Section"] [data-name="InnerContainer"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }

          [data-name="RightContainer"],
          [data-name="LeftContainer"] {
            width: 100% !important;
            max-width: none !important;
          }

          /* VideoDetails - ensure text wraps on tablet */
          [data-name="VideoDetails"] > div {
            min-width: 0 !important;
          }

          [data-name="VideoDetails"] p {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            min-width: 0 !important;
          }

          /* StepText - equal columns with text wrap on tablet */
          [data-name="StepText"] {
            flex-direction: row !important;
            gap: 16px !important;
          }

                   /* StepText - height auto quickview boxes */
          [data-name="StepsContainer"] [data-name="Row"]{
            height: auto !important;
          }

          [data-name="StepText"] > p {
            flex: 1 !important;
            min-width: 0 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }

          [data-name="StepText"] > div {
            flex: 1 !important;
            min-width: 0 !important;
          }

          /* Support cards gap 24px */
          [data-name="Cards"] {
            gap: 24px !important;
          }

          /* Text wrapping on tablet */
          p, span, div, a, button {
            min-width: 0 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
        }

        /* MOBILE BREAKPOINT (<=767px) */
        @media (max-width: 767px) {
          /* Remove max-width constraints and add padding on mobile */
          [data-name="Steps"],
          [data-name="Navigation"] [data-name="InnerContainer"],
          [data-name="Section"] > [data-name="InnerContainer"],
          [data-name="Footer"] > div {
            max-width: none !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            width: 100% !important;
          }

          [data-name="Navigation"] [data-name="InnerContainer"]{
            max-width: none !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            padding-top: 32px !important;
          }

            [data-name="Navigation"] {
            height: auto !important;
          }

          [data-name="Navigation"] > div > div{
            padding-inline: 0px !important;
          }

          /* Mobile header - stack logo above buttons */
          [data-name="Navigation"] [data-name="InnerContainer"] .content-stretch.flex.flex-col.md\\:flex-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 24px !important;
            width: 100% !important;
          }

          /* Header buttons - equal width 50/50 */
          [data-name="ButtonGroup"] {
            width: 100% !important;
            display: flex !important;
            gap: 0px !important;
          }

          [data-name="ButtonGroup"] > a {
            flex: 1 !important;
          }

          
          
          [data-name="ButtonGroup"] [data-name="Button"] > div {
            border-radius: 0px !important;
          }

          [data-name="ButtonGroup"] [data-name="Button"] {
            border-radius: 0px !important;
          }

          [data-name="ScreenshotContainer"] [data-name="Container"]{
          height: auto;
          padding-bottom: 12px;
          }

          /* Integration selection cards - stack vertically with 24px gap */
          [data-name="Toggle"] {
            flex-direction: column !important;
            gap: 24px !important;
          }

          [data-name="Toggle"] > button {
            width: 100% !important;
          }

          [data-name="ca-seal-white 1"]{
          display: none;
          }

          /* Hide desktop tabs on mobile */
          [data-name="Tabs"].hidden.md\\:flex {
            display: none !important;
          }

          /* Show mobile dropdown */
          [data-name="Tabs"].md\\:hidden {
            display: block !important;
          }

          /* All 2-column layouts convert to single column with 24px spacing */
          [data-name="Step"] {
            flex-direction: column !important;
            padding: 0px !important;
            gap: 24px !important;
          }

          [data-name="360-Tabs 2"]{
          padding: 0 24px;
          }

          [data-name="Header"]{
          padding: 0 24px;
          }

          [data-name="Body"] > div{
          border-radius: 8px;
          }

          /* All 2-column layouts convert to single column with 24px spacing */
          [data-name="Group"] [data-name="StepText"]{
            flex-direction: column !important;
            padding:0px !important;
            gap: 24px !important;
          }

          [data-name="Step"] > [data-name="Text"],
          [data-name="Step"] > [data-name="ScreenshotContainer"] {
            width: 100% !important;
            max-width: none !important;
            flex: none !important;
          }

            [data-name="Text"],{
            width: 100% !important;
          }

          [data-name="Steps"]{
          max-width: 100% !important;
          padding: 0px !important;
          }

          [data-name="Table"] {
          flex-direction: column !important;
          }
          
          [data-name="Table Column"] {
          width: 100% !important;
          }
          

          /* Video section - stack vertically with 32px gap */
          [data-name="Section"] [data-name="InnerContainer"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }

          
          [data-name="Section"] [data-name="Steps"] {
          padding: 24px;
          }

          [data-name="RightContainer"],
          [data-name="LeftContainer"] {
            width: 100% !important;
            max-width: none !important;
          }

          /* VideoDetails - equal columns with text wrap on mobile */
          [data-name="VideoDetails"] {
            flex-direction: column !important;
            gap: 8px !important;
          }

          [data-name="VideoDetails"] > div {
            width: 100% !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          [data-name="VideoDetails"] p {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            min-width: 0 !important;
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

          [data-name="Levelradios"] {
          padding: 0px 24px;
          }

         
          


          [data-name="StepText"] > p {
            width: 100% !important;
            min-width: 0 !important;
          }

          [data-name="StepText"] > div {
            width: 100% !important;
          }

          /* Support cards - stack vertically with 24px gap */
          [data-name="Cards"] {
            flex-direction: column !important;
            gap: 24px !important;
          }

          [data-name="Cards"] > div,
          [data-name="Cards"] > a {
            width: 100% !important;
            max-width: none !important;
          }

          /* Footer - full width, no overflow */
          [data-name="Footer"] {
            width: 100% !important;
            overflow-x: hidden !important;
          }

          [data-name="Footer"] > div {
            width: 100% !important;
            max-width: none !important;
          }

          /* All accordions full width */
          [data-name^="Accordion"] {
            width: 100% !important;
            max-width: none !important;
          }

           /* Accordion Body */
          [data-name="Accordion"] [data-name^="Step="] > div > div{
            padding: 16px 16px !important;
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
        }
      `}</style>
        </div>
      )}

      {currentPage === 'savers' && <SaversPage />}
    </div>
  );
}
