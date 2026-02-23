import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

export interface Course {
  id: number;
  title: string;
  level: string;
  duration: string;
}

@Injectable()
export class CoursesService {
  private courses: Course[] = [];
  private idCounter = 1;

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: number): Course {
    const course = this.courses.find(c => c.id === id);
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  create(dto: CreateCourseDto): Course {
    const newCourse: Course = { id: this.idCounter++, ...dto };
    this.courses.push(newCourse);
    return newCourse;
  }

  // ✅ Add PUT method
  update(id: number, dto: CreateCourseDto): Course {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException('Course not found');
    this.courses[index] = { id, ...dto };
    return this.courses[index];
  }

  // ✅ Add DELETE method
  remove(id: number): void {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException('Course not found');
    this.courses.splice(index, 1);
  }
}