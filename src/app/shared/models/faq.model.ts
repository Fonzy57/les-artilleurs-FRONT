export interface FaqBase {
  id: number;
  answer: string;
  question: string;
}

export interface FaqAdmin extends FaqBase {
  createdAt: string;
  updatedAt: string;
}

export type FaqPublic = FaqBase;
