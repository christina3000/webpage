export default function PostCard({ title, date, tags, excerpt }) {
    return (
      <div className="bg-white shadow p-4 rounded space-y-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{date} | {tags.join(', ')}</p>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    );
  }