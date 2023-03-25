const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    id: {type: Schema.Types.ObjectId, ref: "User"}
  },
  {timestamps: true}
);

const NoteModel = mongoose.model("Notes", NoteSchema);

module.exports = NoteModel;