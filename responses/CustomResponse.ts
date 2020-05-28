export default class CustomResponse {
  success: boolean;
  message: String;

  constructor(success: boolean, message: String) {
    this.success = success;
    this.message = message;
  }
}
