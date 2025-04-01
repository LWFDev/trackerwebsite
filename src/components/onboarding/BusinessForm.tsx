
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { OnboardingData } from "@/pages/GetStarted";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  businessType: z.string().min(1, "Please select a business type"),
  employeeCount: z.string().min(1, "Please select employee count"),
  yearsInBusiness: z.string().min(1, "Please select years in business"),
  decorationMethods: z.array(z.string()).min(1, "Please select at least one decoration method"),
});

interface BusinessFormProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export function BusinessForm({ formData, updateFormData, onNext }: BusinessFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: formData.businessType || "",
      employeeCount: formData.employeeCount || "",
      yearsInBusiness: formData.yearsInBusiness || "",
      decorationMethods: formData.decorationMethods || [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData(values);
    onNext();
  }

  const businessTypes = [
    "Embroidery Shop",
    "Screen Printing Shop",
    "Full-Service Decoration Shop",
    "Promotional Products Company",
    "Other"
  ];

  const employeeCounts = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201+ employees"
  ];

  const yearsInBusinessOptions = [
    "Less than 1 year",
    "1-3 years",
    "4-10 years",
    "10+ years"
  ];

  const decorationMethodOptions = [
    "Embroidery",
    "Screen Printing",
    "DTF (Direct to Film)",
    "DTG (Direct to Garment)",
    "Vinyl/Heat Transfer",
    "Sublimation",
    "Other"
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">Tell us about your business</h1>
          <p className="text-gray-400">This helps us customize your experience with Tracker.</p>
        </div>

        <FormField
          control={form.control}
          name="businessType"
          render={({ field }) => (
            <FormItem className="space-y-5">
              <FormLabel className="text-white text-base">What type of business do you operate?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-3"
                >
                  {businessTypes.map((type) => (
                    <FormItem
                      key={type}
                      className="flex items-center space-x-3 space-y-0 rounded-md p-3 border border-zinc-800 hover:border-[#D4AF37]/50 hover:bg-zinc-800/50 transition-colors"
                    >
                      <FormControl>
                        <RadioGroupItem value={type} className="border-zinc-600 text-[#D4AF37]" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer flex-1 text-gray-300">{type}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employeeCount"
          render={({ field }) => (
            <FormItem className="space-y-5">
              <FormLabel className="text-white text-base">How many employees do you have?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-3"
                >
                  {employeeCounts.map((count) => (
                    <FormItem
                      key={count}
                      className="flex items-center space-x-3 space-y-0 rounded-md p-3 border border-zinc-800 hover:border-[#D4AF37]/50 hover:bg-zinc-800/50 transition-colors"
                    >
                      <FormControl>
                        <RadioGroupItem value={count} className="border-zinc-600 text-[#D4AF37]" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer flex-1 text-gray-300">{count}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsInBusiness"
          render={({ field }) => (
            <FormItem className="space-y-5">
              <FormLabel className="text-white text-base">How long have you been in business?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-3"
                >
                  {yearsInBusinessOptions.map((option) => (
                    <FormItem
                      key={option}
                      className="flex items-center space-x-3 space-y-0 rounded-md p-3 border border-zinc-800 hover:border-[#D4AF37]/50 hover:bg-zinc-800/50 transition-colors"
                    >
                      <FormControl>
                        <RadioGroupItem value={option} className="border-zinc-600 text-[#D4AF37]" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer flex-1 text-gray-300">{option}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="decorationMethods"
          render={() => (
            <FormItem className="space-y-5">
              <FormLabel className="text-white text-base">What decoration methods do you offer? (Select all that apply)</FormLabel>
              <div className="space-y-3">
                {decorationMethodOptions.map((method) => (
                  <FormField
                    key={method}
                    control={form.control}
                    name="decorationMethods"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={method}
                          className="flex items-center space-x-3 space-y-0 rounded-md p-3 border border-zinc-800 hover:border-[#D4AF37]/50 hover:bg-zinc-800/50 transition-colors"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(method)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, method])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== method
                                      )
                                    );
                              }}
                              className="border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black"
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer flex-1 text-gray-300">
                            {method}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-4">
          <Button type="submit" variant="gold" className="w-32">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
