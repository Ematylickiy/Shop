async function request() {
    try {
      const response = await fetch(`https://run.mocky.io/v3/278b20db-de60-484d-aae1-802aa69cd6a6`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
  
  async function getALLData(){
    try {
      const data = await request();
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }
  
  
  export default getALLData;