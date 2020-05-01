export interface Communication {
  publish: (topic: string, value: any) => boolean;
  subscribe: (topic: string, handler: (topic: any, value: any) => void) => void;
}