declare module '@toast-ui/react-editor' {
    import { Component } from 'react';
  
    export interface EditorInstance {
      getHTML: () => string;
      // 필요한 메서드를 추가할 수 있습니다.
    }
  
    export class Editor extends Component<any> {
      getInstance: () => EditorInstance;
    }
  
    export default Editor;
  }
  