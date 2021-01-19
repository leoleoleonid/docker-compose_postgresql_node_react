import TreeModel from "./TreeModel";

export interface TreeI {
    id: number,
    path: string,
    name: string
}

export interface ModelNodeI {
    path: string,
    name: string,
    model: TreeModel
}
