import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Sparkles, TrendingUp } from "lucide-react";
const ClientTypes = () => {
  const clientTypes = [{
    title: "Dynamic Growth Companies",
    description: "Businesses ready to scale with systematic approaches to operations and data-driven decision making.",
    icon: <Target className="h-6 w-6" />
  }, {
    title: "System Evolution Stage",
    description: "Companies recognizing gaps in their current processes and seeking integrated solutions for the next phase.",
    icon: <Sparkles className="h-6 w-6" />
  }];
  return <section className="mb-24">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6 px-6 py-3 text-gray-300 border-gray-600 bg-gray-800 font-medium">
          <Users className="h-4 w-4 mr-2 text-emerald-600" />
          Our Clients
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          We Work With...
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Dynamic and ambitious businesses with an appetite that aligns to ours – to <span className="text-emerald-600 font-semibold">improve and grow</span>.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {clientTypes.map((client, index) => <Card key={index} className="border-gray-700 bg-gray-800 hover:border-emerald-300 hover:shadow-md transition-all group">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white mr-4 shadow-sm">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold transition-colors text-gray-200">{client.title}</h3>
              </div>
              <p className="leading-relaxed text-gray-300">{client.description}</p>
            </CardContent>
          </Card>)}
      </div>

      <div className="text-center">
        <Card className="border-gray-700 bg-gray-800 shadow-lg inline-block max-w-5xl">
          <CardContent className="p-10">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-emerald-600 mr-3" />
              <span className="text-lg font-semibold text-emerald-400">Business Evolution</span>
            </div>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              Very often our clients are at a pivotal stage and recognise the need to gain more control, improve profitability and efficiency, or simply support a desired growth strategy. Most businesses are not deliberate in their system development – it is more a case of evolution - and through this, ineffective gaps often appear.
            </p>
            <div className="p-6 bg-emerald-900/20 rounded-lg border border-emerald-700 mb-6">
              <p className="text-gray-200 font-semibold text-lg">
                <span className="text-emerald-400 font-bold bg-emerald-900/30 px-3 py-1 rounded">Tracker aims to be the glue</span> that pulls everything together to enable the next phase of development for a growing business.
              </p>
            </div>
            <p className="text-gray-200">
              While much of our focus is within the <span className="text-emerald-400 font-semibold bg-emerald-900/30 px-2 py-1 rounded">garment and personalisation space</span>, we continue to also provide solutions to a number of other medium-sized enterprises including retailers and manufacturers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default ClientTypes;