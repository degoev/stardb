export default class SwapiService{
    _apiBase = "https://swapi.co/api";
    getResource = async (url) => {
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
        let res = await this.getResource("/planet/");
        return await res.results;
    }

    getPlanet(id){
        return this.getResource(`/planet/${id}`);
    }

    async getAllStarships(){
        let res = await this.getResource("/starships/");
        return await res.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}`);
    }
}