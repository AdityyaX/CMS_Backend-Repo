import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './article.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async createArticle(article: Article): Promise<Article> {
    const createdArticle = new this.articleModel(article);
    return createdArticle.save();
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async getArticleById(id: string): Promise<Article | undefined> {
    return this.articleModel.findById(id).exec();
  }

  async updateArticle(id: string, updatedArticle: Article): Promise<Article | undefined> {
    return this.articleModel.findByIdAndUpdate(id, updatedArticle, { new: true }).exec();
  }

  async deleteArticle(id: string): Promise<boolean> {
    const result = await this.articleModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }
}