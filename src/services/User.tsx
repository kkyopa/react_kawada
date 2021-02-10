import { GeneratedIdentifierFlags } from "typescript";

export type DummyUser = {
  gender: Gender;
  birthDate: Date;
  name: string;
  email: string;
};

export type DummyContractor = {
  Id: string;
  state: number;
  memberDate?: Date;
  startDate?: Date;
  byeDate?: Date;
};

export const Gender = {
  Male: "男性",
  Female: "女性",
  Notyet: "回答しない",
};

// 型推論してくれているのかな?
// Gender型を定義

export type Gender = typeof Gender[keyof typeof Gender];

export const DUMMY_TEST_USER: DummyUser = {
  gender: "男性",
  birthDate: new Date(1992, 2, 3),
  name: "川田京助",
  email: "kkyopa@gmail.com",
};

export const DUMMY_CONTRACTOR: DummyContractor = {
  Id: "001",
  state: 1,
};
