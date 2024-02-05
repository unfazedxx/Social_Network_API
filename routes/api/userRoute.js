const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");



// api/users
router.route("/").get(getAllUser).post(createUser);

// api/users/ based on Id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// api/users/:userId/friends/ based on friend Id 
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);



module.exports = router;

