import { ApiService } from "./ApiService";
import { IPayment } from "../interfaces/IPayment";
export default class PaymentService extends ApiService<IPayment> {
  constructor() {
    super(
      "http://10.63.45.59:8080/pagamentos/",
      "stNOJvYxgbX3bRg3CEGMTNiqnIO3TMMHPi8K3ehLzk3KqcN3tJbDnBdMwWvAj84r2fiKvaAxQC58i1BsR5iqjBzzscwMudNv8xL6"
    );
  }

  async paymentIntent(data: IPayment): Promise<IPayment> {
    const response = await fetch(this._baseUrl + "/create_payment.php", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to create payment");
    }
    const payment: IPayment = await response.json();
    return payment;
  }

 async confirmPayment(id_pagamento: string): Promise<IPayment> {
    const response = await fetch(
      this._baseUrl + `/confirm_payment.php`,
      {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ id_pagamento }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to confirm payment");
    }
    const payment: IPayment = await response.json();
    return payment;
  }

  getById(): Promise<IPayment> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<IPayment[]> {
    throw new Error("Method not implemented.");
  }
  create(data: IPayment): Promise<IPayment> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: IPayment): Promise<IPayment> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
