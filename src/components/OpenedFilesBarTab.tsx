import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFile,
  setOpenedFiles,
  setTabIdToRemove,
} from "../app/features/fileTree.Slice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { clickedFile, openedFiles } = useSelector(
    (state: RootState) => state.tree
  );

  //* Handlers
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ filename: name, fileContent: content, activeTabId: id })
    );
  };
  const onRemove = (SelectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== SelectedId);
    const lastTab = filtered[filtered.length - 1];

    if (!lastTab) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClickedFile({ activeTabId: null, fileContent: "", filename: "" })
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFiles(filtered));
    dispatch(
      setClickedFile({ activeTabId: id, fileContent: content, filename: name })
    );
  };
  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 ${
        file.id === clickedFile.activeTabId
          ? "border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemove(file.id));
      }}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
