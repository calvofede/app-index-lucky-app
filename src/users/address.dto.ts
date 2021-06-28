import { IsPositive } from 'class-validator';
import { NotEmptyAndMaxLength } from 'src/validators/not-empty-max-length.decorator';

export class AddressDto {
  @NotEmptyAndMaxLength(255)
  street: string;
  @IsPositive()
  cityId: string;
  @IsPositive()
  countryId: string;
}
