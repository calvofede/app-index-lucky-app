import { IsPositive } from 'class-validator';
import { LengthBetween } from 'src/validators/length-between.decorator';

export class AddressDto {
  @LengthBetween(1, 255)
  street: string;
  @IsPositive()
  cityId: string;
  @IsPositive()
  countryId: string;
}
