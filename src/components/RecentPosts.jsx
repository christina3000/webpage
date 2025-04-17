import PostCard from './PostCard';

export default function RecentPosts() {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      tags: ["Design", "Pattern"],
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      tags: ["Figma", "Icon Design"],
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
    }
  ];

  return (
    <section className="p-6 bg-gray-50">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Recent posts</h2>
        <a href="#" className="text-blue-500 text-sm">View all</a>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
}