import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Smartphone, 
  Download as DownloadIcon, 
  QrCode, 
  Star, 
  Shield, 
  Wifi, 
  Globe,
  Check
} from "lucide-react";

const Download = () => {
  const features = [
    { icon: Shield, text: "100% Free & Safe" },
    { icon: Wifi, text: "Works Offline" },
    { icon: Globe, text: "6 Languages" },
    { icon: Star, text: "Rated 4.9/5" }
  ];

  const faqs = [
    {
      question: "Is BulaBooks really free?",
      answer: "Yes! BulaBooks is completely free to download and use. We believe every child deserves access to quality literacy resources regardless of their family's financial situation."
    },
    {
      question: "Can it work without internet?",
      answer: "Absolutely! You can download stories and activities for offline use. This is perfect for areas with limited internet connectivity or to save on data costs."
    },
    {
      question: "What languages are available?",
      answer: "BulaBooks supports 6 South African languages: English, isiZulu, isiXhosa, Afrikaans, Sepedi, and Setswana. We're continuously adding more languages."
    },
    {
      question: "Is my child's data safe?",
      answer: "Privacy and safety are our top priorities. We comply with POPIA and international data protection standards. We never share personal information with third parties."
    },
    {
      question: "What age group is it for?",
      answer: "BulaBooks is designed for children aged 4-12, covering early literacy through intermediate reading levels. Content adapts to each child's reading ability."
    },
    {
      question: "Do I need to pay for premium features?",
      answer: "No premium tiers or hidden costs. All features including progress tracking, speech feedback, and gamification are completely free for all users."
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-white/20 text-white border-white/30">
            100% Free Download
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4 font-poppins">
            Download BulaBooks Today
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Start your child's reading journey with South Africa's most loved literacy app. 
            Available on all platforms, completely free.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <Icon className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Choose Your Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              BulaBooks works seamlessly across all your devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* iOS */}
            <Card className="border-border hover:border-primary/20 transition-all hover:shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">iOS App</h3>
                <p className="text-muted-foreground mb-6">
                  For iPhone and iPad users
                </p>
                <Button className="w-full mb-4" disabled>
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Coming to App Store
                </Button>
                <p className="text-xs text-muted-foreground">
                  iOS 12.0 or later required
                </p>
              </CardContent>
            </Card>

            {/* Android */}
            <Card className="border-primary bg-primary/5 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Android App</h3>
                <p className="text-muted-foreground mb-6">
                  For Android devices
                </p>
                <Button className="w-full mb-4" disabled>
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Coming to Play Store
                </Button>
                <p className="text-xs text-muted-foreground">
                  Android 8.0 or later required
                </p>
              </CardContent>
            </Card>

            {/* Web */}
            <Card className="border-border hover:border-primary/20 transition-all hover:shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Web App</h3>
                <p className="text-muted-foreground mb-6">
                  Use in any web browser
                </p>
                <Button variant="outline" className="w-full mb-4" disabled>
                  <Globe className="w-5 h-5 mr-2" />
                  Launch Web App
                </Button>
                <p className="text-xs text-muted-foreground">
                  Works on all modern browsers
                </p>
              </CardContent>
            </Card>
          </div>

          {/* QR Code Section */}
          <div className="bg-gradient-secondary rounded-2xl p-8 text-center">
            <QrCode className="w-24 h-24 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quick Download
            </h3>
            <p className="text-muted-foreground mb-6">
              Scan this QR code with your phone camera to download BulaBooks directly
            </p>
            <div className="inline-block bg-white p-4 rounded-xl border border-border">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">QR Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about downloading and using BulaBooks
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Ready to Transform Reading?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of South African families already using BulaBooks to unlock their children's potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" disabled>
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10" disabled>
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-white/80">
            <Check className="w-5 h-5 text-green-300" />
            <span>Free forever</span>
            <Check className="w-5 h-5 text-green-300" />
            <span>No ads</span>
            <Check className="w-5 h-5 text-green-300" />
            <span>Safe for kids</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Download;