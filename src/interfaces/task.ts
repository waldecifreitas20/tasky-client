export interface Task {
  id: number,
  name: string,
  desc: string,
  date: string,
  hour?: string,
  full_day: boolean,
}