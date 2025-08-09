"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              <div className="text-5xl md:text-7xl font-bolder text-foreground">Inter<span className="text-blue-500">Pal</span></div> Is Your Own Career Guide
              <br />
              From Preparation To Success
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your One Stop destination for covering interview preparation, AI based
              personalized guidance and tools for maximum results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 text-white bg-blue-500">
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/Vanshbhattok">
              <Button size="lg" className="px-8" variant="outline">
                Creator's Github
              </Button>
            </Link>
          </div>

 <div className="hero-image-wrapper md:mt-0">
  <div className="mt-12">
    {/* Matching the lower part */}
    <div className="relative mx-auto w-full max-w-[1020px] aspect-[1020/490] overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="relative h-full w-full rounded-xl bg-gray-950 backdrop-blur-3xl">
        <Image
          src="/banner.png"
          alt="InterPal's Banner"
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;