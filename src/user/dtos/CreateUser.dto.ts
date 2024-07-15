import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 20, { message: 'Username must be between 5 and 20 characters' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20, { message: 'Password must be between 5 and 20 characters' })
  password: string;
}
