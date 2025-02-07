import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { filetree } from "./data/FileTree";
import { RootState } from "./app/store";
import Welcometab from "./components/Welcometab";

function App() {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel
          rightPanel={openedFiles.length ? <Preview /> : <Welcometab />}
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={filetree} />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default App;
