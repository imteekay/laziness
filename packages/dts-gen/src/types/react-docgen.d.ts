declare module 'react-docgen' {
  export function parse(content: string): ComponentInfo;

  export type ValueArray = Value[];
  export type ValueType = Props | Prop | ValueArray;

  export type ComponentInfo = {
    displayName: string;
    props: Props;
  };

  export type Props = {
    [key: string]: Prop;
  };

  export type Prop = {
    name: string;
    required: boolean;
    type: Type;
    description: string;
    value: ValueType;
  };

  export type Value = {
    value: number | string | Props;
    computed: boolean;
    name: string;
  };

  export type Type = {
    name: string;
    value: ValueType;
  };
}
