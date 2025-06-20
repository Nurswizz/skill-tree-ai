import mongoose, { Schema, Types } from "mongoose";

export interface INode {
    name: string;
    tasks: string[];
    description: string;
    parentId: Types.ObjectId | null;
    userId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const nodeSchema = new Schema<INode>({
    name: { type: String, required: true },
    tasks: [{ type: String }],
    description: String,
    parentId: { type: Schema.Types.ObjectId, ref: "Node", default: null },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export default mongoose.model<INode>("Node", nodeSchema);
