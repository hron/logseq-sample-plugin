import { expect } from "@playwright/test";
import { test } from "./fixtures";

test("window should not be maximized on first launch", async ({
  page,
  app,
}) => {
  await expect(
    page.locator(".window-controls .maximize-toggle.maximize")
  ).toHaveCount(1);
});
