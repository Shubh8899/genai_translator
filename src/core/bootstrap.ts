import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "src/app.module";
import express from "express";
import compression from 'compression';
import helmet from "helmet";
import { validateConfig } from "src/configs/validate.config";
import { env } from "process";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class Bootstrap {
    private app: NestExpressApplication;

    async initApp() {
        this.app = await NestFactory.create(AppModule);
    }

    enableCors() {
        this.app.enableCors();
    }

    setupMiddleware() {
        this.app.use(express.json({ limit: '1000kb' }));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(compression());
        this.app.use(helmet());
    }

    setupGlobalPipe() {
        this.app.useGlobalPipes(validateConfig);
    }

    async startApp() {
        await this.app.listen(env.PORT);
    }

    setupSwagger() {
        const config = new DocumentBuilder()
            .setTitle('Gen AI Translator')
            .setDescription('')
            .setVersion('1.0')
            .addTag('AI')
            .build();
        const document = SwaggerModule.createDocument(this.app, config);
        SwaggerModule.setup('api', this.app, document);
    }
}