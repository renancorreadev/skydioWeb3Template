import { expect } from "@jest/globals";
import useENSName from "./useENSName";
import { renderHook } from "@testing-library/react-hooks/dom/pure";

test("should ENS name is empty", () => {
  const { result } = renderHook(() =>
    useENSName("0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E")
  );
  expect(result.current).toBe("");
});
