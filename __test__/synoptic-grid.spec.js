import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'

import synoptic-grid from '../src/synoptic-grid'

describe('synoptic-grid', function() {

    it('should render', function () {
        const renderer = new ReactShallowRenderer()

        renderer.render(<synoptic-grid/>)

        const result = renderer.getRenderOutput()

        expect(result.type).toBe('div')
        expect(result.props.children).toEqual('Hello World')
  });
});
