import { Logger, Module } from '@nestjs/common';
import { AppResolver } from './app/app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true, // sets up a playground on https://localhost:3000/graphql
    }),
  ],
  controllers: [],
  providers: [
    AppResolver,
    {
      provide: Logger,
      useClass: Logger,
    },
  ],
})
export class AppModule {}
