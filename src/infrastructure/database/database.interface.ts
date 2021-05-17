export default interface Idatabase {
  start(): Promise<void>;
  close(): Promise<void>;
}
