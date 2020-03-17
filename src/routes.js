const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./Controllers/SessionController");
const PostController = require("./Controllers/PostController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/session", SessionController.store);
routes.get("/", SessionController.index);
routes.post("/post", upload.single("image_post"), PostController.store);

module.exports = routes;
