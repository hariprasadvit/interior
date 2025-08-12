interface Option {
  label: string;
  value: string;
}

interface OptionGridProps {
  title: string;
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
}

export function OptionGrid({ title, options, selected, onSelect }: OptionGridProps) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-brand-text text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`p-6 rounded-lg border-2 transition-all ${
              selected === option.value
                ? "border-brand-primary bg-brand-primary bg-opacity-10"
                : "border-gray-200 hover:border-brand-primary hover:bg-gray-50"
            }`}
          >
            <div className="text-lg font-semibold text-brand-text">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
