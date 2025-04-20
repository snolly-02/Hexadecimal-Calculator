test('adds A and 5 to get F', () => {
  render(<App />);
  fireEvent.click(screen.getByText('A'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('F')).toBeInTheDocument();
});
