interface MaterialField {
  name: string;
  label: string;
  options: string[];
}

interface MaterialPickerProps {
  title: string;
  fields: MaterialField[];
  selections: Record<string, string>;
  onSelectionChange: (field: string, value: string) => void;
}

export function MaterialPicker({ title, fields, selections, onSelectionChange }: MaterialPickerProps) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-brand-text mb-6">{title}</h2>
      <div className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-brand-text mb-3">
              {field.label}
            </label>
            <div className="space-y-2">
              {field.options.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelectionChange(field.name, option)}
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    selections[field.name] === option
                      ? "border-brand-primary bg-brand-primary bg-opacity-10 text-brand-primary"
                      : "border-gray-200 hover:border-brand-primary hover:bg-gray-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
