const express = require("express");
const { post_data, get_data, delete_data, update_data } = require("./crud");

const router = express.Router();

router.post("/create",post_data);
router.get("/read",get_data);
router.delete("/delete/:id",delete_data)
router.put("/update/:id",update_data)

module.exports = router;