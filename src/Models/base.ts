"use client";
// import axios, { Axios, AxiosInstance, AxiosRequestConfig } from "axios";
// import { LoginResponse } from "./Models/ClientMsgs/msgs";
// import { localStorageManager } from "utility/localstorageManager";
// import { saveFaileError, saveResponseLog } from "axios/helpers";
// import { getBranch } from "axios/base";

const baseURL = "https://testhelper.ir/toefl-api";

export type Guid = string; // & { isGuid: true }

export function uuidv4(): Guid {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16),
  ) as Guid;
}

type LoginResponse = {};
type AxiosRequestConfig<T> = LoginResponse;
export type Forg<T, TKEY> = TKEY; // | { isForg: true }
//export type Forg<T, TKEY> = {key:TKEY; value:T|undefined} ;// | { isForg: true }
export type List<T> = T[];
export type Dictionary<K, V> = Map<K, V>;
export type ForeignKey<T> = Forg<T, number>;
export type ForeignKey2<T, TKEY> = Forg<T, TKEY>;
export type Rial = number;
export type NpgsqlRange<T> = T[];

const get = (url: string, config?: any) => {
  return fetch(baseURL + url, {
    ...config,
    method: "GET",
  }).then((res) => res.json());
};

const post = (url: string, data: any, config?: any) => {
  return fetch(baseURL + url, {
    ...config,
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export class httpGettr {
  static baseURL: string = `${baseURL}/`;

  static async loginWithJwt(jwt: string): Promise<LoginResponse> {
    return httpGettr.Get1("v1/user/loginByOldJwt/" + jwt);
  }
  static async Get<T>(url: string, config?: any): Promise<T> {
    var response = await get(httpGettr.baseURL + url, config);
    return response.data as T;
  }

  static async Post<T>(url: string, data: unknown, config?: any): Promise<T> {
    return (
      await post(httpGettr.baseURL + url, data, {
        ...config,
        withCredentials: true,
      })
    ).data as T;
  }

  static async GetArray<TKEY>(url: string, arg0: TKEY[]) {
    var response = await post(httpGettr.baseURL + url, { ids: arg0 });
    return response.data as any[];
  }
  static async Get1<T>(url: string): Promise<any> {
    var response = await get(httpGettr.baseURL + url, {
      withCredentials: true,
    });
    return response.data;
  }
  static runArray<T>(ar: T[], f: (t: T) => void) {
    ar.forEach((x) => f(x));
  }
  constructor() {}
}

export class IdentityUser<T> {
  id: T;
  userName: String;
  normalizedEmail: String;
  emailConfirmed: Boolean;

  lockoutEnd: Date | undefined;
  lockoutEnabled: Boolean;
  constructor(
    id: T,
    UserName: String,
    NormalizedUserName: String,
    Email: String,
    NormalizedEmail: String,
    EmailConfirmed: Boolean,
    PasswordHash: String,
    SecurityStamp: String,
    ConcurrencyStamp: String,
    PhoneNumber: String,
    PhoneNumberConfirmed: Boolean,
    TwoFactorEnabled: Boolean,
    LockoutEnd: Date | undefined,
    LockoutEnabled: Boolean,
    AccessFailedCount: Number,
  ) {
    this.id = id;

    this.lockoutEnabled = LockoutEnabled;
    this.userName = UserName;
    this.normalizedEmail = NormalizedEmail;
    this.emailConfirmed = EmailConfirmed;
  }
}
