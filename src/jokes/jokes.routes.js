import { Router } from "express";
import { addJoke, listJokes, getJoke, randomJoke } from "./jokes.controller.js";
const router = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       properties:
 *         id: { type: integer, example: 1 }
 *         question: { type: string, example: "Que dit un oignon quand il se cogne ?" }
 *         answer: { type: string, example: "Aïe" }
 *         createdAt: { type: string, format: date-time }
 *         updatedAt: { type: string, format: date-time }
 *     NewJoke:
 *       type: object
 *       required: [question, answer]
 *       properties:
 *         question: { type: string }
 *         answer: { type: string }
 */

/**
 * @openapi
 * /api/v1/jokes:
 *   get:
 *     summary: Get all jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: List of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *   post:
 *     summary: Add a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewJoke'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       400:
 *         description: Bad request
 */

/**
 * @openapi
 * /api/v1/jokes/random:
 *   get:
 *     summary: Get a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Random joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: No jokes found
 */

/**
 * @openapi
 * /api/v1/jokes/{id}:
 *   get:
 *     summary: Get a joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         example: 1
 *     responses:
 *       200:
 *         description: Joke found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Not found
 */

router.get("/", listJokes);
router.post("/", addJoke);
router.get("/random", randomJoke);
router.get("/:id", getJoke);

export default router;
