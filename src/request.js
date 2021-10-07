
async function request() {
  try {
    const response = await fetch(`https://run.mocky.io/v3/bd0122f9-862e-4948-a6a2-f4627f8b2ad3`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getData(){
  try {
    const data = await request() ;
    console.log(data.smartphones.iphone_12)
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

export default getData;
