interface EnvType {
  PORT?: number;
}

type EnvKey = keyof EnvType;
type EnvValue = EnvType[EnvKey];

export default class Env {
  static get(key: keyof EnvType): EnvValue {
    return process.env[key];
  }
}
