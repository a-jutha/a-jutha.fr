import { SectionHeader, Button, Input } from "../ui";

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
          description="J'ai hâte de collaborer avec vous !"
        />
        <Input type="text" placeholder="Nom" name="name" required />
        <Input
          type="email"
          placeholder="Mail"
          name="email"
          required
          className="my-4"
        />
        <Input
          as="textarea"
          name="message"
          rows="10"
          placeholder="Message"
          required
          className="resize-none"
        />
        <Button
          variant="outline"
          className="mt-4 flex items-center justify-center text-lg"
        >
          ENVOYER
        </Button>
      </form>
    </div>
  );
}

export default Contact;
