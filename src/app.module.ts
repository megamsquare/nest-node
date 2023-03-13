import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './v1/auth/auth.module';
import { UserModule } from './v1/user/user.module';
import { GitController } from './add/git/git.controller';

@Module({
  imports: [
    AuthModule, 
    UserModule
  ],
  controllers: [AppController, GitController],
  providers: [AppService],
})
export class AppModule {}
