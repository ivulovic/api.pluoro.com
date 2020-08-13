const DirectoryModel = require("../../models/notes/directory.model");
const NoteModel = require("../../models/notes/note.model");

module.exports = {
  create: async (req, res) => {
    const content = req.value.body;
    content.createdAt = Date.now();
    content.createdBy = req.decoded.user;
    const objToSave = new DirectoryModel(content);
    await objToSave.save();
    res.status(200).send(objToSave);
  },
  list: async (req, res) => {
    const directories = await DirectoryModel.find({ createdBy: req.decoded.user }).sort("-createdAt");
    res.status(200).send(directories);
  },
  remove: async (req, res) => {
    const { id } = req.value.params;
    const notesToRemove = await NoteModel.find({ directory: id });
    if (notesToRemove) {
      for (let i = 0; i < notesToRemove.length; i++) {
        await NoteModel.findByIdAndRemove(notesToRemove[i]._id);
      }
    }
    let objToSave = await DirectoryModel.findByIdAndRemove(id);
    res.status(200).send(objToSave);
  },
  update: async (req, res) => {
    const { id } = req.value.params;
    const content = req.value.body;
    const objToSave = await DirectoryModel.findByIdAndUpdate(id, content);
    if (content.name) objToSave.name = content.name;
    res.status(200).send(objToSave);
  }
};
