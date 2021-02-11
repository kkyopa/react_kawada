import { GeneratedIdentifierFlags } from "typescript";

export type DummyUser = {
  gender: Gender;
  birthDate: Date;
  name: string;
  email: string;
};

export type DummyContractor = {
  Id?: string;
  state?: number;
  // name: string
  // gender:Gender;
  // birthDate:Date;
};
export const DEFAULT_FORM_VALUE = "-";

export type HumanRegister = {
  Id?: string;
  state?: number;
  name: string;
  gender: Gender | typeof DEFAULT_FORM_VALUE;
  birthDate: {
    year: number;
    month: number | typeof DEFAULT_FORM_VALUE;
    date: number | typeof DEFAULT_FORM_VALUE;
  };
};

export const DummyHuman: HumanRegister = {
  name: "",
  gender: DEFAULT_FORM_VALUE,
  birthDate: {
    year: new Date().getFullYear(),
    month: DEFAULT_FORM_VALUE,
    date: DEFAULT_FORM_VALUE,
  },
};

export function getDummyHuman(): HumanRegister {
  return {
    name: DummyHuman.name,
    gender: DummyHuman.gender,
    birthDate: DummyHuman.birthDate,
  };
}

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
