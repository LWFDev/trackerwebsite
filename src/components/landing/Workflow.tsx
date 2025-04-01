
const WorkflowStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Workflow = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Streamline your entire workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial designs to final delivery, Tracker helps you manage every step of your production process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <WorkflowStep 
            number="01" 
            title="Upload & Organize" 
            description="Store all your logos and designs in one place for easy access." 
          />
          <WorkflowStep 
            number="02" 
            title="Create Proofs" 
            description="Generate professional mockups for customer approval." 
          />
          <WorkflowStep 
            number="03" 
            title="Get Approvals" 
            description="Streamline client feedback and approvals." 
          />
          <WorkflowStep 
            number="04" 
            title="Track Production" 
            description="Monitor progress from order to delivery." 
          />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
