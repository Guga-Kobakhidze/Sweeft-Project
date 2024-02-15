export interface UseItemListProps {
  apiEndpoint: string;
}

export interface Resource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface User {
  id: number;
  first_name: string;
  email: string;
  avatar: string;
}

export interface UseRequestProps {
  url: string;
  method: string;
}

export interface UserFormProps {
  name: string;
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  username: React.RefObject<HTMLInputElement>;
  loading: any;
  handleSubmit: (e: React.FormEvent) => void;
}

export interface ResourcesDetaiilsProps {
  resource: Resource;
  goBack: () => void;
}

export interface UserDetailsProps {
  user: User;
  goBack: () => void;
}

export interface AddNewItemsProps {
  close: () => void;
  itemAdd: (newItem: User) => void;
  item: string;
  itemTitle: string;
  itemStatus: string;
  itemColor: string;
}

export interface UseFetchResult {
  fetchRequest: any | null;
  error: Error | null;
  loading: boolean;
}

export interface UseRequestResult {
  loading: boolean;
  sendRequest: (body?: any, custom?: string) => Promise<any>;
}
