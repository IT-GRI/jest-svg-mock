const {it, expect} = require('@jest/globals')

const svg= require('../fixtures/test.svg');


it('svg should match snapshot', () => {
    expect(svg).toMatchSnapshot();
});
