import React from 'react';
import renderer from 'react-test-renderer';

import synoptic-grid from '../src/synoptic-grid'

test('just a simple test', () => {

    const component = renderer.create(
        <synoptic-grid/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

