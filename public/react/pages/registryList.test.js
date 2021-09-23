import React from 'react';
import renderer from 'react-test-renderer';
import { RegistryList } from './registryList';
import { MemoryRouter } from 'react-router-dom';
describe("Registry list component", () => {

//Behavior Test: Does our Component handle data passed in as props?

  test("Contains items passed down as props", () => {
    const registryData = [{"id": 1, "groomName": "John", "brideName": "Jane"}, {"id": 2, "groomName": "John", "brideName": "Jane"}];
    
    const component = renderer.create(<MemoryRouter><RegistryList registryData={registryData}/></MemoryRouter>);
    const treeEl = component.toTree()

    
    console.log("treeEl.props", treeEl.props.children.props);
    expect(treeEl.props.children.props.registryData.length).toBe(2)
  })

})