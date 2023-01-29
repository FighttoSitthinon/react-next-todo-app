
export default interface TaskModel {
  [key: string]: any;
  id: number;
  seq: number;
  message: string;
  color: string;
  isImportant: boolean;
  isCompleted: boolean;
  timeStamp: Date;
}