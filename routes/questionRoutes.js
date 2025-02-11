
const express= require("express");
const {
    getQuestions,
    getQuestionCategory,
    createQuestion,
    updateQuestion,
    deleteQuestion
}= require("../controllers/questionController");

const router= express.Router();

router.get("/",getQuestions);
router.get("/:category",getQuestionCategory);
router.post("/",createQuestion);
router.put("/:id",updateQuestion);
router.delete("/:id",deleteQuestion);

module.exports= router;
