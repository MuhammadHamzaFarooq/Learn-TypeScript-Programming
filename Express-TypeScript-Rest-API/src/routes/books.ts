import express from 'express';
import controllers from '../controllers/books'

const router = express.Router();
router.get(`/getAllBooks`,controllers.getAllBooks);

export = router;