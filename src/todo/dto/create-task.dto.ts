import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    value
      .trim()
      .replace(/\s+/g, '')
      .replaceAll(/</g, '&lt;')
      .replaceAll(/>/g, '&gt;'),
  )
  taskText: string;
}
