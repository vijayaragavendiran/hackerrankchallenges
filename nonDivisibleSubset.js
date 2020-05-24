function nonDivisibleSubset(k, s) {
    let f = [];
    for (let i = 0; i < k; i++)
        f[i] = 0;

    // Fill frequency array with values modulo K 
    for (let i = 0; i < s.length; i++)
        f[s[i] % k]++;

    // if K is even, then update f[K/2] 
    if (k % 2 == 0)
        f[k / 2] = Math.min(f[k / 2], 1);

    // Initialize result by minimum of 1 or 
    // count of numbers giving remainder 0 
    let res = Math.min(f[0], 1);

    // Choose maximum of count of numbers 
    // giving remainder i or K-i 
    for (let i = 1; i <= k / 2; i++) {
        res += Math.max(f[i], f[k - i]);
    }

    return res;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]))

/*
[19]
19 + 10 = 29 !/4 => [19,10]
12 ==> 12 + 19 ==> 31 ! =4 and 12 + 10 = 22 !=4 ==> [19, 10, 12]
10 ==> 10 + 19 = 29 !/4 & 10 + 10 = 20 !by 4 i.e new array [10]
24 ==> 24 + 19 = 43 !/4 & 24 + 10 = 34 !/4 & 24 + 12 = 36 !/4
cont ==> 10 + 24 = 34 !/4 [10,24]
25 ==> 25 + 19 = 44 /4 i.e 25 + 10 = 35 !=4 & 25 + 24 = 49 !/4 [10,24, 25]
22 ==> 19 + 22 = 41 !/4 & 22 + 10 = 32 /4 i.e 22 + 10 /4 i.e [22]

ans [19,10,12] & [10,24,25] i.e ans is 3

 278, 496, 727, 410,
    124, 209, 702, 282,
    718, 771, 575, 436

3
1, 2, 4 , 7
1 2  1 1
1
1
*/
