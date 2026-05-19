export function Tab180SetupToggleOnBodyContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Group">
      {/* Header with title and toggle */}
      <div className="content-stretch flex flex-col md:flex-row gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
        <p className="flex-1 font-['Poppins',sans-serif] font-medium leading-[32px] not-italic relative text-[20px] text-black tracking-[1px] min-w-0 break-words">Setup guide to integrate payroll with a 180° integration</p>
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full md:w-[392px] min-w-0">
          <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Need a simplified walk-though?</p>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
              <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] flex-1 min-w-0 break-words">Toggle Quick Overview Instructions</p>
              <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="bg-[#00594f] col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
                <div className="col-1 ml-[21px] mt-px relative row-1 size-[22px]" data-name="Switch">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <g id="Switch">
                      <circle cx="11" cy="11" fill="white" id="Ellipse 1" r="11" />
                      <g id="Frame 1344"><path d="M6.99995 11.6562L9.51411 14.1704L15.171 8.51355" id="Rectangle 47" stroke="var(--stroke-0, #00594F)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Container */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="StepsContainer">
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
        {/* Step 1 */}
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
              <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
                <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative text-[16px] tracking-[1px] w-full" data-name="Text Container">
                  <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Log in to your account and go to "Payroll Provider" to begin adding your provider</p>
                  <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Go to payroll provider and select "Add New." Choose "I have a different payroll provider" and search for your payroll provider in the participating vendor list.</p>
                </div>
                <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                  <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
                    <p className="leading-[24px]">Account Login</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>

        {/* Step 2 */}
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 2">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
              <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
                <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative tracking-[1px]" data-name="Text Container">
                <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Review payroll representative's contact information</p>
                <div className="font-['Poppins',sans-serif] leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] w-full">
                  <p className="mb-0">Review if your listed payroll representative's contact information is correct.</p>
                  <p className="mb-0">​</p>
                  <p className="mb-0">
                    If the representative contact information is incorrect, please contact client services at (855) 650-6916 M-F 8am-8pm EST, or <a href="mailto:clientservices@calsavers.com" className="font-['Poppins',sans-serif] font-semibold text-[#00594f] underline">clientservices@calsavers.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>

      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
        {/* Step 3 */}
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 3">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
              <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
                <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
                <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Add a bank or select a previously added account</p>
                <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Select a bank account that your company will use to send employee contributions.</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>

        {/* Step 4 */}
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 4">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
              <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
                <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
                <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Submit to invite your payroll representative to manage your account</p>
                <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Once the invite is sent, your representative will receive an email to start the file upload process with CalSavers.</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      </div>
    </div>
  );
}
