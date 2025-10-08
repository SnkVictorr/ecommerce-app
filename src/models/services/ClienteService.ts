import { ApiService } from "./ApiService";
import Cliente from "../types/Cliente";
export class ClienteService extends ApiService<Cliente> {
  constructor() {
    super(
      "http://10.63.45.59:8080/clientes/",
      "stNOJvYxgbX3bRg3CEGMTNiqnIO3TMMHPi8K3ehLzk3KqcN3tJbDnBdMwWvAj84r2fiKvaAxQC58i1BsR5iqjBzzscwMudNv8xL6"
    );
  }

  async getById(id: number): Promise<Cliente> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "GET",
      headers: this._headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar cliente");
    }
    const data = await response.json();
    return data.data;
  }

  async getAll(): Promise<Cliente[]> {
    const response = await fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar clientes");
    }
    const data = await response.json();
    return data.data;
  }
  async create(data: Cliente): Promise<Cliente> {
    const response = await fetch(this._baseUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Erro ao criar cliente");
    }
    const createdCliente = await response.json();
    return createdCliente.data;
  }

  async update(id: number, data: Cliente): Promise<Cliente> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Erro ao atualizar cliente");
    }
    const updatedCliente = await response.json();
    return updatedCliente.data;
  }
  async delete(id: number): Promise<void> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
    if (!response.ok) {
      throw new Error("Erro ao deletar cliente");
    }
    return;
  }
}
