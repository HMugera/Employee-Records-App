import React from "react";

import { render, fireEvent, waitFor } from "@testing-library/react";
// import  userEvent from "@testing-library/user-event";

import Mine from "./mine";




// test for rendering a React component to the DOM
test("render the correct content", () => {
  const { getByText, getByLabelText } = render(<Mine></Mine>);

  getByText("TODO");
  getByLabelText("What needs to be done");
  getByText("Add #1");
});

test("allows user to add items to thei list", () => {
  const { getByText, getByLabelText } = render(<Mine></Mine>);

  const input = getByLabelText("What needs to be done");
  fireEvent.change(input, { target: { value: "Mugera" } });
  fireEvent.click(getByText("Add #1"));

  getByText("Mugera");
  getByText("Add #2");
});



//SIMULATING AN API CALL
// // import {api} from "./api"
// const mockCreateItem = (api.createItem = jest.fn())

// test("allows user to add items to thei list", async () => {

//     const todoText = "Mugera"
//     mockCreateItem.mockResolvedValueOnce({id:23,text:todoText})
//   const { getByText, getByLabelText } = render(<Mine></Mine>);

//   const input = getByLabelText("What needs to be done");
//   fireEvent.change(input, { target: { value: todoText } });
//   fireEvent.click(getByText("Add #1"));

//expect(mockCreateItem).toHaveBeenCalledTimes(1)
//expect(mockCreateItem).toHaveBeenCalledWith("./items",
//expect.objectContaining({text:todoText}))

// await waitFor(() => getByText(todoText))

// });
