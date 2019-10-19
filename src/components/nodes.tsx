import * as React from "react";
import * as d3 from "d3";
import * as d3Scale from 'd3-scale';
import * as d3ScaleChromatic from 'd3-scale-chromatic';
import { BehaviorGraphTypes } from "../types";

class Node extends React.Component<{ node: BehaviorGraphTypes.BehaviorGraphNode, color: string }, {}> {
  ref: SVGCircleElement;

  componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      <circle className="node" r={5} fill={this.props.color}
        ref={(ref: SVGCircleElement) => this.ref = ref}>
        <title>{this.props.node.id}</title>
      </circle>
    );
  }
}

export default class Nodes extends React.Component<{ nodes: BehaviorGraphTypes.BehaviorGraphNode[], simulation: any }, {}> {
  componentDidMount() {
    const simulation = this.props.simulation;
    d3.selectAll(".node")
      .call(d3.drag()
        .on("start", onDragStart)
        .on("drag", onDrag)
        .on("end", onDragEnd));

    function onDragStart(d: any) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function onDrag(d: any) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function onDragEnd(d: any) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }

  render() {
    const color = d3Scale.scaleOrdinal(d3ScaleChromatic.schemeCategory10);
    const nodes = this.props.nodes.map((node: BehaviorGraphTypes.BehaviorGraphNode, index: number) => {
      let count = node.triggeredProcesses ? node.triggeredProcesses.length : 0;
      return <Node key={index} node={node} color={color(count.toString())} />;
    });

    return (
      <g className="nodes">
        {nodes}
      </g>
    );
  }
}
