import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Scheduled',
    }
})

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);