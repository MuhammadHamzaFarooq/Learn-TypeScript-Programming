import express from 'express';
import controllers from '../controllers/sample'

const router = express.Router();
const baseURL = "sample"
router.get(`/ping`,controllers.sampleHealthCheck);

export = router;