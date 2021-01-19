const treeModel = require('../models/treeModel');

createTree = async (req, res) => {
  const {path, name} = req.body;

  if (!path || !name) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a tree data',
    })
  }

  try {
    await treeModel.create(path, name);
    return res.status(400).json({ success: true, message: 'add new node' });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

updateTree = async (req, res) => {
  const {path, name} = req.body;
  const id = req.params.id;

  if (!path || !id || !name) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  try {
    const appliedId = await treeModel.update(id, path, name);

    if (!appliedId) {
      return res.status(404).json({
        success: false,
        message: 'Tree not updated!',
      })
    }

    return res.status(404).json({
      success: true,
      message: 'Tree updated!',
    })
  } catch (err) {
    return res.status(400).json({ success: false, error: err })
  }
}

deleteTree = async (req, res) => {
  try{
    const node = await treeModel.findOneAndDelete( req.params.id );
    if (!node) {
      return res
        .status(404)
        .json({ success: false, error: `node not found` })
    }
    return res.status(200).json({ success: true, data: node })

  } catch(err ) {
    return res.status(400).json({ success: false, error: err })
  }
}

getTreeItemById = async (req, res) => {
  try{
    const node = await treeModel.findOne( req.params.id );
    if (!node) {
      return res
        .status(404)
        .json({ success: false, error: `node not found` })
    }
    return res.status(200).json({ success: true, data: node })

  } catch(err ) {
    return res.status(400).json({ success: false, error: err })
  }
}

getTree = async (req, res) => {
  try{
    const tree = await treeModel.find();

    if (!tree.length) {
      return res
        .status(404)
        .json({ success: false, error: `tree not found` })
    }

    return res.status(200).json({ success: true, data: tree })
  } catch(err ) {
    return res.status(400).json({ success: false, error: err })
  }
}

module.exports = {
  createTree,
  updateTree,
  deleteTree,
  getTreeItemById,
  getTree,
}
