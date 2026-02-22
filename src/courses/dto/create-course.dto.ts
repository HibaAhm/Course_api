import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  level: string;

  @IsString()
  duration: string;
}