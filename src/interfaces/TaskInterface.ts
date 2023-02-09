export default interface TaskInterface {
  id: string;
  date: number;
  description?: string | null;
  done: boolean;
  doneAt?: number | null;
  title: string;
}
