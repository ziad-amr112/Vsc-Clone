import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
        width:"100%",
        backgroundColor:"transparent",
        maxHeight:"100vh",
        overflow:"auto",
        fontSize:"1.5rem",
    }} showLineNumbers>
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
