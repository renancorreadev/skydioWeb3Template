/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from "@jest/globals";
import { renderHook, act } from "@testing-library/react-hooks/dom";
import { usePublicCall_Test } from "./usePublicCalls_test_";

describe("should contract name is correct", () => {
  test("should contract name", async () => {
    const { result } = renderHook(() => usePublicCall_Test());
    act(() => {
      result.current.update();
    });
    expect(result.current.contractName).toBe(undefined);
  });
});
