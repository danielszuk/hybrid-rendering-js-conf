import fs from "fs";
import path from "path";

export const readFileAsString = (filePathRelative: string) => {
  const filePath = path.resolve(process.cwd(), filePathRelative);
  return fs.readFileSync(filePath, "utf-8");
};
