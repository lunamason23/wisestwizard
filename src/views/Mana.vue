<template>
  <body>
    <div class="title">
      <h1>Main Page</h1>
    </div>
    <div class="managens">
      <div class="managen1">
        <h1>0</h1>
        <button>Buy one</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
  .title {
    color: white;
    text-decoration-line: underline;
    height:20px;
    width: 100vw;
    text-align: center;
  }
  body {
    background-color: #00475a;
    width:100%;
    display: block;
    justify-content: center;
    flex-wrap: wrap;
  }
  .managen1 {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: white;
  }
  button {
    height: 25px;
    align-items: center;
    margin-left:20px;
  }
</style>
