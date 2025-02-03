import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFileBar = () => {
  const { openedFiles, clickedFile } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
      {clickedFile.fileContent}
    </div>
  );
};

export default OpenedFileBar;
