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
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Discover insightful articles curated just for you.
        </p>
      </header>

      {/* Articles Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {articles.map((article, index) => (
          <div
            key={index}
            className=" p-6 border border-green-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-gray-700 text-sm mt-2">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewerPanel;
