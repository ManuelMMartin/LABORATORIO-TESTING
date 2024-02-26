import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  const mockProps = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'Confirmation Dialog',
    labels: {
      closeButton: 'Close',
      acceptButton: 'Accept',
    },
    children: <div>Dialog content</div>,
  };

  it('renders with correct title and buttons', () => {
    render(<ConfirmationDialogComponent {...mockProps} />);


    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.labels.closeButton)).toBeInTheDocument();
    expect(screen.getByText(mockProps.labels.acceptButton)).toBeInTheDocument();
  });

  it('calls onAccept and onClose when clicking the accept button', () => {
    render(<ConfirmationDialogComponent {...mockProps} />);
    const acceptButton = screen.getByText(mockProps.labels.acceptButton);

    fireEvent.click(acceptButton);

    expect(mockProps.onAccept).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the close button', () => {
    render(<ConfirmationDialogComponent {...mockProps} />);
    const closeButton = screen.getByText(mockProps.labels.closeButton);
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render the dialog when isOpen is false', () => {
    const { queryByText } = render(
      <ConfirmationDialogComponent {...mockProps} isOpen={false} />
    );

    expect(queryByText(mockProps.title)).toBeNull();
    expect(queryByText(mockProps.labels.closeButton)).toBeNull();
    expect(queryByText(mockProps.labels.acceptButton)).toBeNull();
  });
});
