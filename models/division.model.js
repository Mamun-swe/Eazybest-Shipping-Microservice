const { Schema, model } = require("mongoose")

const divisionSchema = new Schema({
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
    // areas: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Area",
    //     default: null
    // }],
    created_by: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})


const District = model("Division", divisionSchema)
module.exports = District
