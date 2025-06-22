export interface Document {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "image" | "audio" | "video";
  storageLocation: string;
  date: string;
  author: string;
  keywords: string[];
  institution: string;
  accessLevel: "public" | "restricted";
  fileUrl: string;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Museum {
  id: string;
  name: string;
  description: string;
  location: string;
  contact: string;
  documentCount: number;
}
