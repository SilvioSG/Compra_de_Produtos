import multer from "multer";
import { resolve } from "path";

export const storage = multer.diskStorage({
  destination: resolve(__dirname, "..", "..", "folder"),
  filename: (req, file, callback) => {
    const time = new Date().getTime();

    callback(null, `${time}_${file.originalname}`);
  },
});
