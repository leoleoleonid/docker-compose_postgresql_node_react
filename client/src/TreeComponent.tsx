import React, {useState} from "react"
import TreeModel from "./TreeModel";
import {TreeI, ModelNodeI} from "./interfaces";

const TreeComponent = (props: { data : TreeI[]}) => {
    const treeModel = new TreeModel(props.data);
    const firstLevelData = treeModel.getChildren(); // get first level nodes

    return (
        <div>
            {firstLevelData.map(node => {
                return (
                    <ul key={node.id}>
                        <Node
                            path={node.path}
                            name={node.name}
                            model={treeModel}
                        />
                    </ul>
                )
            })}
        </div>
    )
};

export default TreeComponent;

const Node = ({path, name, model}: ModelNodeI) => {
    const [isOpen, setOpen] = useState(false);
    const nodeChildren = model.getChildren(path);

    return (
        <li>
            <div onClick={(event: React.MouseEvent<HTMLElement>) => setOpen(!isOpen)}>{name}</div>
            {isOpen && nodeChildren.length > 0 && (
                nodeChildren.map(node => {
                    return (
                        <ul key={node.id}>
                            <Node
                                path={node.path}
                                name={node.name}
                                model={model}
                            />
                        </ul>
                    )
                })
            )}
        </li>
    )
};

