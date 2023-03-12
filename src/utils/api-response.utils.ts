export class APIResponse {
  message: string;
  data: any[];

  constructor(message: string, data: any[]) {
    this.message = message;
    this.data = data;
  }

  static ok(message: string, data: any[] = []) {
    return new APIResponse(message, data);
  }
}
