export default interface TaskInterface {
  id: string;
  date: number;
  description?: string;
  done: boolean;
  doneAt?: number;
  title: string;
}
