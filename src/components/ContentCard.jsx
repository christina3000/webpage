export default function ContentCard({ title, date, tags, image, badge, description }) {
    return (
      <div className="flex flex-col md:flex-row gap-4 bg-transparent">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full md:w-60 h-36 object-cover rounded"
          />
        )}
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-600">
            {date} {tags && '|'} <span className="text-blue-600 underline">{tags?.join(', ')}</span>
          </p>
          {badge && (
            <span className="inline-block text-xs bg-black text-white px-2 py-1 rounded mr-2">{badge}</span>
          )}
          <p className="text-sm text-gray-700 mt-1">{description}</p>
        </div>
      </div>
    );
  }
 
  
  
  
  
  
  
  
  