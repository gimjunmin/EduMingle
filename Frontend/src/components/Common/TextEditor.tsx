'use client';

import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '../../../node_modules/@toast-ui/editor/dist/toastui-editor';
import '../../../node_modules/@toast-ui/editor/dist/toastui-editor.css';

interface TextEditorProps {
  initialValue?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ initialValue }) => {
  const editorRef = useRef<Editor>(null);

  const handleSave = () => {
    const content = editorRef.current?.getInstance().getHTML();
    console.log(content);
  };

  return (
    <div className="text-editor">
      <Editor
        className=""
        ref={editorRef}
        initialValue={initialValue}
        previewStyle="vertical" // 미리보기 스타일 설정
        height="100vh" // 에디터 높이 설정
        initialEditType="wysiwyg" // 초기 편집 타입 설정
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote', 'ul', 'ol', 'task'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
          ['scrollSync'],
        
        ]}
      />
    </div>
  );
};

export default TextEditor;
