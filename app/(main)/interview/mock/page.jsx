import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";

export default function MockInterviewPage() {
  return (
    <div className="container mx-auto space-y-4 py-6">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/interview">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

        <div className="space-y-4  mt-5 text-xl text-muted-foreground mb-12 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              <span className="text-blue-500">Let's Start</span> the Interview!
            </h1>
            The Interview Would Prepare You For The Real Ones.
    </div>
      </div>

      <Quiz />
    </div>
  );
}
