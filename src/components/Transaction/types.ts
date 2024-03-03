export type TransactionProps = {
    transaction: TransactionType;
};

export type TransactionType = {
    id: number | string;
    title: string;
    value: number;
};
