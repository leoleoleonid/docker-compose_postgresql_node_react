import {TreeI} from './interfaces'

export default class TreeModel {
    private _data: TreeI[];

    constructor(data: TreeI[]) {
        this._data = data;
    }

    getChildren(path?: string | undefined) {
        if (path) {
            const children = [];
            for (const node of this._data) {
                if (node.path.includes(path) && node.path.length - path.length === 2) {
                    children.push(node)
                }
            }

            return children;
        }

        let firstLevelChildren = [];
        for (const node of this._data) {
            if (node.path.indexOf('.') === -1) {
                firstLevelChildren.push(node)
            }
        }

        return firstLevelChildren
    }

}
