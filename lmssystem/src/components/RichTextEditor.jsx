import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = ({ input, setInput }) => {
  // Initialize editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: input.description, // initial value
    onUpdate: ({ editor }) => {
      // When editor content changes, update parent state
      setInput({ ...input, description: editor.getHTML() });
    },
  });

  return (
    <div className="border rounded-md p-2">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
