---
title: 10972. 다음 순열
date: 2020-02-21
summary: 1부터 N까지의 수로 이루어진 순열이 있다. 이때, 사전순으로 다음에 오는 순열을 구하는 프로그램을 작성하시오.
tags:
    - algorithm
    - implement
---
# 10972. 다음 순열
## 문제
1부터 N까지의 수로 이루어진 순열이 있다. 이때, 사전순으로 다음에 오는 순열을 구하는 프로그램을 작성하시오.

사전 순으로 가장 앞서는 순열은 오름차순으로 이루어진 순열이고, 가장 마지막에 오는 순열은 내림차순으로 이루어진 순열이다.

`N = 3`인 경우에 사전순으로 순열을 나열하면 다음과 같다.
```
1, 2, 3
1, 3, 2
2, 1, 3
2, 3, 1
3, 1, 2
3, 2, 1
```
### 입력
첫째 줄에 N(1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄에 순열이 주어진다.
### 출력
첫째 줄에 입력으로 주어진 순열의 다음에 오는 순열을 출력한다. 만약, 사전순으로 마지막에 오는 순열인 경우에는 -1을 출력한다.

## Overview

순열을 구할 땐 `DFS`를 많이 사용하지만, 거꾸로 다음 순열을 찾을 땐 그렇게 하기보단 맨 뒤부터 다음 수가 존재하는지 따져보고 있으면 넣고 그대로 출력, 없으면 순열의 앞 수로 넘기는 진행을 하면 좋을 것 같았다. 

그런데 노트에 조금 끄적여보니 그렇게 단순한 문제가 아니다. 복잡한 과정을 빼고 간단하게 이 문제를 보자.

`N=4`일 때, 순열의 사전 순 진행은 다음과 같다.
```
1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
...
```

n번째 자릿수가 바뀌려면, 그 뒤 나머지 부분순열이 사전순으로 마지막이어야 한다. 예를 들어 둘 째 자리 수가 2에서 3이 되려면 뒤 나머지 두 수의 순서가 34가 아니라 43이어야 한다. 이를 일반화하여 재귀함수로 풀 수 있지 않을까?

## first solution

일반화하긴 했지만, 반복문으로 구현했다. n번째 자리 이후의 부분순열이 사전순으로 가장 나중인지 확인하고, 가장 나중이라면 n번째 자릿수보다 큰 수들 중 가장 작은 수를 n번째 자릿수와 바꾼 뒤, 부분순열을 오름차순으로 정렬한다. 추가로 1번째 자리부터 사전순으로 가장 나중이라면, 뒷 순열이 없으므로 예외처리를 해줬다.
```cpp
bool nxtSubset() {
    bool isFirst = true;
    int pos;
    for(pos=0; pos<n-1; pos++) {
        if(isLargest(pos))
            break;
        isFirst = false;
    }
    if(isFirst)
        return false;
    swap(pos-1, smallestInLarger(subset[pos-1]));
    sort(subset.begin()+pos, subset.end());
    return true;
}

void swap(int a, int b) {
    int tmp = subset[a];
    subset[a] = subset[b];
    subset[b] = tmp;
}
bool isLargest(int pos) {
    int prev = subset[pos];
    for(int i=pos+1; i<n; i++) {
        if(subset[i] > prev)
            return false;
        prev = subset[i];
    }
    return true;
}
int smallestInLarger(int tar) {
    for(int i=n-1; i>=0; i--) {
        if(subset[i] > tar)
            return i;
    }
    return -1;
}
```
### 결과

`맞았습니다!`
한 번에 맞을 때의 기분은 늘 짜릿하다. 노트에 쓰면 차분히 생각한 게 잘 작용한 것 같다.

## 최종 코드

[github](https://github.com/shinjawkwang/bojPractice/blob/master/math/10972.cpp)