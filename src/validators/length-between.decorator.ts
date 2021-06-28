import { ValidationOptions, registerDecorator } from 'class-validator';
import { LengthBetweenValidator } from './length-between.validator';

export function LengthBetween(
  minLength: number,
  maxLength: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'LengthBetween',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [minLength, maxLength],
      options: validationOptions,
      validator: LengthBetweenValidator,
    });
  };
}
