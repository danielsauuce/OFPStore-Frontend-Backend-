import { aboutImage } from '../data/Value';

const IntroSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="space-y-6">
        <h2 className="text-3xl font-serif font-bold">A Legacy of Excellence</h2>

        <p className="text-muted-foreground">
          Olayinka Furniture Palace was founded in 1995 with a simple mission: to create beautiful,
          durable furniture that stands the test of time...
        </p>

        <p className="text-muted-foreground">
          Our founder, Chief Olayinka, believed that furniture should be more than functional...
        </p>

        <p className="text-muted-foreground">
          Every piece we create combines craftsmanship, modern design, and premium materials...
        </p>
      </div>

      <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
        <img src={aboutImage} alt="Furniture workshop" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default IntroSection;
