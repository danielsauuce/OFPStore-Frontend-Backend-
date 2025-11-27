import HeaderContact from '../components/HeaderContact';
import ContactForm from '../components/ContactForm';
import ContactInfoCards from '../components/ContactInfoCard';
import MapSection from '../components/MapSection';

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <HeaderContact />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <ContactInfoCards />
        </div>

        <MapSection />
      </div>
    </div>
  );
}

export default Contact;
