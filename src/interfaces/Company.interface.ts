import type { Language } from "@/Enums/enums";

export default interface Company {
    id: string;
    name: string;
    language: Language;
    notificationEmail: string;
    createdAt: Date;
    updatedAt: Date;
}
