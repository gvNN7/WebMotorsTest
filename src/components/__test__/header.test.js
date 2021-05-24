import React from 'react'
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HeaderContext } from '../contexts/headerContext.js';
import { fireEvent, render, screen } from "@testing-library/react";
import App from '../../pages/home.js';
import Header from '../Header/header.js';

Enzyme.configure({ adapter: new Adapter() });

const makeList = [
  {
    iD: 1,
    name: "Chevrolet"
  }
];
const modelList = [
  {
    makeID: 3,
    iD: 7,
    name: "Ecosport"
  },
];
const versionList = [
  {
    modelId: 2,
    iD: 13,
    name: "2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO"
  },
];

it("Renders without crashing", () => {
  const div = document.createElement('root');
  ReactDOM.render(<App />, div)
})

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("when page is initialized", () => {
    it("then shows sell my car button", () => {
      expect(screen.getByText(/Vender meu carro/i)).toBeTruthy();
    });
  });
});

it('button click and clean the filters', () => {
  const { getByText } = render(<App/>)
  expect(getByText(/Limpar filtros/i).textContent).toBe("Limpar filtros")

  fireEvent.click(getByText("Limpar filtros"))
})

describe('<Header />', () => {
  it('renders <Header /> component', () => {

    const wrapper = shallow(
      <HeaderContext.Provider
        value={{
          makeList,
          modelList,
          versionList,
        }}>
        <Header/>
      </HeaderContext.Provider>);
     expect(wrapper.find('option')).toBeTruthy();
  });
});
