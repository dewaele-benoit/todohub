export interface ITodo {
    id?: string;
    title: string;
    description?: string;
    dateLimit?: Date;
    done: boolean;
    dateDone?: Date;
}