import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Service {
  // private readonly API_URL = "http://localhost:3333";
  private readonly API_URL = "https://gabrielpetry.com.br/v2";

  // private readonly token = "obsfuscated";
  private token: string = localStorage.getItem("token");

  setToken(token: string): void {
    this.token = token;
    return;
  }

  getToken(): string {
    return this.token;
  }

  constructor(protected http: HttpClient) {}

  protected sendGetRequest<TypeObject>(endpoint: string) {
    console.log("token", this.token);
    return this.http.get<TypeObject>(
      `${this.API_URL}/${endpoint}`,
      this.authorizationHeader()
    );
  }

  protected sendPutRequest<TypeObject>(endpoint: string, body: object) {
    return this.http.put<TypeObject>(
      `${this.API_URL}/${endpoint}`,
      { ...body },
      this.authorizationHeader()
    );
  }

  protected sendPostRequest<TypeObject>(endpoint: string, body: object) {
    return this.http.post<TypeObject>(
      `${this.API_URL}/${endpoint}`,
      { ...body },
      this.authorizationHeader()
    );
  }

  protected sendDeleteRequest<TypeObject>(endpoint: string, _id: string) {
    return this.http.delete<TypeObject>(
      `${this.API_URL}/${endpoint}/${_id}`,
      this.authorizationHeader()
    );
  }

  authorizationHeader(): object {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
  }
  get() {}
  post() {}
  put() {}
  patch() {}
  delete() {}
}
