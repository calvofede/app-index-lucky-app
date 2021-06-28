import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'FormatRequirements', async: true })
@Injectable()
export class FormatRequirementsValidator
  implements ValidatorConstraintInterface
{
  async validate(prop: string, args: ValidationArguments) {
    const formatRequired = args.constraints[0];
    return formatRequired.test(prop);
  }

  defaultMessage(args: ValidationArguments) {
    return `Value ${args.value} in ${args.property} cointains invalid format`;
  }
}
