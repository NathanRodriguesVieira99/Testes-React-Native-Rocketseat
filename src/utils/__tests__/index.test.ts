import { formatChange, formatPrice } from "..";

describe("Format Price and Format Change utils", () => {
  describe("formatPrice()", () => {
    it("should format a price to 2 decimal places", () => {
      expect(formatPrice(1000)).toBe("1,000.00");
    });

    it("should round up correctly", () => {
      expect(formatPrice(1000.999)).toBe("1,001.00");
    });

    it("should round down correctly", () => {
      expect(formatPrice(1000.911)).toBe("1,000.91");
    });

    it("should handle 0 correctly", () => {
      expect(formatPrice(0)).toBe("0.00");
    });

    it("should handle negative correctly", () => {
      expect(formatPrice(-100)).toBe("-100.00");
    });
  });

  describe("formatChange()", () => {
    it("should format change", () => {
      expect(formatChange(1000)).toBe("+1000.00%");
    });
  });
});
