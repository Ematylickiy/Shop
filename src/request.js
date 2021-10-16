
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/ca698304-4469-420b-84fa-473d49266873`);
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
