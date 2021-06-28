import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'NotEmptyAndMaxLength', async: true })
@Injectable()
export class NotEmptyAndMaxLengthValidator
  implements ValidatorConstraintInterface
{
  async validate(prop: string, args: ValidationArguments) {
    const maxLength = args.constraints[0];
    return prop && prop.length <= maxLength;
  }

  defaultMessage(args: ValidationArguments) {
    return `Value ${args.value} in ${args.property} must not be empty or exceed max length of ${args.constraints[0]}`;
  }
}
