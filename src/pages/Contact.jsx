// export default function Contact() {
//     return (
//       <section className="p-6 max-w-xl mx-auto space-y-6">
//         <h1 className="text-2xl font-bold">Contact Me</h1>
//         <form className="space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
//           <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
//           <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" />
//           <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
//         </form>
//       </section>
//     );
//   }

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      alert('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      alert(err.message || 'Server error. Please try again later.');
    }
  };

  return (
    <section className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}

