
import React, { useState } from "react";
import WorkflowBackground from "./workflow/WorkflowBackground";
import WorkflowHeader from "./workflow/WorkflowHeader";
import WorkflowLine from "./workflow/WorkflowLine";
import WorkflowStep from "./workflow/WorkflowStep";
import WorkflowCTA from "./workflow/WorkflowCTA";
import { useLocalization } from "@/contexts/LocalizationContext";

const Workflow = () => {
  const { t } = useLocalization();
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      number: "01",
      title: t("Upload & Organize"),
      description: t("Store all your logos and designs in one secure, searchable location for instant access.")
    },
    {
      number: "02", 
      title: t("Create Proofs"),
      description: t("Generate stunning professional mockups that wow your customers every time.")
    },
    {
      number: "03",
      title: t("Get Approvals"), 
      description: t("Streamline client feedback with automated approval workflows and notifications.")
    },
    {
      number: "04",
      title: t("Track Production"),
      description: t("Monitor every aspect of your production pipeline from order to final delivery.")
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-900 light:bg-gray-50 text-gray-900 dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      <WorkflowBackground />

      <div className="container mx-auto px-4 relative z-10">
        <WorkflowHeader />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <WorkflowLine onStepChange={setActiveStep} />
          
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index + 1}
              isActive={activeStep === index + 1}
            />
          ))}
        </div>
        
        <WorkflowCTA />
      </div>
    </section>
  );
};

export default Workflow;
