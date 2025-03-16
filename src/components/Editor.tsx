import { useState } from "react";
import { Save, Trash, Plus } from "lucide-react";

const EditorPanel = () => {
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col items-center justify-center p-6 my-6 h-[80vh]">
      {/* Editor Card */}
      <div className="shadow-2xl rounded-xl p-6 max-w-2xl w-full border border-white/20">
        <h2 className="text-2xl font-semiboldtext-center mb-4">Editor Panel</h2>

        {/* Textarea */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here..."
          className="w-full h-40 p-4 bg-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition resize-none placeholder-gray-400"
        />

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition cursor-pointer">
            <Save size={18} /> Save
          </button>
          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer">
            <Trash size={18} /> Delete
          </button>
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-xl hover:bg-blue-600 transition">
        <Plus size={24} className="text-black" />
      </button>
    </div>
  );
};

export default EditorPanel;
