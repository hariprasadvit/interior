interface ProgressStepsProps {
  steps: string[];
  current: number;
}

export function ProgressSteps({ steps, current }: ProgressStepsProps) {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === current;
            const isCompleted = stepNumber < current;
            
            return (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                        : isCompleted
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                        : "bg-gray-200 text-brand-muted"
                    }`}
                  >
                    {isCompleted ? "✓" : stepNumber}
                  </div>
                  <span className={`mt-2 text-sm ${isActive ? "text-brand-primary font-semibold" : "text-brand-muted"}`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${isCompleted ? "bg-green-500" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
