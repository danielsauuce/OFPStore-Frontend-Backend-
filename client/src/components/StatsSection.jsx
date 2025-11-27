const stats = [
  { value: '28+', label: 'Years in Business' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '200+', label: 'Furniture Pieces' },
  { value: '50+', label: 'Expert Craftsmen' },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-5xl font-bold mb-2">{item.value}</p>
              <p className="text-sm opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
