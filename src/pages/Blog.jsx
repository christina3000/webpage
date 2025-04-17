import PostCard from '../components/PostCard';

export default function Blog() {
  const posts = [
    {
      title: "Design system from scratch",
      date: "12 Feb 2020",
      tags: ["UI", "Design"],
      excerpt: "Learn how I structured and implemented a design system for client work."
    },
    {
      title: "Why Tailwind CSS is awesome",
      date: "25 Mar 2020",
      tags: ["CSS", "Frontend"],
      excerpt: "Tailwind CSS has become my go-to utility-first CSS framework. Here's why."
    }
  ];

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
}