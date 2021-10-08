export interface Action {
  email: boolean;
  share: boolean;
  edit: boolean;
  delete: boolean;
}

export interface Domain {
  id: number;
  date: string;
  listName: string;
  entries: number;
  action: Action;
  details: Array<string>;
}
