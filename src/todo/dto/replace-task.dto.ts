import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReplaceTaskDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    value
      .trim()
      .replace(/\s+/g, '')
      .replaceAll(/</g, '&lt;')
      .replaceAll(/>/g, '&gt;'),
  )
  @IsOptional()
  taskText: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isChecked: boolean;
}
