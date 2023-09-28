import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"

const testValue = "test";

test("email input should be rendered", () => {
    render(<Login />)
    const emailInput = screen.getByPlaceholderText(/email address/i);
    expect(emailInput).toBeInTheDocument()
})
test("password input should be rendered", () => {
    render(<Login />)
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument()
})
test("button input should be rendered", () => {
    render(<Login />)
    const buttonInput = screen.getByRole("button");
    expect(buttonInput).toBeInTheDocument()
})

test("email input should be empty", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/email address/i);
    expect(emailInput.value).toBe("");
});
  
test("password input should be empty", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput.value).toBe("");
});

test("email input should change", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/email address/i);
  
    fireEvent.change(emailInput, { target: { value: testValue } });
    expect(emailInput.value).toBe(testValue);
});
  
test("password input should change", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(passwordInput, { target: { value: testValue } });
    expect(passwordInput.value).toBe(testValue);
});

test("error alert should be rendered after invalid login", async () => {
    render(<Login />);
    const buttonInput = screen.getByRole("button");
    const emailInput = screen.getByPlaceholderText(/email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    
    fireEvent.change(emailInput, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    fireEvent.click(buttonInput);
  
    const errorAlert = await screen.findByText("Error");
    expect(errorAlert).toBeInTheDocument();
});

test("success alert should be rendered after valid login", async () => {
    render(<Login />);
    const buttonInput = screen.getByRole("button");
    const emailInput = screen.getByPlaceholderText(/email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    
    fireEvent.change(emailInput, { target: { value: "john" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.click(buttonInput);
  
    const successAlert = await screen.findByText("Success!");
    expect(successAlert).toBeInTheDocument();
});

