import React from 'react';
import renderer from 'react-test-renderer';
import { RegistryList } from './registryList';
import { MemoryRouter } from 'react-router-dom';
describe("Registry list component", () => {

  //Snapshot test: Does our Component render as expected?

//   test("renders Item Container component as expected", () => {
//     const sauces = ['sriracha', 'franks'];


//     const component = renderer.create(<ItemContainer items={sauces} />)

//     const snapshot = component.toJSON();

//     console.log("What does our snapshot look like?  ", snapshot)

//     expect(snapshot).toMatchSnapshot();
//   })

//   //Behavior Test: Does our Component handle data passed in as props?

  test("Contains items passed down as props", () => {
    const registryData = [{"id": 1, "groomName": "John", "brideName": "Jane"}, {"id": 2, "groomName": "John", "brideName": "Jane"}];
    
    const component = renderer.create(<MemoryRouter><RegistryList registryData={registryData}/></MemoryRouter>);
    const treeEl = component.toTree()

    
    console.log("treeEl.props", treeEl.props.children.props);
    expect(treeEl.props.children.props.registryData.length).toBe(2)
  })

//   test('Invokes addItem function when clicked', () => {
//     const sauces = ['sriracha'];
//     const stub = () => 'clicked!!!';

//     //Mock item
//     const component = renderer.create(<ItemContainer items={sauces} addItem={stub}/>)

//     //Let's unspool the tree
//     const treeEl = component.toTree()

//     //console.log("What does our tree look like?", treeEl);

//     expect(treeEl.props.addItem()).toBe('clicked!!!');
//   })

})