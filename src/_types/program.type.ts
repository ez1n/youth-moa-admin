export interface ProgramInfoResponse {
  programId: number;
  programImageFileId: number;
  status: string;
  title: string;
  description: string | null;
  detailContent: string | null;
  applyStartAt: string; // date
  applyEndAt: string; // date
  programStartAt: string; // date
  programEndAt: string; // date
  location: string | null;
  currentApplierCount: number;
  maxApplierCount: number;
  contactNumber: string | null;
  attachmentFileIds: number[];
  createdAt: string; // date
  updatedAt: string; // date
}

export interface ProgramFilterDetailType {
  id: number;
  name: string;
}

export interface SelectedProgramFilterType {
  regions: string[];
  centers: string[];
}

export type ProgramFilterNameType = "regions" | "centers";

export interface ProgramModalDataType {
  isShow: boolean;
  type: ProgramFilterNameType | "";
  list: ProgramFilterDetailType[];
}
