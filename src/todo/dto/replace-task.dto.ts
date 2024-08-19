import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReplaceTaskDto {
  @IsOptional()
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

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  isChecked: boolean;
}
