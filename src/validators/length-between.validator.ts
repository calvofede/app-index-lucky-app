import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'LengthBetween', async: true })
@Injectable()
export class LengthBetweenValidator implements ValidatorConstraintInterface {
  async validate(prop: string, args: ValidationArguments) {
    const minLength = args.constraints[0];
    const maxLength = args.constraints[1];
    return prop && prop.length >= minLength && prop.length <= maxLength;
  }

  defaultMessage(args: ValidationArguments) {
    return `Value ${args.value} in ${args.property} length must be between ${args.constraints[0]} and ${args.constraints[1]}`;
  }
}
