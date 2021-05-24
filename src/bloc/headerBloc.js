import { apiURL } from "../utils/constants";

export async function getMake() {
  return new Promise( async (resolve, reject) => {
    try {
      await fetch(`${apiURL}/Make`)
      .then(response => response.json())
      .then(result => {
        let makes = result.map((makes) => {
          return {
            id: makes.ID,
            name: makes.Name
          }
        });

        resolve(makes);
      })
    } catch (error) {
      console.error("ERROR: ", error);
      reject(error);
    }
  });
}

export async function getModel(id) {
  return new Promise( async (resolve, reject) => {
    try {
      await fetch(`${apiURL}/Model?MakeID=${id}`)
      .then(response => response.json())
      .then(result => {
        let makes = result.map((model) => {
          return {
            makeId: model.MakeID,
            id: model.ID,
            name: model.Name
          }
        });

        resolve(makes);
      })
    } catch (error) {
      console.error("ERROR: ", error);
      reject(error);
    }
  });
}

export async function getVersion(id) {
  return new Promise( async (resolve, reject) => {
    try {
      await fetch(`${apiURL}/Version?ModelID=${id}`)
      .then(response => response.json())
      .then(result => {
        console.log("RESULT", result);
        let versions = result.map((version) => {
          return {
            modelId: version.ModelID,
            id: version.ID,
            name: version.Name
          }
        });
  
        resolve(versions);
      })
    } catch (error) {
      console.error("ERROR: ", error);
      reject(error);
    }
  });
}

export async function getCars() {
  return new Promise( async (resolve, reject) => {
    try {
      await fetch(`${apiURL}/Vehicles?Page=1`)
      .then(response => response.json())
      .then(result => {
        let cars = result.map((car) => {
          return {
            id: car.ID,
            make: car.Make,
            model: car.Model,
            version: car.Version,
            image: car.Image,
            km: car.KM,
            price: car.Price,
            yearModel: car.YearModel,
            yearFab: car.YearFab,
            color: car.Color
          }
        })

        console.log("CARS:: ", cars);
  
        resolve(cars);
      })
    } catch (error) {
      console.error("ERROR: ", error);
      reject(error);
    }
  });
}