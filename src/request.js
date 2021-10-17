
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/875a216f-6fa6-4ff3-ad44-698589de870f`);
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
