
import React, { useState } from "react";
import WorkflowBackground from "./workflow/WorkflowBackground";
import WorkflowHeader from "./workflow/WorkflowHeader";
import WorkflowLine from "./workflow/WorkflowLine";
import WorkflowStep from "./workflow/WorkflowStep";
import WorkflowCTA from "./workflow/WorkflowCTA";

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      number: "01",
      title: "Upload & Organize",
      description: "Store all your logos and designs in one secure, searchable location for instant access."
    },
    {
      number: "02", 
      title: "Create Proofs",
      description: "Generate stunning professional mockups that wow your customers every time."
    },
    {
      number: "03",
      title: "Get Approvals", 
      description: "Streamline client feedback with automated approval workflows and notifications."
    },
    {
      number: "04",
      title: "Track Production",
      description: "Monitor every aspect of your production pipeline from order to final delivery."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
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
