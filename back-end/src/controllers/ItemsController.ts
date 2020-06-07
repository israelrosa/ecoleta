import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemController{
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    //Serialização de dados
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.16.110:3333/uploads/${item.image}`,
      }
    }) 
  
    return response.json({data: serializedItems});
  }
}

export default ItemController;