const { Schema, model } = require("mongoose")

const districtSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    bn_name: {
        type: String,
        trim: true,
        required: true
    },
    division: {
        type: Schema.Types.ObjectId,
        ref: "Division",
        default: null
    },
    created_by: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})


const District = model("District", districtSchema)
module.exports = District
