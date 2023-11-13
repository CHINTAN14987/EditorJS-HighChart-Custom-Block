import { useEffect, useRef } from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs";
import CustomBlock from "../../page-components/CustomBlock";
import { Box } from "@mui/material";

export default () => {
  interface EditorInstance {
    current: EditorJS | null;
  }

  const editorInstance: EditorInstance = useRef<EditorJS | null>(null);

  const initEditor = () => {
    const editorConfig: EditorConfig = {
      holder: "editorjs",
      placeholder: "Let`s write an awesome story!",
      tools: {
        header: Header,
        list: List,
        customBlock: {
          class: CustomBlock as any,
          inlineToolbar: true,
        },
      },
      onReady: () => {
        editorInstance.current = editor;
        console.log("Editor.js is ready to work!");
      },
      onChange: async () => {
        let content: OutputData = await editor.save();
        console.log(content);
      },
    };

    const editor: EditorJS = new EditorJS(editorConfig);
  };

  useEffect(() => {
    if (!editorInstance.current) {
      initEditor();
    }

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  return (
    <Box
      id="editorjs"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "70%",
        margin: "2rem 0 0 2rem",
      }}
    ></Box>
  );
};
