<template>
  <div class="sidebar">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="bootstrap" viewBox="0 0 118 94">
        <title>Bootstrap</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
        ></path>
      </symbol>
      <symbol id="home" viewBox="0 0 16 16">
        <path
          d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
        />
      </symbol>
      <symbol id="speedometer2" viewBox="0 0 16 16">
        <path
          d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"
        />
        <path
          fill-rule="evenodd"
          d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
        />
      </symbol>
      <symbol id="table" viewBox="0 0 16 16">
        <path
          d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"
        />
      </symbol>
      <symbol id="people-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </symbol>
      <symbol id="grid" viewBox="0 0 16 16">
        <path
          d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
        />
      </symbol>
      <symbol id="collection" viewBox="0 0 16 16">
        <path
          d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"
        />
      </symbol>
      <symbol id="calendar3" viewBox="0 0 16 16">
        <path
          d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
        />
        <path
          d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </symbol>
      <symbol id="chat-quote-fill" viewBox="0 0 16 16">
        <path
          d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"
        />
      </symbol>
      <symbol id="cpu-fill" viewBox="0 0 16 16">
        <path
          d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
        />
        <path
          d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"
        />
      </symbol>
      <symbol id="gear-fill" viewBox="0 0 16 16">
        <path
          d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
        />
      </symbol>
      <symbol id="speedometer" viewBox="0 0 16 16">
        <path
          d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
        />
        <path
          fill-rule="evenodd"
          d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
        />
      </symbol>
      <symbol id="toggles2" viewBox="0 0 16 16">
        <path
          d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"
        />
        <path
          d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"
        />
        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
      </symbol>
      <symbol id="tools" viewBox="0 0 16 16">
        <path
          d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
        />
      </symbol>
      <symbol id="chevron-right" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </symbol>
      <symbol id="geo-fill" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
        />
      </symbol>
      <symbol id="chevron-double-right" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
        />
        <path
          fill-rule="evenodd"
          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </symbol>
      <symbol id="cancel" viewBox="0 0 16 16">
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </symbol>
      <symbol id="plus" viewBox="0 0 16 16">
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </symbol>
      <symbol id="setting" viewBox="0 0 16 16">
        <path
          d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
        />
        <path
          d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
        />
      </symbol>
      <symbol id="bars" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </symbol>
    </svg>
    <div class="menu-bar-mobile-screen" v-if="displayNav == false">
      <button class="menu-bars" @click="openNavbarOnSmallScreen()">
        <svg class="bi" width="16" height="16">
          <use xlink:href="#bars" />
        </svg>
      </button>
      <!-- <span class="appName">{{ sidebarMenus[0][0].appName }}</span> -->
    </div>
        <!-- :class="[displayNav==true ? 'fullPageNav' : null,`d-flex flex-column flex-shrink-0 p-3 pt-1 full-sidebar`]" -->

    <main v-else>
      <div
        v-if="openFullNav == true"
        class="d-flex flex-column flex-shrink-0 p-3 pt-1 full-sidebar"
        style="width: 240px"
      >
        <a
          class="d-flex align-items-center justify-content-between text-decoration-none"
          v-for="(app, index) in sidebarMenus[0]"
          :key="index"
        >
          <div>
            <span class="appName ms-3">{{ app.appName }}</span>
          </div>
          <span
            v-if="!isFullScreenNav"
            class="toggler-btn"
            @click="toggleNavbar()"
          >
            <svg class="bi" width="16" height="16">
              <use xlink:href="#chevron-double-right" />
            </svg>
          </span>
          <span
            v-else
            class="toggler-btn"
            @click="hideNavbarOnSmallScreen()"
          >
            <svg
              class="bi ms-3"
              width="16"
              height="16"
              style="width: 33px; height: 33px"
            >
              <use xlink:href="#cancel" />
            </svg>
          </span>
        </a>
        <hr class="mt-2" />
        <ul class="nav nav-pills flex-column mb-auto">
          <li
            class="nav-item"
            v-for="(menu, index) in sidebarMenus[1]"
            :key="index"
          >
            <router-link :to="menu.route"  class="nav-link" >
              <svg class="bi me-2" width="16" height="16">
                <use :href="`#${menu.menuIcon}`" />
              </svg>
              {{ menu.menuName }}
            </router-link>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="data:image/png;base64,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"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>Cowlar</strong>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
      <div v-if="openFullNav == true" class="divider"></div>

      <div
        v-if="openFullNav == false"
        class="d-flex flex-column flex-shrink-0 small-sidebar"
        style="width: 4.5rem"
      >
        <a
          class="d-block p-3 text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg class="bi" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="visually-hidden">Icon-only</span>
          <span class="toggler-btn" @click="toggleNavbar()">
            <svg class="bi ms-3 mt-3" width="16" height="16">
              <use xlink:href="#chevron-double-right" />
            </svg>
          </span>
        </a>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li
            class="nav-item"
            v-for="(menu, index) in sidebarMenus[1]"
            :key="index"
          >
            <router-link :to="menu.route"
              class="nav-link py-3 border-bottom"
            >
              <svg
                class="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Home"
              >
                <use :href="`#${menu.menuIcon}`" />
              </svg>
            </router-link>
          </li>
        </ul>
        <div class="dropdown border-top">
          <a
            href="#"
            class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              class="rounded-circle"
            />
          </a>
          <ul
            class="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
          >
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
      <div v-if="openFullNav == false" class="divider"></div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const openFullNav = ref(true);
