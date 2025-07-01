
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Sparkles, TrendingUp } from "lucide-react";

const ClientTypes = () => {
  const clientTypes = [
    {
      title: "Dynamic Growth Companies",
      description: "Businesses ready to scale with systematic approaches to operations and data-driven decision making.",
      icon: <Target className="h-6 w-6" />,
      gradient: "from-emerald-500/90 to-green-600/90"
    },
    {
      title: "System Evolution Stage",
      description: "Companies recognizing gaps in their current processes and seeking integrated solutions for the next phase.",
      icon: <Sparkles className="h-6 w-6" />,
      gradient: "from-green-500/90 to-emerald-600/90"
    }
  ];

  return (
    <section className="mb-28">
      <div className="text-center mb-20">
        <Badge variant="outline" className="mb-8 px-8 py-4 text-slate-700 border-slate-300 bg-gradient-to-r from-slate-50/80 to-emerald-50/60 shadow-sm hover:shadow-md transition-all">
          <Users className="h-5 w-5 mr-2 text-emerald-600" />
          Our Clients
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-10">
          <span className="bg-gradient-to-r from-slate-800 via-green-600/80 to-emerald-500/80 bg-clip-text text-transparent">
            We Work With...
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Dynamic and ambitious businesses with an appetite that aligns to ours – to <span className="text-emerald-600 font-semibold">improve and grow</span>.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {clientTypes.map((client, index) => (
          <Card key={index} className="bg-gradient-to-br from-white/90 via-emerald-50/20 to-green-50/15 backdrop-blur-sm border-slate-200/60 hover:border-emerald-300/60 transition-all duration-500 group hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${client.gradient} rounded-xl flex items-center justify-center text-white mr-6 shadow-md group-hover:shadow-lg transition-shadow`}>
                  {client.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{client.title}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{client.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="bg-gradient-to-br from-slate-50/90 via-emerald-50/60 to-green-50/40 border-emerald-200/60 inline-block shadow-lg hover:shadow-xl transition-all duration-500">
          <CardContent className="p-12 max-w-5xl">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-emerald-600 mr-3" />
              <span className="text-lg font-semibold text-emerald-700">Business Evolution</span>
            </div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
              Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy. Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear.
            </p>
            <div className="p-8 bg-white/90 rounded-xl border border-emerald-300/60 shadow-md mb-8">
              <p className="text-slate-800 font-semibold text-xl">
                <span className="text-emerald-600 font-bold bg-emerald-100/80 px-3 py-1 rounded-lg">Tracker aims to be the glue</span> that pulls everything together to enable the next phase of development for a growing business.
              </p>
            </div>
            <p className="text-slate-600 text-lg">
              While much of our focus is within the <span className="text-emerald-600 font-bold bg-emerald-100/80 px-2 py-1 rounded-lg">garment and personalisation space</span>, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientTypes;
