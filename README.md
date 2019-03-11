# 나만의 library 모음

* pull-Down
  1. 버튼을 누르면 왼쪽에서 창을 끌어냅니다.
  1. 끌어내는 애니메이션 동작은 ease | linear | ease-in 등 원하는 동작을 사용할 수 있습니다.
  1. 입력받는 class명은 닫을버튼, 여는버튼, 숨겨놓을 창입니다.
  1. 입력받는 option값은 창의크기, 끌어내는 애니메이션 동작입니다.
  * 사용법
  1. 숨겨놓은 창의 display값은 fixed를 주시고, 끌어오고 싶은 방향의 속성을 0으로 해주시면 됩니다.
  1. JS코드
  ```javascript
  new PullDown({
    target:`.${숨기고 싶은 창의 class명}`,
    openBtn:`.${여는 버튼 창의 class명}`,
    closeBtn:`.${닫는 버튼 창의 class명}`
  },{
    width:`${원하는 가로 길이}`,
    height:`${원하는 높이}`,
    animation:`${원하는 애니메이션 동작}`
  })
  ```