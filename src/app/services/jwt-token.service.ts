import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from "jwt-decode";

@Injectable()
export class JWTTokenService {

    jwtToken: string | undefined;
    decodedToken: JwtPayload | undefined;

    constructor(
    ) {
    }

    private decodeToken() {
      if (this.jwtToken) {
        this.decodedToken = jwtDecode(this.jwtToken);
      }
    }

    public setToken(token: string) {
      token ? this.jwtToken = token : this.jwtToken = undefined;
    }

    // getUser() {
    //   this.decodeToken();
    //   return this.decodedToken ? this.decodedToken.displayname : null;
    // }

    // getEmailId() {
    //   this.decodeToken();
    //   return this.decodedToken ? this.decodedToken.email : null;
    // }

    // getExpiryTime() {
    //   this.decodeToken();
    //   return this.decodedToken ? this.decodedToken.exp : null;
    // }

    // isTokenExpired(): boolean {
    //   const expiryTime: number = this.getExpiryTime();
    //   if (expiryTime) {
    //     return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    //   } else {
    //     return false;
    //   }
    // }
}