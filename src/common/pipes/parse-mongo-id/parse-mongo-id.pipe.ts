import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    // console.log({ value, metadata});
    if (!isValidObjectId(value)) {
      throw new BadRequestException(
        'Invalid ID, the id must be a valid mongo id',
      );
    }
    return value;
  }
}
