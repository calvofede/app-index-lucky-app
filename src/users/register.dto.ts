import { AddressDto } from './address.dto';
import { UserNotExists } from 'src/validators/user-not-exists.decorator';
import { NotEmptyAndMaxLength } from 'src/validators/not-empty-max-length.decorator';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class RegisterDto {
  @UserNotExists()
  username: string;
  @NotEmptyAndMaxLength(255)
  password: string;
  @NotEmptyAndMaxLength(255)
  name: string;
  @IsNotEmpty()
  @ValidateNested({ each: false })
  @Type(() => AddressDto)
  address: AddressDto;
}
