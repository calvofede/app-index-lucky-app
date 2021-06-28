import { AddressDto } from './address.dto';
import { UserNotExists } from 'src/validators/user-not-exists.decorator';
import { LengthBetween } from 'src/validators/length-between.decorator';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FormatRequirements } from 'src/validators/format-requirements.decorator';

export class RegisterDto {
  @UserNotExists()
  username: string;
  @FormatRequirements(
    new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,255}$/),
    {
      message:
        'Password must meet format requirements: ' +
        '- at least 8 characters ' +
        '- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number ' +
        '- can contain special characters',
    },
  )
  password: string;
  @LengthBetween(1, 255)
  name: string;
  @IsNotEmpty()
  @ValidateNested({ each: false })
  @Type(() => AddressDto)
  address: AddressDto;
}
