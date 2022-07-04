import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.modal';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products?.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];

    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number
  ) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }

    this.products[index] = updatedProduct;
  }

  removeProduct(productId: string) {
    const [_, index] = this.findProduct(productId);
    this.products.splice(index, 1); // Splice is an array method that removes elements from an array.
  }

  private findProduct(productId): [Product, number] {
    // private method as it will only be used inside of this class
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    const product = this.products[productIndex];

    if (!product) {
      throw new NotFoundException('Could not find product!');
    }

    return [product, productIndex];
  }
}
