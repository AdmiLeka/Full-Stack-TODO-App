export interface Todo {
    id: number;
    text: string;
    date: string;
    //completed: boolean;
}

export const todoList: Todo[] = reactive([
    {
        id: 1,
        text: "This is a test template for the todo.",
        date: "15.1.2023"
    },
    {
        id: 2,
        text: "This is another a test template for the todo. Refreshing the page will make added todos dissapear",
        date: "15.1.2023"
    }
    ]);