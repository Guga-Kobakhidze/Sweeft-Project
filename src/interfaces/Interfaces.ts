export interface Resource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface UseRequestProps {
  url: string;
  method: string;
}

export interface User {
  id: number;
  first_name: string;
  email: string;
  avatar: string;
}

export interface UserFormProps {
  name: string;
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  username: React.RefObject<HTMLInputElement>;
  loading: any;
  handleSubmit: (e: React.FormEvent) => void;
}
