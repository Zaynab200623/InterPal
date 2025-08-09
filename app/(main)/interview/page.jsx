import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div>
      <div className="space-y-4  mb-12 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              <div className="text-5xl md:text-7xl font-bolder text-foreground">Inter<span className="text-blue-500">Pal's</span></div> Mock Interview Preps!
             
            </h1>
    </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}


