
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Sparkles } from "lucide-react";

const ClientTypes = () => {
  const clientTypes = [
    {
      title: "Dynamic Growth Companies",
      description: "Businesses ready to scale with systematic approaches to operations and data-driven decision making.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "System Evolution Stage",
      description: "Companies recognizing gaps in their current processes and seeking integrated solutions for the next phase.",
      icon: <Sparkles className="h-6 w-6" />
    }
  ];

  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6 px-6 py-3 text-slate-700 border-slate-200 bg-slate-50">
          <Users className="h-4 w-4 mr-2" />
          Our Clients
        </Badge>
        <h2 className="text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            We Work With...
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Dynamic and ambitious businesses with an appetite that aligns to ours – to improve and grow.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {clientTypes.map((client, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200/50 hover:border-emerald-200 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mr-4">
                  {client.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{client.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{client.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="bg-gradient-to-r from-slate-50 to-emerald-50 border-slate-200/50 inline-block">
          <CardContent className="p-8">
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
              Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy. Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear.
            </p>
            <div className="mt-6 p-4 bg-white/60 rounded-xl border border-emerald-200">
              <p className="text-slate-800 font-medium">
                <span className="text-emerald-600 font-semibold">Tracker aims to be the glue</span> that pulls everything together to enable the next phase of development for a growing business.
              </p>
            </div>
            <p className="text-slate-600 mt-6">
              While much of our focus is within the <span className="text-emerald-600 font-semibold">garment and personalisation space</span>, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientTypes;
