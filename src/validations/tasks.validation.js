import { body } from "express-validator";

// POST tasks
export const createTaskValidation = [
    body('title')
        .isString().withMessage('El titulo debe ser un string')
        .notEmpty().withMessage('El titulo no debe estar vacio')
        .isLength({
            min: 5,
            max: 255
        }).withMessage('El titulo debe tener entre 5 y 255 caracteres'),
    body('description')
        .isString().withMessage('La descripcion debe ser un string'),
    body('isComplete')
        .notEmpty().withMessage('El campo no debe estar vacio')
        .isBoolean().withMessage('El campo isComplete debe ser un booleano')
];

// PUT tasks
export const updateTaskByIdValidation = [
    body('title')
        .isString().withMessage('El titulo debe ser un string')
        .notEmpty().withMessage('El titulo no debe estar vacio')
        .isLength({
            min: 5,
            max: 255
        }).withMessage('El titulo debe tener entre 5 y 255 caracteres'),
    body('description')
        .isString().withMessage('La descripcion debe ser un string'),
    body('isComplete')
        .notEmpty().withMessage('El campo no debe estar vacio')
        .isBoolean().withMessage('El campo isComplete debe ser un booleano')
];