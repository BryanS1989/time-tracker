import type Company from '@/interfaces/Company.interface';

import type { WorkStatus, IdentityNumberType, Status } from '@/Enums/enums';

export default interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    workStatus: WorkStatus;
    imageProfileURL: null;
    code: number;
    pin: number;
    phone: null;
    company: Company;
    gender: null;
    contractId: null;
    nid: string;
    identityNumberType: IdentityNumberType;
    ssn: null;
    pricePerHour: number;
    accountNumber: null;
    dateOfBirth: null;
    customFields: any[];
    createdAt: Date;
    updatedAt: Date;
    status: Status;
    children: null;
    disability: null;
    address: null;
    postalCode: null;
    city: null;
    province: null;
    country: null;
    nationality: null;
    personalMail: null;
    maritalStatus: null;
    emergencyPhone: null;
    description: null;
    salaryRange: null;
    studyLevel: null;
    professionalCategoryCode: null;
    professionalCategoryDescription: null;
    bic: null;
}
