import OpenedFileBar from "./OpenedFileBar";
import FileSyntaxHilghlighter from "./FileSyntaxHilghlighter";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Preview = () => {
    const { clickedFile:{fileContent} } = useSelector(
        (state: RootState) => state.tree
      );
    
  return (
    <>
      <OpenedFileBar />
      <FileSyntaxHilghlighter content={fileContent} />
    </>
  );
};

export default Preview;
