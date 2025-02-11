const Question = require("../models/question");

exports.getQuestions = async (req, res) => {
    try {
        const question = await Question.find();
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getQuestionCategory = async (req, res) => {
    try {
        const question = await Question.find({ category: req.params.category });
        if (!question) return res.status(404).json({ message: "question not found" });
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createQuestion = async (req, res) => {
    try {
        const { question, options, correctAnswer, category, difficulty } = req.body;
        const newQuestion = new Question({ question, options, correctAnswer, category, difficulty });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateQuestion = async (req, res) => {
    try {
        const updateQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateQuestion) return res.status(404).json({ message: "question not found" });
        res.status(200).json(updateQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        const deleteQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deleteQuestion) return res.status(404).json({ message: "question not found" });
        res.status(200).json({ message: "question deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
