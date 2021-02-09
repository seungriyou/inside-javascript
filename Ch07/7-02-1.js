// 명령형 프로그래밍 방식 - 덧셈
function sum(arr) {
    var len = arr.length;
    var i = 0, sum = 0;

    for(; i < len; i++) {
        sum += arr[i];
    }

    return sum;
}

var arr = [1,2,3,4];
console.log(sum(arr));