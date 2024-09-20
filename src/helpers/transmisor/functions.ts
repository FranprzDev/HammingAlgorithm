export const quantityParityBit = (data: string): number => {
    if(data.length == 0) return 0;
    if(data.length == 1) return 2;
    const n = data.length;
    let p = 3;

    for(let i = 0; i < n; i++){
        if(2**i >= n + i + 1){
            p = i;
            break;
        }
    }

    return p;
}