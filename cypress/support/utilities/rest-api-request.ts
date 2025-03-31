const url = "https:/jsonplaceholder.typicode.com/todos";

export async function getTodo(id: number): Promise<any> {
    const todo = await fetch(`${url}/${id}`)
        .then(res => res.json());
    return todo;
}