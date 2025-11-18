import SectionHeader from "./SectionHeader";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4 text-secondary"
    >
      <form
        method="POST"
        action="https://getform.io/f/cc3c25e6-2c94-4260-a6a4-a0a9ae782a53"
        className="flex flex-col max-w-[600px] w-full"
      >
        <SectionHeader
          title="Contact"
          description="Please fill out the form below."
        />
        <input
          className="bg-primary text-secondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 border border-gray-700 hover:border-accent"
          type="text"
          placeholder="Name"
          name="name"
          required="required"
        />
        <input
          className="my-4 p-2 bg-primary text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 border border-gray-700 hover:border-accent"
          type="email"
          placeholder="Email"
          name="email"
          required="required"
        />
        <textarea
          className="bg-primary text-secondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 border border-gray-700 hover:border-accent resize-none"
          name="message"
          rows="10"
          placeholder="Message"
          required="required"
        ></textarea>
        <button className="text-white group border-2 px-8 py-4 mt-4 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent/50 hover:scale-105">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default Contact;
