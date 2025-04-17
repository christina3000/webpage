export default function Works() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, clean portfolio site using React and Tailwind.",
      image: "/proxy-image.jpeg",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Design System",
      description: "Created a scalable UI component system.",
      image: "/proxy.jpeg",
      tags: ["Figma", "UI Design"],
    }
  ];

  return (
    <section className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Works</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white shadow rounded overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="mt-2 space-x-2 text-xs">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-200 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


