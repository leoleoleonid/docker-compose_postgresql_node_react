const express = require('express');
const TreeController = require('../controllers/treeController');

const router = express.Router();

router.get('/branch', TreeController.getTreeBranchByPath);
router.post('/', TreeController.createTree);
router.put('/:id', TreeController.updateTree);
router.delete('/:id', TreeController.deleteTree);
router.get('/:id', TreeController.getTreeItemById);
router.get('/', TreeController.getTree);

module.exports = router
