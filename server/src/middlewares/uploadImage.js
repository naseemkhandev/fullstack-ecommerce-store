import multer from "multer";
import { v4 as uuid } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = uuid() + path.extname(file.originalname);
    return cb(null, fileName);
  },
});

const uploadImage = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
});

export default uploadImage;
