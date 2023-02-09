export default interface TaskInterface {
  id: string;
  date: number;
  description?: string | null;
  done: boolean;
  title: string;
}
