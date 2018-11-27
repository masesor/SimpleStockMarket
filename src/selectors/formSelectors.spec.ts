import { getIsNewTradeFormOpen } from "./formSelectors";

describe('getIsNewTradeFormOpen', () => {
    it('returns false when form is not open', () => {
      // Arrange
      const state = {
        isNewTradeFormOpen: false
      } as any;

      // Act
      const result = getIsNewTradeFormOpen(state);

      // Assert
      expect(result).toEqual(false);
    });

    it('returns true when form is open', () => {
        // Arrange
        const state = {
          isNewTradeFormOpen: true
        } as any;
  
        // Act
        const result = getIsNewTradeFormOpen(state);
  
        // Assert
        expect(result).toEqual(true);
      });
  });
  