import { Product } from "../types/Product";
import { ApiService } from "./ApiService";

export class ProductService extends ApiService<Product> {
  constructor() {
    // Chama o construtor da classe pai (ApiService) com a URL base e o token
    super(
      "http://10.63.45.59:8080/produtos/",
      "stNOJvYxgbX3bRg3CEGMTNiqnIO3TMMHPi8K3ehLzk3KqcN3tJbDnBdMwWvAj84r2fiKvaAxQC58i1BsR5iqjBzzscwMudNv8xL6"
    );
  }
  async getById(id: number): Promise<Product> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "GET",
      headers: this._headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar produto");
    }
    const data = await response.json();
    return data.data;
  }

  async getAll(): Promise<Product[]> {
    const response = await fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    const data = await response.json();
    return data.data;
  }
  async create(data: Product): Promise<Product> {
    const response = await fetch(this._baseUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Erro ao criar produto");
    }
    const createdProduct = await response.json();
    return createdProduct.data;
  }

  async update(id: number, data: Product): Promise<Product> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Erro ao atualizar produto");
    }
    const updatedProduct = await response.json();
    return updatedProduct.data;
  }
  async delete(id: number): Promise<void> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao deletar produto");
    }
    return;
  }
}
