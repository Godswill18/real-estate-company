const mongoose =require("mongoose");

const pagePostSchema = new mongoose.Schema(
   
{timestamps:true}
);

module.exports = mongoose.model("PagePost", pagePostSchema);