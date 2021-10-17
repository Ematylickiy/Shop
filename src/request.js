
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/fd9f3f99-86ee-4f8f-b2bb-cb9a24589a9b`);
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
