import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react";
import Car from "../Car/car";
import { HeaderContext } from '../contexts/headerContext';

const carsList = [{
  iD: 1,
  make: "Honda",
  model: "City",
  version: "2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO",
  image: "http://desafioonline.webmotors.com.br/content/img/01.jpg",
  km: 0,
  price: "59000,00",
  yearModel: 2018,
  yearFab: 2017,
  color: "Azul"
}];

it("Renders without crashing", () => {
  const div = document.createElement('root');
  ReactDOM.render(
    <HeaderContext.Provider value={{carsList}}>
      <Car />
    </HeaderContext.Provider>, div
  );
})

describe("<Car />", () => {
  beforeEach(() => {
    render(
      <HeaderContext.Provider value={{carsList}}>
        <Car />
      </HeaderContext.Provider>);
  });

  describe("when page is initialized", () => {
    it("then shows the card", () => {
      expect(screen.getByText(/Honda/i)).toBeTruthy();
    });
  });
});
