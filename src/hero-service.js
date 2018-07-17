const HOST = 'http://localhost';
const PORT = '3001';
const BASE_URL = HOST + ':' + PORT + '/heroes/';

export default class HeroService {
  constructor(messageService) {
    this.messageService = messageService;
  }

  async getHeroes() {
    this.log('fetched heroes');
    return await fetch(BASE_URL).then(response => response.json());
  }

  async getHero(id) {
    return await fetch(BASE_URL + encodeURIComponent(id)).then(response => response.json());
  }

  async addHero(hero) {
    return await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(hero),
      headers: new Headers({'Content-Type': 'application/json'}),
    }).then(response => response.json());
  }

  async updateHero(hero) {
    return await fetch(BASE_URL + encodeURIComponent(hero.id), {
      method: 'PUT',
      body: JSON.stringify(hero),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => response.json());
  }

  async deleteHero(hero) {
    return await fetch(BASE_URL + encodeURIComponent(hero.id), {method: 'DELETE'}).then(response => response.json());
  }

  async searchHeroes(name) {
    if (name) {
      return await fetch(BASE_URL + '?q=' + encodeURIComponent(name)).then(response => response.json());
    } else {
      return Promise.resolve([]);
    }
  }

  log(message) {
    this.messageService.add('HeroService: ' + message);
  }
}
