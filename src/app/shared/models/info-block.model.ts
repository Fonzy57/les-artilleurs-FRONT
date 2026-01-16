export interface InfoBlockBase {
  id: number;
  content: string;
}

export interface InfoBlockAdmin extends InfoBlockBase {
  slot: number | null;
  createdAt: string;
  updatedAt: string;
}

export type InfoBlockPublic = InfoBlockBase;
