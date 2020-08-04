declare module 'react-docgen' {
  export type ValueArray = Value[];
  export type ValueType = Props | Prop | ValueArray;

  export interface ComponentInfo {
    displayName: string;
    props: Props;
    methods: Method[];
  }

  export interface Props {
    [key: string]: Prop;
  }

  export interface Prop {
    name: string;
    required: boolean;
    type: Type;
    description: string;
    value: ValueType;
  }

  export interface Value {
    value: number | string | Props;
    computed: boolean;
    name: string;
  }

  export interface Type {
    name: string;
    value: ValueType;
  }

  export interface Method {
    params: Param[];
    returns: Returns;
    name: string;
  }

  export interface Param {
    type: Type;
    name: string;
  }

  export interface Returns {
    type: Type;
  }

  export function parse(content: string): ComponentInfo;
}
