import { ChangeEvent, RefObject } from "react";

export interface IUploads02Props {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads02UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
