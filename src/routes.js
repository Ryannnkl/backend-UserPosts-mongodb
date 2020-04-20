const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./Controllers/SessionController");
const PostController = require("./Controllers/PostController");
const ActionPostController = require("./Controllers/ActionPostController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/session", SessionController.store);
routes.get("/session", SessionController.show);
routes.get("/", SessionController.index);

routes.post("/post", upload.single("image_post"), PostController.store);
routes.get("/listposts", PostController.index);
routes.put("/like", ActionPostController.update);

module.exports = routes;
