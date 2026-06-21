// src/utils/ApiResponse.js

export class ApiResponse {
  constructor({
    status = 200,
    message = 'Success',
    data = null,
    meta = null,
  } = {}) {
    this.success = true;
    this.status = status;
    this.message = message;
    this.data = data;
    this.meta = meta;
    this.timestamp = new Date().toISOString();
  }
}