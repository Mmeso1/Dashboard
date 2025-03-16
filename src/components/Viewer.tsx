import { useState } from "react";

const ViewerPanel = () => {
  // Dummy content
  const [articles] = useState([
    {
      title: "Exploring Next.js",
      content: "Next.js is a powerful React framework...",
    },
    {
      title: "UI/UX Principles",
      content: "A great user experience starts with simplicity...",
    },
    {
      title: "Mastering Tailwind",
      content: "Tailwind CSS makes styling seamless and fast...",
    },
  ]);

  return (
    <div className="flex flex-col items-center h-[80vh] p-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-2">
        Viewer Dashboard
      </h2>

      {/* Articles Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {article.title}
            </h3>
            <p className="text-gray-300 text-sm">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewerPanel;
