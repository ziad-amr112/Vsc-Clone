import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { filetree } from "./data/FileTree";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={filetree} />
          <OpenedFileBar />
        </div>
      </div>
    </div>
  );
}

export default App;
