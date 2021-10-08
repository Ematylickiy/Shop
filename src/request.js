
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/f99c178d-1b29-4b33-8939-7318dae64eaa`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getData(device){
  try {
    const data = await request();
    return data[device];
  }
  catch (error) {
    console.log(error);
  }
}

export default getData;
