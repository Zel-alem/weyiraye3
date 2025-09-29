import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Phone } from "lucide-react"

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What is Weyriaye?",
        answer:
          "Weyriaye is Ethiopia's leading smart cargo transport platform that connects cargo owners, truck owners, drivers, assistants, and agents in one unified ecosystem. We use advanced technology to match cargo with the right trucks, provide real-time tracking, and ensure secure payments.",
      },
      {
        question: "How does Weyriaye work?",
        answer:
          "Cargo owners post their transport needs, our smart system matches them with suitable truck owners, who then assign drivers and assistants. Throughout the journey, all parties can track progress in real-time, and payments are processed instantly upon delivery confirmation.",
      },
      {
        question: "Which regions does Weyriaye serve?",
        answer:
          "Weyriaye currently serves 12+ regions across Ethiopia, with branches in major cities. We're continuously expanding our network to cover more areas and provide better service coverage.",
      },
    ],
  },
  {
    title: "User Roles & Registration",
    faqs: [
      {
        question: "Who hires drivers and assistants?",
        answer:
          "Drivers and assistants are hired by Truck Owners. They use the Weyriaye app to update trip status, communicate with cargo owners, and coordinate with agents throughout the transport process.",
      },
      {
        question: "Can I register for multiple roles?",
        answer:
          "Yes, you can register for multiple roles simultaneously. For example, you can be both a cargo owner and an agent, or a truck owner and a driver. Each role has its own dashboard and features within the app.",
      },
      {
        question: "What documents do I need to register?",
        answer:
          "Required documents vary by role: Cargo owners need business licenses and ID, truck owners need vehicle registration and insurance, drivers need valid licenses, and agents need business registration. All documents are verified for security.",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    faqs: [
      {
        question: "How is payment handled?",
        answer:
          "Payments are processed instantly after delivery confirmation. We use secure payment systems with escrow protection. Cargo owners pay upfront, funds are held securely, and released to truck owners upon successful delivery.",
      },
      {
        question: "How do agents earn commission?",
        answer:
          "Agents earn a commission for every cargo posted or truck registered through their referral. Commission rates are competitive and payments are processed monthly. Agents can track their earnings through the app dashboard.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No, Weyriaye believes in transparent pricing. All fees are clearly displayed before confirming any transaction. There are no hidden charges - what you see is what you pay.",
      },
    ],
  },
  {
    title: "Safety & Security",
    faqs: [
      {
        question: "Are cargo owners verified?",
        answer:
          "Yes, all cargo owners undergo comprehensive verification including identity checks, business license validation, and background screening. This ensures a safe and trustworthy platform for all users.",
      },
      {
        question: "What happens if there's a problem during transport?",
        answer:
          "We have 24/7 monitoring and customer support. In case of issues, our emergency response team can be contacted immediately. We also have dispute resolution processes and insurance coverage for additional protection.",
      },
      {
        question: "How is my data protected?",
        answer:
          "We use advanced encryption and security measures to protect all user data. Your personal information, payment details, and business data are stored securely and never shared without your consent.",
      },
    ],
  },
  {
    title: "Technical Support",
    faqs: [
      {
        question: "What if I forget my password?",
        answer:
          "You can reset your password using the 'Forgot Password' feature in the app. Enter your registered email or phone number, and we'll send you instructions to create a new password.",
      },
      {
        question: "Is the app available offline?",
        answer:
          "The app has limited offline functionality for areas with poor connectivity. You can view previously loaded information and some features work offline, but real-time tracking and payments require internet connection.",
      },
      {
        question: "Which devices are supported?",
        answer:
          "Weyriaye is available on both Android and iOS devices. The app is optimized for smartphones and tablets, ensuring a smooth experience across different screen sizes and device capabilities.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Find answers to common questions about Weyriaye's cargo transport platform, user roles, and services.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-card border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-8 text-pretty">
                  Can't find the answer you're looking for? Our support team is here to help you with any questions
                  about Weyriaye.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Live Chat Support
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Support
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>Available 24/7 in Amharic, Oromo, and English</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
