import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

import ButtonCustom from '.';

describe('ButtonCustom', () => {
  it('render component Button', () => {
    render(<ButtonCustom>Change name</ButtonCustom>);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<ButtonCustom>Change name</ButtonCustom>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text name button', () => {
    render(<ButtonCustom>Change name</ButtonCustom>);
    expect(screen.getByText(/Change name/)).toBeInTheDocument();
  });

  it('render multiply component', () => {
    render(
      <>
        <ButtonCustom>Edet</ButtonCustom>
        <ButtonCustom>Delete</ButtonCustom>
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disable', () => {
    render(<ButtonCustom disabled>Delete</ButtonCustom>);
    expect(screen.getByText(/Delete/)).toBeDisabled();
  });

  it('button have style color green', () => {
    render(<ButtonCustom>Delete</ButtonCustom>);
    expect(screen.getByText(/Delete/)).toHaveStyle({ color: 'green' });
  });

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();

    render(<ButtonCustom click={mockHandler}>Delete</ButtonCustom>);
    await userEvent.click(screen.getByText(/Delete/));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
