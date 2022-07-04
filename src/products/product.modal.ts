export class Product {
  constructor(
    public id: string, // By adding the accessor in front of the parameter, TypeScript automatically adds property names that are the same as the parameter names and stores the incoming value into those properties.
    public title: string,
    public description: string,
    public price: number
  ) {}
}
