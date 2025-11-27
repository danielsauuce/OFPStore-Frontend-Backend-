const ContactForm = () => (
  <div className="bg-card p-8 rounded-lg shadow-card">
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name *
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-semibold mb-1">
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message..."
          className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="button"
        className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-light transition-colors"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default ContactForm;
