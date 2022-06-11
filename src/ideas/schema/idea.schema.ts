import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type IdeasDocument = Ideas & Document;

@Schema()
export class Ideas {
    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    StartDate: Date

    @Prop()
    EndDate: Date

    @Prop({default: false})
    Abandoned: boolean
}

export const IdeasSchema = SchemaFactory.createForClass(Ideas);