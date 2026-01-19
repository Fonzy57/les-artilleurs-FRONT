export interface ClubInfoBase {
  /** Always 1 on backend (singleton) */
  id: number;
  clubName: string;
  stadiumName: string;
  street: string;
  city: string;
  postalCode: string;
  contactEmail: string;
}

export interface ClubInfoAdmin extends ClubInfoBase {
  createdAt: string;
  updatedAt: string;
}

export type ClubInfoPublic = ClubInfoBase;

export type ClubInfoUpsertPayload = {
  clubName: string;
  stadiumName: string;
  street: string;
  city: string;
  postalCode: string;
  contactEmail: string;
};
