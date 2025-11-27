import { values } from '../data/Value';

const ValuesSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg shadow-card hover:scale-[1.03] transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuesSection;
