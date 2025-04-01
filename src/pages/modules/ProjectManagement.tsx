
import ModuleLayout from "@/components/modules/ModuleLayout";
import { ClipboardList, Clock, Calendar, CheckCircle, Users, BarChart2, MessageSquare, FileText, Flag, Layout } from "lucide-react";

const ProjectManagement = () => {
  return (
    <>
      <ModuleLayout
        title="Project Management"
        description="Plan, track, and manage projects with ease using our comprehensive project management solution."
        color="purple"
        stats={[
          {
            value: "35%",
            label: "Faster project completion",
            icon: <Clock className="h-8 w-8 text-purple-500" />
          },
          {
            value: "25k+",
            label: "Projects managed",
            icon: <ClipboardList className="h-8 w-8 text-purple-500" />
          },
          {
            value: "42%",
            label: "Improved team collaboration",
            icon: <Users className="h-8 w-8 text-purple-500" />
          },
          {
            value: "98%",
            label: "Customer satisfaction",
            icon: <CheckCircle className="h-8 w-8 text-purple-500" />
          }
        ]}
        mainSection={{
          title: "Project Management Simplified",
          description: "Our Project Management module provides all the tools you need to manage projects of any size and complexity."
        }}
        keyFeatures={{
          title: "Key Features",
          description: "Everything you need to plan, track, and deliver successful projects",
          features: [
            {
              title: "Task Management",
              description: "Create, assign, and track tasks with deadlines, priorities, and dependencies.",
              icon: <CheckCircle className="h-6 w-6" />
            },
            {
              title: "Timeline & Gantt Charts",
              description: "Visualize project schedules, milestones, and dependencies with interactive Gantt charts.",
              icon: <Calendar className="h-6 w-6" />
            },
            {
              title: "Team Collaboration",
              description: "Facilitate team communication with comments, file sharing, and @mentions.",
              icon: <Users className="h-6 w-6" />
            },
            {
              title: "Project Templates",
              description: "Save time by creating standardized templates for recurring project types.",
              icon: <Layout className="h-6 w-6" />
            },
            {
              title: "Resource Management",
              description: "Allocate and track team resources, workloads, and availability.",
              icon: <Flag className="h-6 w-6" />
            },
            {
              title: "Project Analytics",
              description: "Track project progress, team performance, and budget utilization with detailed analytics.",
              icon: <BarChart2 className="h-6 w-6" />
            }
          ]
        }}
        specialSection={{
          title: "Streamlined Workflows for Every Team",
          description: "Customize your project management experience to fit your team's unique workflow and requirements.",
          items: [
            { text: "Flexible methodologies – Agile, Waterfall, or hybrid approaches", icon: <CheckCircle className="h-5 w-5" /> },
            { text: "Custom workflows and approval processes", icon: <CheckCircle className="h-5 w-5" /> },
            { text: "Automated notifications and reminders", icon: <CheckCircle className="h-5 w-5" /> },
            { text: "Time tracking and reporting", icon: <CheckCircle className="h-5 w-5" /> },
            { text: "Client collaboration and visibility", icon: <CheckCircle className="h-5 w-5" /> },
            { text: "Mobile access for on-the-go project management", icon: <CheckCircle className="h-5 w-5" /> }
          ]
        }}
        ctaSection={{
          title: "Ready to Streamline Your Projects?",
          description: "Join thousands of teams that deliver projects on time and within budget with NuboSync.",
          primaryButtonText: "Get Started Today",
          secondaryButtonText: "Request Demo"
        }}
        relatedModules={[
          {
            title: "Document Management",
            icon: <FileText className="h-8 w-8" />,
            description: "Store, organize, and share documents securely across your organization.",
            link: "/modules/document-management"
          },
          {
            title: "Analytics & Reporting",
            icon: <BarChart2 className="h-8 w-8" />,
            description: "Get powerful insights from your data, anytime, anywhere.",
            link: "/modules/analytics-reporting"
          },
          {
            title: "Customer Portal",
            icon: <Users className="h-8 w-8" />,
            description: "Provide your customers with a self-service portal for support and information.",
            link: "/modules/customer-portal"
          }
        ]}
      />
    </>
  );
};

export default ProjectManagement;
