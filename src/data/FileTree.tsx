import { v4 as uuid } from "uuid";
import { IFile } from "../interface";

export const filetree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [{ id: uuid(), name: "react.tsx", isFolder: false }],
        },
      ],
    },
    {
      id: uuid(),
      name: "Public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `export interface FileSystem{ 
      name: number;
      isFolder: boolean;
      childern?: FileSystem[];
      content?: string | undefined;}`,
            },
          ],
        },
      ],
    },
  ],
};
