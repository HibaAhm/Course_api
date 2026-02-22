import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {   // ✅ Must have 'export'
  constructor(private readonly coursesService: CoursesService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCourseDto) {
    return this.coursesService.create(dto);
  }
}