type ASTNode = Object;

declare module 'react-docgen' {
  export type Parser = {
    parse: (src: string) => ASTNode;
  };

  export type Resolver = (
    node: ASTNode,
    parser: Parser
  ) => NodePath | Array<NodePath>;

  export function parse(src: string, resolver: Resolver): any;

  export type resolver = {
    findAllComponentDefinitions: (ast: ASTNode) => Array<NodePath>;
    findExportedComponentDefinition: (ast: ASTNode) => Array<NodePath>;
    findAllExportedComponentDefinitions: (ast: ASTNode) => Array<NodePath>;
  };
}

declare class NodePath {
  value: ASTNode | Array<ASTNode>;
  node: ASTNode;
  parent: NodePath;
  parentPath: NodePath;
  scope: Scope;

  get(...x: Array<string | number>): NodePath;
  each(f: (p: NodePath) => any): any;
  map<T>(f: (p: NodePath) => T): Array<T>;
  filter(f: (p: NodePath) => boolean): Array<NodePath>;
  push(node: ASTNode): void;
}

declare class Scope {
  lookup(name: string): Scope;
  lookupType(name: string): Scope;
  getBindings(): { [key: string]: Array<NodePath> };
  getTypes(): { [key: string]: Array<NodePath> };
  node: NodePath;
}
