export default function Contact() {
    return (
      <section className="p-6 max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    );
  }