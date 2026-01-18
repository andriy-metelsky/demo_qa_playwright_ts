export type Gender = 'Male' | 'Female' | 'Other';
export type Hobby = 'Sports' | 'Reading' | 'Music';

export interface PracticeFormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  mobile: string;
  dateOfBirth: string; // Format: "15 Oct 1990"
  hobbies: Hobby[];
  picturePath?: string;
  address: string;
  state: string;
  city: string;
}

export interface WebTableUser {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  salary: number;
  department: string;
}
