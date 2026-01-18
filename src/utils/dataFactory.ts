import { PracticeFormData, WebTableUser } from '../types/demoqa';

export const DataFactory = {
  createPracticeFormData: (): PracticeFormData => ({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    mobile: '1234567890',
    dateOfBirth: '15 Oct 1990',
    hobbies: ['Sports', 'Music'],
    address: '123 Main St, Springfield',
    state: 'NCR',
    city: 'Delhi'
  }),

  createWebTableUser: (overrides?: Partial<WebTableUser>): WebTableUser => ({
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    age: 28,
    salary: 50000,
    department: 'Engineering',
    ...overrides
  })
};
