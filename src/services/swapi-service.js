export default class SwapiService{
   
    _apiBase = "https://swapi.co/api";
    
    async getResource(url){
        let res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) throw new Error("ОШИБОЧКА ВЫШЛА, ТЫ ЧТО-ТО ПЕРЕПУКАЛ");
        return await res.json();
    };
    
    async getAllPeople(){
        let res = await this.getResource("/people/");
        return await res.results;
    }

    getPerson(id){
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets(){
        let res = await this.getResource("/planets/");
        return await res.results.map(this._transformPlanet);
    }

    async getPlanet(id){
        let planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships(){
        let res = await this.getResource("/starships/");
        return await res.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}`);
    }

    _transformPlanet(planet){
        return {
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }
}