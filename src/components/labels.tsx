import * as React from "react";
import * as d3 from "d3";
import { BehaviorGraphTypes } from "../types";

class Label extends React.Component<{ node: BehaviorGraphTypes.BehaviorGraphNode }, {}> {
  ref: SVGTextElement;

  componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return <text className="label" ref={(ref: SVGTextElement) => this.ref = ref}>
      {this.props.node.id}
    </text>;
  }
}

export default class Labels extends React.Component<{ nodes: BehaviorGraphTypes.BehaviorGraphNode[] }, {}> {
  render() {
    const labels = this.props.nodes.map((node: BehaviorGraphTypes.BehaviorGraphNode, index: number) => {
      return <Label key={index} node={node} />;
    });

    return (
      <g className="labels">
        {labels}
      </g>
    );
  }
}
