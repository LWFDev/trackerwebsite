
import ModuleLayout from "@/components/modules/ModuleLayout";
import { ClipboardList, Clock, Calendar, CheckCircle, Users, BarChart2, MessageSquare, FileText, Flag, Layout, Target, Trello, Copy, BellRing, Briefcase, Globe } from "lucide-react";

const ProjectManagement = () => {
  return (
    <ModuleLayout
      title="Project Management"
      description="Plan, track, and deliver projects successfully with our comprehensive project management platform designed for teams of all sizes."
      color="purple"
      heroImage="/lovable-uploads/ff724d99-20cb-4926-8ea8-b88f5f69ef43.png"
      heroImageCallouts={[
        {
          text: "Project Dashboard",
          position: { top: "15%", left: "-20%" },
          icon: <BarChart2 className="h-4 w-4" />,
          delay: "0.5s"
        },
        {
          text: "Task Management",
          position: { top: "35%", right: "-20%" },
          icon: <CheckCircle className="h-4 w-4" />,
          delay: "0.7s"
        },
        {
          text: "Deadline Tracking",
          position: { top: "55%", left: "-15%" },
          icon: <Calendar className="h-4 w-4" />,
          delay: "0.9s"
        },
        {
          text: "Team Collaboration",
          position: { top: "75%", right: "-15%" },
          icon: <Users className="h-4 w-4" />,
          delay: "1.1s"
        }
      ]}
      stats={[
        {
          value: "35%",
          label: "Faster Project Completion Rate",
          icon: <Clock className="h-8 w-8 text-purple-500" />
        },
        {
          value: "25k+",
          label: "Projects Successfully Managed",
          icon: <ClipboardList className="h-8 w-8 text-purple-500" />
        },
        {
          value: "42%",
          label: "Improvement in Team Collaboration",
          icon: <Users className="h-8 w-8 text-purple-500" />
        },
        {
          value: "98%",
          label: "Customer Satisfaction Rate",
          icon: <CheckCircle className="h-8 w-8 text-purple-500" />
        }
      ]}
      mainSection={{
        title: "Complete Project Management Solution",
        description: "Our Project Management platform provides all the tools you need to plan, execute, and deliver successful projects while keeping your team aligned, informed, and productive."
      }}
      keyFeatures={{
        title: "Comprehensive Project Toolkit",
        description: "Everything you need to manage projects of any size or complexity",
        features: [
          {
            title: "Flexible Task Management",
            description: "Create, assign, and track tasks with customizable workflows, priorities, dependencies, and automated notifications.",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Visual Project Planning",
            description: "Visualize project timelines with interactive Gantt charts, Kanban boards, calendars, and resource allocation views.",
            icon: <Trello className="h-6 w-6" />
          },
          {
            title: "Real-time Collaboration",
            description: "Foster team communication with comments, file sharing, @mentions, and integrated discussion threads.",
            icon: <MessageSquare className="h-6 w-6" />
          },
          {
            title: "Customizable Workflows",
            description: "Adapt to any methodology with customizable templates, stages, automations, and approval processes.",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Resource Management",
            description: "Optimize team workloads with capacity planning, resource allocation, time tracking, and availability forecasting.",
            icon: <Users className="h-6 w-6" />
          },
          {
            title: "Comprehensive Analytics",
            description: "Track project performance with real-time dashboards showing progress, budget utilization, team productivity, and forecasts.",
            icon: <BarChart2 className="h-6 w-6" />
          }
        ]
      }}
      specialSection={{
        title: "Built for Every Project Methodology",
        subtitle: "Adaptable Framework",
        description: "Our platform supports any project management approach with customizable workflows and specialized tools.",
        items: [
          { text: "Agile project management with sprints, user stories, and velocity tracking", icon: <Target className="h-5 w-5" /> },
          { text: "Traditional waterfall planning with critical path analysis", icon: <ClipboardList className="h-5 w-5" /> },
          { text: "Kanban workflow visualization with WIP limits and flow metrics", icon: <Copy className="h-5 w-5" /> },
          { text: "Hybrid approaches combining different methodologies", icon: <Briefcase className="h-5 w-5" /> },
          { text: "Automated notifications and reminders for deadlines and milestones", icon: <BellRing className="h-5 w-5" /> },
          { text: "Global collaboration tools for distributed teams across time zones", icon: <Globe className="h-5 w-5" /> }
        ]
      }}
      ctaSection={{
        title: "Ready to Transform Your Project Management?",
        description: "Join thousands of teams that deliver projects successfully with our comprehensive platform.",
        primaryButtonText: "Start Free Trial",
        primaryButtonLink: "/get-started",
        secondaryButtonText: "Schedule Demo",
        secondaryButtonLink: "/pricing"
      }}
      relatedModules={[
        {
          title: "Document Management",
          icon: <FileText className="h-8 w-8" />,
          description: "Integrate project documentation with version control and team access management.",
          link: "/modules/document-management"
        },
        {
          title: "Analytics & Reporting",
          icon: <BarChart2 className="h-8 w-8" />,
          description: "Gain deeper insights into project metrics, resource utilization, and team performance.",
          link: "/modules/analytics-reporting"
        },
        {
          title: "Customer Portal",
          icon: <Users className="h-8 w-8" />,
          description: "Share project updates and deliverables with clients through a dedicated portal.",
          link: "/modules/customer-portal"
        }
      ]}
    />
  );
};

export default ProjectManagement;
