function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if(!curr){
        return false;
    }

    if(curr.value === needle){
        return true;
    }

    if(curr.value < needle){
        return search(curr.right, needle);
    }
    if(curr.value == 1){
        return true;
    }

    return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}