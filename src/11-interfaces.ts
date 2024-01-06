export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  disconnect(): void {
    throw new Error('Methor not implemented');
  }
  isConnected(name: string): boolean {
    return true;
  }
}
class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return false;
  }
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
//   connect() {},
// };
