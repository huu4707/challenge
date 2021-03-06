const multer = require("multer");
const config = require('../config')
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, config.disk);
//     },
//     filename: (req, file, cb) => {
//         const fileExtension = file.originalname.substring(file.originalname.lastIndexOf(".") + 1);
//         const randomNumber = Math.floor(Math.random()*1000);
//         cb(null, `${Date.now()}${randomNumber}.${fileExtension}`);
//     }
// });

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png")
        return cb(new Error("Định dạng file không hợp lệ"));
    cb(null, true);
}

// const upload = multer({ storage, fileFilter, limits: { fileSize: 10240000 } });
const upload = multer({
    storage,
    fileFilter
});

module.exports = {
    upload
};