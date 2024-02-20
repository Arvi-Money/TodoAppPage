
function getData() {
    let data = [];
    if (localStorage.getItem('todos')) {
      data = JSON.parse(localStorage.getItem('todos'));
    }
    return data;
  }

  export {getData}