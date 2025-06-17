interface Node {
    id: string;
    name: string;
    tasks: string[];
    description?: string;
    children: Node[];
    parentId?: string;
    createdAt: Date;
    updatedAt: Date;
}
