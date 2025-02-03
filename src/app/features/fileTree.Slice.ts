import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interface";

interface IClickedFile {
  activeTabId:string | null;
  filename: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId:null,
    filename: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile : (state , action:PayloadAction<IClickedFile> )=>{
      state.clickedFile= action.payload;
   
    },
  },
});
export const {setOpenedFiles,setClickedFile}=fileTreeSlice.actions

export default fileTreeSlice.reducer;
