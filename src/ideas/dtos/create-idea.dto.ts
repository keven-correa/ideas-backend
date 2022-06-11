import { IsDate, IsDateString, IsNotEmpty, Length } from "class-validator";


export class CreateIdeaDto{
    @IsNotEmpty()
    @Length(1, 200)
    name: string;

    @IsNotEmpty()
    @Length(1, 400)
    description: string;

    @IsNotEmpty()
    StartDate: Date

    @IsNotEmpty()
    EndDate: Date

    @IsNotEmpty()
    Abandoned: boolean
}