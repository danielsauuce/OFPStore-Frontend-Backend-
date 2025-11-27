import { Link } from 'react-router-dom';

const TeamCTA = () => {
  return (
    <div className="bg-muted/30 rounded-xl p-12 text-center">
      <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Team</h2>

      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Our passionate designers, craftsmen, and support team work together to bring you the finest
        furniture & premium shopping experience.
      </p>

      <div className="flex justify-center gap-4">
        <Link to="/shop">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors">
            Browse Collection
          </button>
        </Link>

        <Link to="/contact">
          <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCTA;
