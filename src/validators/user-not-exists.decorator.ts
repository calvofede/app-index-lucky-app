import { UserNotExistsValidator } from './user-not-exists.validator';
import { ValidationOptions, registerDecorator } from 'class-validator';

export function UserNotExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UserNotExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UserNotExistsValidator,
    });
  };
}
