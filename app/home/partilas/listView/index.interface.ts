interface fromTo {
    date : string;
}


export interface ItemProps {
    summary: string;
    created: string;
    start: fromTo;
    end: fromTo;
    id?: string;
};

export default interface Items {
    items: ItemProps[];
    loading: boolean;
}


