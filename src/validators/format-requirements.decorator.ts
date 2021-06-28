import { ValidationOptions, registerDecorator } from 'class-validator';
import { FormatRequirementsValidator } from './format-requirements.validator';

export function FormatRequirements(
  formatRequired: RegExp,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'FormatRequirements',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [formatRequired],
      options: validationOptions,
      validator: FormatRequirementsValidator,
    });
  };
}
