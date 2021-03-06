export default class SwapiService{ //запит на сервер та отримуємо ключі

    apiBase='https://swapi.dev/api'
    async getResource(url){
      const res=await fetch(`${this.apiBase}${url}`);
    return await res.json();
    }
     getAllPeople=async()=>{
      
     const res=await this.getResource('/people/');
    return res.results.map(this.transformPeople);
   
    };
     getPeople=async(id)=>{

      const people=await this.getResource(`/people/${id}`);
      
      return this.transformPeople(people);
      
    };
    getAllPlanets=async()=>{
      const res= await this.getResource('/planets/');
      return res.results.map(this.transformPlanet).slice(1);
    };
     getPlanet=async(id)=>{
      const planet=await this.getResource(`/planets/${id}`);//зтворили змінну з запитом на сервер

      return this.transformPlanet(planet) //зробили трансформацію даних

    };
     getAllShips= async()=>{
       const res=await this.getResource('/starships/');
      return  res.results.map(this.transformStarship)
    };
     getShip= async(id)=>{
       const ship=await this.getResource(`/starships/${id}`);
      return this.transformStarship(ship)  
    };
    extractId(item){ //функція яка повертає id
      const regid=/\/([0-9]*)\/$/;
      return item.url.match(regid)[1];
    };
    transformPlanet=(planet)=>{ //зробили функцію трансформацію яка повертає новий обєкт
  return{
    id:this.extractId(planet),
     name:planet.name,
    population:planet.population,
    rotationPeriod:planet.rotation_period,
    diameter:planet.diameter           
    };
  };
 
  transformPeople=(people)=>{ //зробили функцію трансформацію яка повертає новий обєкт
    return{
      id:this.extractId(people),
       name:people.name,
       gender:people.gender,
       birthYear:people.birth_year,
       eyeColor:people.eye_color,
       hairColor:people.hair_color,
       height:people.height,
       mass:people.mass

           
      };
    };
    transformStarship=(starship)=>{ //зробили функцію трансформацію яка повертає новий обєкт
      return{
        id:this.extractId(starship),
         model:starship.model,
       name:starship.name,
       manufacturer:starship.manufacturer,
       starshipClass:starship.starship_class,
       speed:starship.max_atmosphering_speed,
       hyperdrive_rating:starship.hyperdrive_rating,
       length:starship.length,
       crew:starship.crew,
       passengers:starship.passengers         
        };
      };
  }
  



  /*const people =new SwapiService();
  people.getPeople(2).then((body)=>{
  console.log(body)
  })*/
  