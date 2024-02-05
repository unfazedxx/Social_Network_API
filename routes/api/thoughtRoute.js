const router = require("express").Router();
const {
    getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction, 
} = require ("../../controllers/thoughtController");

// api/thoughts
router.route("/").get(getAllThought).post(createThought);

// api/thoughts based on id
router
.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/thoughtId based off reaction 
router.route("/:thoughtId/reactions").post(addReaction);

// api/thoughts/thoughtid/reaction based on reaction id 
router.route(":/thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router

