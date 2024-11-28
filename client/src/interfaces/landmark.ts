export interface IAdminCenter {
  id: string;
  name: string;
  capital: string;
  area: string;
}

export interface ILandmarksByAdminCenter {
  adminCenter: IAdminCenter;
}
