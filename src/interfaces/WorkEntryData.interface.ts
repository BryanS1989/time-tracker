import type Employee from '@/interfaces/Employee.interface';
import type WorkEntry from '@/interfaces/WorkEntry.interface';

import type { WorkEntryType } from '@/Enums/enums';

export interface WorkEntryData {
    id: string;
    workCheckTypeId: null;
    employee: Employee;
    workEntryType: WorkEntryType;
    workEntryIn: WorkEntry;
    workEntryOut: WorkEntry;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
}
