interface FeatureItem {
  title: string;
  desc: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-brand-text mb-4">{item.title}</h3>
              <p className="text-brand-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
