import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {setClickedFile } from "../app/features/fileTree.Slice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch =useDispatch();
  const {clickedFile} = useSelector((state:RootState)=>state.tree)


  //* Handlers
  const onClick = () =>{
    const {id,name,content}=file;
    dispatch(setClickedFile({filename:name,fileContent:content,activeTabId:id}))

  }
  return (
    <div className={`flex items-center p-2 border-t ${file.id === clickedFile.activeTabId ? "border-[#cf6ccf]" : "border-transparent"}`} onClick={onClick}>
        <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">{file.name}</span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"><CloseIcon/></span>
    </div>
  );
};

export default OpenedFilesBarTab;
