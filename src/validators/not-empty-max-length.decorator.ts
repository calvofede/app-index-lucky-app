import { ValidationOptions, registerDecorator } from 'class-validator';
import { NotEmptyAndMaxLengthValidator } from './not-empty-max-length.validator';

export function NotEmptyAndMaxLength(
  property: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'NotEmptyAndMaxLength',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: NotEmptyAndMaxLengthValidator,
    });
  };
}
