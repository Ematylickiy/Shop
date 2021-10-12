
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/02b4dce6-918f-4c9a-a2af-ca3c79e27152`);
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
