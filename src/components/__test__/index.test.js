import '@testing-library/jest-dom/extend-expect'
import App from '../../pages/home.js'
import ReactDOM from 'react-dom';

jest.mock("react-dom", () => ({ render: jest.fn() }))

test("Renders normally", () => {
  const element = document.createElement("div")
  element.id = "root"
  document.body.appendChild(element)

  require("../../index.js");
  expect(ReactDOM.render).toHaveBeenCalledWith(<App/>, element)
})