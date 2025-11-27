import { contactInfo } from '../data/Contactinfo';

const ContactInfoCards = () => (
  <div className="space-y-6">
    {contactInfo.map((info, index) => {
      const Icon = info.icon;
      return (
        <div
          key={index}
          className="bg-card p-6 rounded-lg shadow-card flex items-start space-x-4 hover:scale-[1.03] transition-transform border border-primary/15"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{info.title}</h3>
            {info.link !== '#' ? (
              <a
                href={info.link}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {info.details}
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">{info.details}</p>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default ContactInfoCards;
