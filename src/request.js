
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/0a1402e7-9f03-4781-a2ce-e85604b8d0f1`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getData(){
  try {
    const data = await request();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}


export default getData;
