import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup } from 'common/models';

describe('useConfirmationDialog', () => {
  it('should initialize isOpen as false', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    expect(result.current.isOpen).toBe(false);
  });

  it('should open the confirmation dialog when calling onOpenDialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(createEmptyLookup());
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('should close the confirmation dialog when calling onClose', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(createEmptyLookup());
    });
    expect(result.current.isOpen).toBe(true);
    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should reset the itemToDelete when calling onAccept', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const initialItem = result.current.itemToDelete;
    act(() => {
      result.current.onAccept();
    });
    expect(result.current.itemToDelete).not.toBe(initialItem);
  });
});
