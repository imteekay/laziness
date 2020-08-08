const customTemplate1 = `type Profile = {
  username: string;
  email: string;
  active: boolean;
  dispatch: () => void;
};`;

const customTemplate2 = `type User = {
  name?: string;
  age?: number;
};`;

export const customTypeTemplates = [customTemplate1, customTemplate2];

export const componentTemplate = `type Sample = {
  any?: any;
  isVisible: boolean;
  index?: number;
  string?: string;
  object?: object;
  element?: React.ReactElement<any>;
  children?: React.ReactNode;
  products?: any[];
  messages?: string[];
  onChange: () => void;
  status?: 'active' | 'inactive' | 'blocked';
  profile?: Profile;
  nameOrAge?: string | number;
  user: User;
};`;

export const expectedJoinedTemplates = `type Profile = {
  username: string;
  email: string;
  active: boolean;
  dispatch: () => void;
};

type User = {
  name?: string;
  age?: number;
};

type Sample = {
  any?: any;
  isVisible: boolean;
  index?: number;
  string?: string;
  object?: object;
  element?: React.ReactElement<any>;
  children?: React.ReactNode;
  products?: any[];
  messages?: string[];
  onChange: () => void;
  status?: 'active' | 'inactive' | 'blocked';
  profile?: Profile;
  nameOrAge?: string | number;
  user: User;
};`;
