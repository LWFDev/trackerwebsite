
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Globe, Mail, User } from "lucide-react";

const Components = () => {
  return (
    <section id="components" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Beautiful Components for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our growing collection of versatile UI components
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in glass-card" style={{ animationDelay: '0.3s' }}>
          {/* Purple glow effect */}
          <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-flick-purple/30 to-flick-blue/30 rounded-2xl blur-xl opacity-50 animate-pulse-light"></div>

          <Tabs defaultValue="buttons" className="relative bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 pt-6 border-b">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="buttons">Buttons & Inputs</TabsTrigger>
                <TabsTrigger value="dialogs">Dialogs & Modals</TabsTrigger>
                <TabsTrigger value="forms">Forms & Controls</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="buttons" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-flick-purple hover:bg-flick-purple/90">Primary Button</Button>
                  <Button variant="outline" className="border-flick-purple text-flick-purple">Secondary Button</Button>
                  <Button variant="ghost" className="text-flick-purple hover:bg-flick-purple/10">Ghost Button</Button>
                  <Button variant="link" className="text-flick-purple">Link Button</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm" className="bg-flick-purple hover:bg-flick-purple/90">Small</Button>
                  <Button className="bg-flick-purple hover:bg-flick-purple/90">Default</Button>
                  <Button size="lg" className="bg-flick-purple hover:bg-flick-purple/90">Large</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Buttons with Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-flick-purple hover:bg-flick-purple/90 gap-2">
                    <Mail size={16} /> Email
                  </Button>
                  <Button variant="outline" className="border-flick-blue text-flick-blue gap-2">
                    <Globe size={16} /> Website
                  </Button>
                  <Button className="bg-flick-pink hover:bg-flick-pink/90 gap-2">
                    Continue <ArrowRight size={16} />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Input Fields</h3>
                <div className="grid gap-4 max-w-md">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <Input id="email" placeholder="Enter your email" className="pl-10" />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <Input id="username" placeholder="Enter your username" className="pl-10" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dialogs" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dialog Component</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-flick-purple hover:bg-flick-purple/90">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Subscribe to Newsletter</DialogTitle>
                      <DialogDescription>
                        Get the latest updates and news directly to your inbox.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-flick-purple hover:bg-flick-purple/90">Subscribe</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Form Components</h3>
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center space-x-2">
                    <div className="h-5 w-5 rounded border border-flick-purple flex items-center justify-center">
                      <Check size={12} className="text-flick-purple" />
                    </div>
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input id="fullname" placeholder="John Doe" />
                  </div>
                  
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email2">Email</Label>
                    <Input id="email2" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <Button className="w-full bg-flick-purple hover:bg-flick-purple/90">
                    Submit Form
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Components;
