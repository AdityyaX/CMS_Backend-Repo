import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.schema';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post()
  async createArticle(@Body() article: Article): Promise<Article> {
    return this.articlesService.createArticle(article);
  }

  @Get()
  async getAllArticles(): Promise<Article[]> {
    return this.articlesService.getAllArticles();
  }

  @Get(':id')
  async getArticleById(@Param('id') id: string): Promise<Article | undefined> {
    return this.articlesService.getArticleById(id);
  }

  @Put(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body() updatedArticle: Article,
  ): Promise<Article | undefined> {
    return this.articlesService.updateArticle(id, updatedArticle);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: string): Promise<boolean> {
    return this.articlesService.deleteArticle(id);
  }
}