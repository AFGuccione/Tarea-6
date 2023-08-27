function max(list){
    let max = list[0]
    for(i=0;i<list.length;i++){
        if(max < list[i]){
            max = list[i]
        }
    }
    return max
}

function min(list){
    let min = list[0]
    for(i=0;i<list.length;i++){
        if(min > list[i]){
            min = list[i]
        }
    }
    return min
}

function avg(list){
    let sum = 0
    for(i=0;i<list.length;i++){
        sum = sum + list[i]

    }
    let average = (sum/list.length)

    return average.toFixed(2)
}