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
  tabIdToRemove:string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId:null,
    filename: "",
    fileContent: "",
  },
  tabIdToRemove:null,
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
     setTabIdToRemove : (state , action:PayloadAction<string | null> )=>{
      state.tabIdToRemove= action.payload;
   
    },
  },
});
export const {setOpenedFiles,setClickedFile,setTabIdToRemove}=fileTreeSlice.actions

export default fileTreeSlice.reducer;
