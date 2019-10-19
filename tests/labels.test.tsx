import { shallow } from "enzyme";
import * as React from "react";
import { expect } from "chai";
import Labels from "../src/components/labels";
//import data from "../src/miserables";
import mbaData from "../src/mba_med";

describe("Labels", () => {
  it("renders the labels", () => {
    const wrapper = shallow(<Labels nodes={mbaData.nodes}/>);
    expect(wrapper.children().length).to.equal(data.nodes.length);
  });
});
