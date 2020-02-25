# std::sort vector에서 활용하기
```cpp
// 오름차순
std::sort(v.begin(), v.end());
// 내림차순
#include <functional>
std::sort(v.begin(), v.end(), greater <int>());
// 부분만 정렬하고 싶을 때
std::sort(v.begin()+k, v.end());
```