import { body, validationResult } from "express-validator";

async function getAllStudents(req, res) {
  res.status(200).json({
    message: 'Get students successfully',
    data: [
      {
        name: 'Nguyen Danh Dung',
        email: 'danh91982@gmail.com',
        age: 20
      }
      {
        name: 'Nguyen Danh Duc',
        email: 'danhduc91982@gmail.com',
        age: 20
      }
      {
        name: 'Nguyen Danh Dien',
        email: 'danhdien91982@gmail.com',
        age: 20
      }
    ]
  });
}

async function getStudentById(req, res) {}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {}

export default {
  getAllStudents,
  getStudentById,
  updateStudent,
  insertStudent,
};
