---
title: 10974. 모든 순열
date: 2020-02-22
summary: N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.
tags:
    - algorithm
    - implement
---
# 10974. 모든 순열
## 문제
N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.

### 입력
첫째 줄에 `N(1 ≤ N ≤ 8)`이 주어진다. 
### 출력
첫째 줄부터 `N!`개의 줄에 걸쳐서 모든 순열을 사전순으로 출력한다.

## Overview

[10972. 다음 순열](/daily-coding/2020/02/21/next-permutation-10972/)
에서 구현한 알고리즘을 계속 돌리면 될 것 같다.

## first solution
```cpp
int main() {
    bool worked = true;
    scanf("%d", &n);
    subset.resize(n);
    nxt.resize(n);
    for(int i=0; i<n; i++)
        subset[i] = i+1;
    while(worked) {
        worked = nxtSubset();
        if(!worked)
            break;
        else {
            for(int i=0; i<n; i++)
                printf("%d ", subset[i]);
            printf("\n");
        }
    }
    return 0;
}
```
### 결과

`틀렸습니다`;;

## second solution

`worked = nxtSubset();`의 위치를 각 루프를 돌리고 마지막에 넣어야 맨 첫 순열이 출력이 되는데 이걸 루프 시작부분에 넣어서 출력이 제대로 안된 것 같다. **테스트를 제대로 안하고 제출해서 일어난 참사;;**

### 결과

`맞았습니다!!` 첫 코드를 잘 짜놔서 이렇게 걍 루프 돌렸는데도 `시간초과`가 안나온 듯 하다. 굿굿!

## 최종 코드

[github](https://github.com/shinjawkwang/bojPractice/blob/master/math/10974.cpp)