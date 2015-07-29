import React from "react/addons";
import { expect } from "chai";
import App from "../../app/components/App";
import { APP_NAME } from "../../app/constants/AppConstants";

const TestUtils = React.addons.TestUtils;

describe("App", function () {
    it("should display application name", function () {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(App));
        const component = shallowRenderer.getRenderOutput();

        const expectedChildren = React.DOM.h1(null, APP_NAME);
        const div = component.props.children.props.children;

        expect(component).to.be.ok;
        expect(div).to.deep.equal(expectedChildren);
    });
});
