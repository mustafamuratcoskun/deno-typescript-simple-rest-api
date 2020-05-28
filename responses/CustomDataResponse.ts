import CustomResponse from "./CustomResponse.ts";

export default class CustomDataResponse extends CustomResponse {
  data: any;

  constructor(success: boolean, message: String, data: any) {
    super(success, message);
    this.data = data;
  }
}
