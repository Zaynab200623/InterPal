"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "@/components/ui/hero";
import { Card } from "@/components/ui/card";
import { features } from "@/data/features";
import { CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import { AccordionContent } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
   <HeroSection/>
   <section className="w-full py-12 md:py-24 lg:py-32 bg-backround">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">A Platform Rich In <span className="text-blue-500">Tools And Features</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-6 max-w-6xl mx-auto">{features.map((feature, index)=>{
        return(
          <Card key={index}
          className="border-2 hover:border-primary cursor-pointer transition-colors duration-300">
  
  <CardContent className="pt-6 text-center flex felx-col items-center">
    <div className="flex flex-col items-center justify-center">{feature.icon}
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  </CardContent>
</Card>
        )
        })}</div>
    </div>
   </section>

   <section className="w-full py-12 md:py-24 bg-muted/50">
    <div className="conatiner mx-auto px-4 md:px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-6 max-w-6xl mx-auto">

        <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold">100+</h3>
        <p className="text-muted-foreground">Students Reached</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold">1000+</h3>
        <p className="text-muted-foreground">Interview Questions</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold">50+</h3>
        <p className="text-muted-foreground">Industries Covered</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold">24/7</h3>
        <p className="text-muted-foreground">Support & Assistance</p>
        </div>

      </div>
    </div>
   </section>

   <section className="w-full py-12 md:py-24 lg:py-32 bg-backround">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
         <h2 className="text-3xl font-bold mb-4">Learn How Inter<span className="text-blue-500">Pal Works For You</span></h2>
      <p className="text-muted-foreground">
        Join Us In Shaping Your Professional Jouney.
      </p>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-6 max-w-6xl mx-auto">
        {howItWorks.map((item, index)=>{
        return(
          <div key={index}
          className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              {item.icon}
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
        )
        })}</div>
    </div>
   </section>

   <section className="w-full py-12 md:py-24 lg:py-32 bg-backround">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
         <h2 className="text-3xl font-bold mb-4">Some Frequently 
          <span className="text-blue-500">Asked Questions</span></h2>
      <p className="text-muted-foreground">
        Have Doubts? Don't Keep Them, Get Them Resolved
      </p>
      </div>
     
      <div className="max-w-6xl mx-auto bg-muted/50">
        <Accordion type="single" collapsible>
         {faqs.map((faq, index)=>{
       return(
         <AccordionItem key={index} value={`item-${index}`}>
  <AccordionTrigger>{faq.question}</AccordionTrigger>
  <AccordionContent>{faq.answer}</AccordionContent>
</AccordionItem>
       );
        })}
</Accordion>
       </div>
    </div>
   </section>

   <section className="w-full py-8 md:py-16 lg:py-24 bg-backround">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
         <h2 className="text-3xl font-bold mb-4">Are You Ready To <span className="text-blue-500">Begin This Journey?</span></h2>
      <p className="text-muted-foreground">
        Join Our Community of Students and Professionals getting Ready for Their
        First Internships, Job Offers or Career Transition with InterPal.
      </p>
      <Link href="/dashboard">
      <Button
      size="lg"
      variant="secondary"
      className="h-11 mt-5 text-bold animate-bounce bg-green-600">
        Let's Get Started <ArrowRight className="ml-2 h-4 w-4"/>
      </Button>
      </Link>
      </div>   
      
    </div>
   </section>

   

   
    </>
  );
}
