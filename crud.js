const mongoose = require("mongoose")
const data_schema1 = require("./schema")


const post_data = async(req,res)=>{
const data = new data_schema1({

    ...req.body,
})
const save_data = await data.save();
res.json(save_data)
}

const get_data = async(req,res)=>{
    const find_data = await data_schema1.find({});
    res.json(find_data)
}


const delete_data = async(req,res)=>{
    const del_data = await data_schema1.findByIdAndDelete(req.params.id)
    res.json({message:"deleted",delete_data:del_data})
}

const update_data = async (req, res) => {
    const put_data = await data_schema1.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(put_data);
  };

module.exports={
    post_data,
    get_data,
    delete_data,
    update_data
}