const displayNav = ref(true);
const isFullScreenNav = ref(false);

const props = defineProps({
  sidebarMenus: {
    type: Array,
    required: true,
    default() {
      return [
        [{ appName: "Worklogger", appIcon: "bootstrap" }],
        [
          { menuName: "Add Logs", menuIcon: "plus", route: "add-logs" },
          { menuName: "Dasboard", menuIcon: "speedometer2", route: "dashboard" },
          { menuName: "Your Activity", menuIcon: "table", route: "" },
          { menuName: "Settings", menuIcon: "setting", route: ""},
          { menuName: "Billing", menuIcon: "grid",route: "" },
          { menuName: "Users", menuIcon: "people-circle",route: "" },
        ],
      ];
    },
  },
});

const toggleNavbar = () => {
  openFullNav.value = !openFullNav.value;
  console.log(props);
};
const openNavbarOnSmallScreen = () => {
  openFullNav.value = true;
  displayNav.value = true;
  isFullScreenNav.value = true;
};
const hideNavbarOnSmallScreen = () => {
  displayNav.value = false;
  openFullNav.value = true;
};
const windows = ref({
  width: 0,
  height: 0,
});

const handleResize = () => {
  windows.value.width = window.innerWidth;
  windows.value.height = window.innerHeight;
  if (windows.value.width <= 992) {
    openFullNav.value = false;
  } else openFullNav.value = true;

  if (windows.value.width <= 575) {
    displayNav.value = false;
    isFullScreenNav.value = true;
  } else {
    isFullScreenNav.value = false;
    displayNav.value = true;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.divider {
  flex-shrink: 0;
  // width: 1.5rem;
  height: 100vh;
  background-color: none !important;
  // background-color: rgba(0, 0, 0, 0.05);
}

.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}

.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}
.lh-tight {
  line-height: 1.25;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.appName {
  text-transform: uppercase;
  position: relative;
  font-weight: 900;
  letter-spacing: 2px;
  top: 1px;
  font-family: "Smooch Sans", sans-serif;
  font-size: 30px;
}
.menu-bar-mobile-screen {
  // background-color: rgb(94, 94, 94) !important;
  height: 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px 0px 8px;
  position: absolute;
  top: 4px;
  z-index: 2;
  svg {
    font-size: 50px;
    width: 28px;
    height: 28px;
  }
  .appName {
    float: right;
    font-size: 23px;
  }
  .menu-bars {
    // background-color: rgb(94, 94, 94) !important;
    border: none;
    color:  rgb(94, 94, 94);
  }
  .nav-item svg {
    width: 60px;
    height: 60px;
    background-color: red !important;
  }
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
