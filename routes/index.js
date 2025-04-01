var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController')

/* GET home page. */
router.get('/', employeeController.displaysEmployees);
router.get('/add', employeeController.renderAddEmployeeForm);
router.post('/add', employeeController.addEmployee);
router.get('/update/:id', employeeController.renderUpdateForm);
router.get('/delete/:id', employeeController.deleteEmployee);
module.exports = router;