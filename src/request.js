
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/62607d5c-4b0f-4e5c-a383-8ee029631390`);
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
