
import React from "react";
import { Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutTeam = () => {
  // Team members data
  const teamMembers = [
    { id: 1, name: "Team Member 1", position: "Founder" },
    { id: 2, name: "Team Member 2", position: "Co-Founder" },
    { id: 3, name: "Team Member 3", position: "CTO" },
    { id: 4, name: "Team Member 4", position: "Product Lead" },
    { id: 5, name: "Team Member 5", position: "Design Lead" },
    { id: 6, name: "Team Member 6", position: "Marketing Director" },
    { id: 7, name: "Team Member 7", position: "Customer Success" },
    { id: 8, name: "Team Member 8", position: "Senior Developer" },
  ];

  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gold-DEFAULT mb-4">Our Team</h3>
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Meet the people behind Tracker</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're a diverse team of designers, developers, and industry experts passionate about creating the best workflow tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-zinc-800/20 rounded-lg overflow-hidden group hover:border hover:border-gold-DEFAULT transition-all">
              <div className="aspect-square bg-zinc-800/50 flex items-center justify-center">
                <Users className="w-16 h-16 text-zinc-600 group-hover:text-gold-DEFAULT transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="font-medium group-hover:text-gold-DEFAULT transition-colors">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-zinc-700 hover:border-gold-DEFAULT group">
            Join our team 
            <ArrowUpRight className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gold-DEFAULT transition-colors" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
