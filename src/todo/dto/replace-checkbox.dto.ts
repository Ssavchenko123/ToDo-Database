import { IsBoolean } from 'class-validator';
export class ReplaceCheckboxDto {
  @IsBoolean()
  isChecked: boolean;
}
