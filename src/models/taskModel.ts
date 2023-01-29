
export default interface TaskModel {
  [key: string]: any;
  id: number;
  seq: number;
  title: string;
  description: string;
  color: string;
  isImportant: boolean;
  isDeleted: boolean;
  timeStamp: Date;

  // constructor(id: number, seq: number, title: string, description: string, color: string, isImportant: boolean, isDeleted: boolean, timeStamp: Date) {
  //   this.id = id;
  //   this.seq = seq;
  //   this.title = title || '';
  //   this.description = description || '';
  //   this.color = color || '';
  //   this.isImportant = isImportant;
  //   this.isDeleted = isDeleted;
  //   this.timeStamp = timeStamp;
  // }
  // constructor(memo: TaskModel) {
  //     {
  //       this.id = memo.id;
  //       this.seq = memo.seq;
  //       this.title = memo.title || '';
  //       this.description = memo.description || '';
  //       this.color = memo.color || '';
  //       this.isImportant = memo.isImportant;
  //       this.isDeleted = memo.isDeleted;
  //       this.timeStamp = new Date(memo.timeStamp);
  //     }
  // }
}