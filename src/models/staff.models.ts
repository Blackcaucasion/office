export interface Office {
    id?: string;
    name: string;
    location: string;
    email: string;
    tellNumber?: string;
    maxNumberOfOccupants: number;
    color?: string;
}

export interface Staff {
    id?:string;
    office_id:string;
    fullName:string;
}