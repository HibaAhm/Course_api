import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ description: 'Title of the course', example: 'NestJS Fundamentals' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Level of the course', example: 'Beginner' })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ description: 'Duration of the course', example: '6 weeks' })
  @IsString()
  @IsNotEmpty()
  duration: string;
}