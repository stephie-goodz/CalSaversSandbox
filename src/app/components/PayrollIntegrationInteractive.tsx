import { useState } from "react";
import PayrollProviderIntegration from "../../imports/PayrollProviderIntegration/PayrollProviderIntegration";

export default function PayrollIntegrationInteractive() {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');
  const [tab2ToggleOn, setTab2ToggleOn] = useState(false);
  const [tab3ToggleOn, setTab3ToggleOn] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState<Set<string>>(new Set());

  const toggleAccordion = (id: string) => {
    setExpandedAccordions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <PayrollProviderIntegration
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tab2ToggleOn={tab2ToggleOn}
      setTab2ToggleOn={setTab2ToggleOn}
      tab3ToggleOn={tab3ToggleOn}
      setTab3ToggleOn={setTab3ToggleOn}
      expandedAccordions={expandedAccordions}
      toggleAccordion={toggleAccordion}
    />
  );
}
